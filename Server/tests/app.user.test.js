import app from "../app";
import User from "../models/user";
import { connectToDB, disconnectFromDB } from "../db/conn";
import request from "supertest";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// a sample user object to use in tests
const testUser = {
  fullName: "Test User",
  userName: "testuser",
  password: "test123",
  contactNumber: 1234567890,
  address: "Test Street",
  nic: "123456789V",
};

// a helper function to generate a valid token for the test user
const getToken = async () => {
  const savedUser = new User(testUser);
  savedUser.password = savedUser.generateHash(testUser.password);
  await savedUser.save();
  const token = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET, {
    expiresIn: "10m",
  });
  return token;
};

// connect to the test database before running any tests
beforeAll(async () => {
  await connectToDB(process.env.DUMMY_ATLAS_URI);
});

// clear the test database after each test
afterEach(async () => {
  await User.deleteMany();
});

// close the database connection after all tests are done
afterAll(async () => {
  await disconnectFromDB();
});

// test the /register route
describe("POST /register", () => {
  // test the successful registration of a new user
  test("should create a new user and return a token", async () => {
    const response = await request(app)
      .post("/users/register")
      .send(testUser)
      .expect(201); // expect a 201 status code
    expect(response.body).toHaveProperty("token"); // expect a token in the response body
    const user = await User.findOne({ userName: testUser.userName }); // find the created user in the database
    expect(user).not.toBeNull(); // expect the user to exist
    expect(user.fullName).toBe(testUser.fullName); // expect the user to have the same full name as the test user
  });

  // test the validation error when the full name is missing
  test("should return a 400 error when the full name is missing", async () => {
    const response = await request(app)
      .post("/users/register")
      .send({ ...testUser, fullName: "" })
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("error"); // expect an error message in the response body
    expect(response.body.error).toContain("fullName"); // expect the error message to mention the full name field
  });

  // test the validation error when the user name is missing
  test("should return a 400 error when the user name is missing", async () => {
    const response = await request(app)
      .post("/users/register")
      .send({ ...testUser, userName: "" })
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("error"); // expect an error message in the response body
    expect(response.body.error).toContain("userName"); // expect the error message to mention the user name field
  });

  // test the validation error when the password is missing
  test("should return a 400 error when the password is missing", async () => {
    const response = await request(app)
      .post("/users/register")
      .send({ ...testUser, password: "" })
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("error"); // expect an error message in the response body
    expect(response.body.error).toContain("password"); // expect the error message to mention the password field
  });

  // test the validation error when the contact number is missing
  test("should return a 400 error when the contact number is missing", async () => {
    const response = await request(app)
      .post("/users/register")
      .send({ ...testUser, contactNumber: "" })
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("error"); // expect an error message in the response body
    expect(response.body.error).toContain("contactNumber"); // expect the error message to mention the contact number field
  });

  // test the validation error when the address is missing
  test("should return a 400 error when the address is missing", async () => {
    const response = await request(app)
      .post("/users/register")
      .send({ ...testUser, address: "" })
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("error"); // expect an error message in the response body
    expect(response.body.error).toContain("address"); // expect the error message to mention the address field
  });

  // test the validation error when the nic is missing
  test("should return a 400 error when the nic is missing", async () => {
    const response = await request(app)
      .post("/users/register")
      .send({ ...testUser, nic: "" })
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("error"); // expect an error message in the response body
    expect(response.body.error).toContain("nic"); // expect the error message to mention the nic field
  });

  // test the uniqueness error when the user name is already taken
  test("should return a 500 error when the user name is already taken", async () => {
    await request(app).post("/users/register").send(testUser); // create a test user with the same user name
    const response = await request(app)
      .post("/users/register")
      .send(testUser)
      .expect(500); // expect a 500 status code
    expect(response.body).toHaveProperty("error"); // expect an error message in the response body
    expect(response.body.error).toContain("Duplicate key"); // expect the error message to mention the duplicate key
  });
});

// test the / route
describe("GET /", () => {
  // test the successful retrieval of all users
  test("should return an array of users", async () => {
    // await request(app).post("/users/register").send(testUser); // create a test user first
    const token = await getToken(); // get a valid token for the test user
    const response = await request(app)
      .get("/users/")
      .set("Authorization", `Bearer ${token}`) // set the authorization header with the token
      .expect(200); // expect a 200 status code
    expect(response.body).toBeInstanceOf(Array); // expect the response body to be an array
    expect(response.body.length).toBe(1); // expect the array to have one element
    expect(response.body[0].userName).toBe(testUser.userName); // expect the element to have the same user name as the test user
  });

  // test the authorization error when no token is provided
  test("should return a 400 error when no token is provided", async () => {
    const response = await request(app).get("/users/").expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("message"); // expect a message in the response body
    expect(response.body.message).toBe("Unauthorized"); // expect the message to match
  });

  // test the authorization error when an invalid token is provided
  test("should return a 400 error when an invalid token is provided", async () => {
    const response = await request(app)
      .get("/users/")
      .set("Authorization", "Bearer invalid") // set the authorization header with an invalid token
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("message"); // expect a message in the response body
    expect(response.body.message).toBe("Unauthorized"); // expect the message to match
  });

  // test the authorization error when an expired token is provided
  test("should return a 400 error when an expired token is provided", async () => {
    const user = await request(app).post("/users/register").send(testUser); // create a test user first
    const token = jwt.sign(
      { userId: user._id },
      "fc6b436fb79612607f5032a7455cc73c1ad1ff0a4ca1fddf2a0d4fa746d5c8f3",
      {
        expiresIn: "1s", // set the token to expire in 1 second
      }
    );
    await new Promise((resolve) => setTimeout(resolve, 2000)); // wait for 2 seconds
    const response = await request(app)
      .get("/users/protected")
      .set("Authorization", `Bearer ${token}`) // set the authorization header with the expired token
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("message"); // expect a message in the response body
    expect(response.body.message).toContain("Unauthorized"); // expect the message to match
  });
});
