import app from "../app";
import Admin from "../models/admin";
import { connectToDB, disconnectFromDB } from "../db/conn";
import request from "supertest";
import dotenv from "dotenv";
dotenv.config();

// a sample admin object to use in tests
const testAdmin = {
  fullName: "Test Admin",
  userName: "testadmin",
  password: "test123",
};

// a helper function to generate a valid token for the test admin
const getToken = async () => {
  const savedAdmin = new Admin(testAdmin);
  savedAdmin.password = savedAdmin.generateHash(testAdmin.password);
  await savedAdmin.save();
  const token = jwt.sign({ adminId: savedAdmin._id }, process.env.JWT_SECRET, {
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
  await Admin.deleteMany();
});

// close the database connection after all tests are done
afterAll(async () => {
  await disconnectFromDB();
});

describe("POST /admins", () => {
  // test the successful creation of a new admin
  test("should create a new admin and return a token", async () => {
    const response = await request(app)
      .post("/admins/add")
      .send(testAdmin)
      .expect(201); // expect a 201 status code
    expect(response.body).toHaveProperty("token"); // expect a token in the response body
    const admin = await Admin.findOne({ userName: testAdmin.userName }); // find the created admin in the database
    expect(admin).not.toBeNull(); // expect the admin to exist
    expect(admin.fullName).toBe(testAdmin.fullName); // expect the admin to have the same full name as the test admin
  });

  // test the validation error when the full name is missing
  test("should return a 400 error when the full name is missing", async () => {
    const response = await request(app)
      .post("/admins/add")
      .send({ userName: testAdmin.userName, password: testAdmin.password })
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("error"); // expect an error message in the response body
    expect(response.body.error).toContain("fullName"); // expect the error message to mention the full name field
  });

  // test the validation error when the user name is missing
  test("should return a 400 error when the user name is missing", async () => {
    const response = await request(app)
      .post("/admins/add")
      .send({ fullName: testAdmin.fullName, password: testAdmin.password })
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("error"); // expect an error message in the response body
    expect(response.body.error).toContain("userName"); // expect the error message to mention the user name field
  });

  // test the validation error when the password is missing
  test("should return a 400 error when the password is missing", async () => {
    const response = await request(app)
      .post("/admins/add")
      .send({ fullName: testAdmin.fullName, userName: testAdmin.userName })
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("error"); // expect an error message in the response body
    expect(response.body.error).toContain("password"); // expect the error message to mention the password field
  });

  // test the uniqueness error when the user name is already taken
  test("should return a 500 error when the user name is already taken", async () => {
    await request(app).post("/admins/add").send(testAdmin); // create a test admin with the same user name
    const response = await request(app)
      .post("/admins/add")
      .send(testAdmin)
      .expect(500); // expect a 500 status code
    expect(response.body).toHaveProperty("error"); // expect an error message in the response body
    expect(response.body.error).toContain("Duplicate key"); // expect the error message to mention the duplicate key
  });
});

// test the /login route
describe("POST admins/login", () => {
  // test the successful login of an existing admin
  test("should return a token when valid user name and password is entered", async () => {
    await request(app).post("/admins/add").send(testAdmin); // create a test admin first
    const response = await request(app)
      .post("/admins/login")
      .send({ userName: testAdmin.userName, password: testAdmin.password })
      .expect(200); // expect a 200 status code
    expect(response.body).toHaveProperty("token"); // expect a token in the response body
  });

  // test the login error when the user name is not found
  test("should return a 404 error when the user name is not found", async () => {
    const response = await request(app)
      .post("/admins/login")
      .send({ userName: "invalid", password: testAdmin.password })
      .expect(404); // expect a 404 status code
    expect(response.body).toHaveProperty("error"); // expect an error message in the response body
    expect(response.body.error).toBe("Admin not found"); // expect the error message to match
  });

  // test the login error when the password is incorrect
  test("should return a 401 error when the password is incorrect", async () => {
    await request(app).post("/admins/add").send(testAdmin); // create a test admin first
    const response = await request(app)
      .post("/admins/login")
      .send({ userName: testAdmin.userName, password: "wrong" })
      .expect(401); // expect a 401 status code
    expect(response.body).toHaveProperty("error"); // expect an error message in the response body
    expect(response.body.error).toBe("Incorrect password"); // expect the error message to match
  });
});
