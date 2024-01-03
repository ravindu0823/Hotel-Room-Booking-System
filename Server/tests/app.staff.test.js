import app from "../app";
import Staff from "../models/staff";
import { connectToDB, disconnectFromDB } from "../db/conn";
import request from "supertest";
import { jest } from "@jest/globals";
import dotenv from "dotenv";
dotenv.config();

// a sample staff object to use in tests
const testStaff = {
  staffName: "John Doe",
  Address: "123 Main Street",
  contactNumber: "1234567890",
  emailAddress: "johndoe@example.com",
  NIC: "123456789V",
  image: "johndoe.png",
};

// connect to the test database before running any tests
beforeAll(async () => {
  await connectToDB();
});

// clear the test database after each test
afterEach(async () => {
  await Staff.deleteMany();
});

// close the database connection after all tests are done
afterAll(async () => {
  await disconnectFromDB();
});

// test the /new route
describe("POST /new", () => {
  // test the successful creation of a new staff member
  test("should create a new staff member and return it", async () => {
    const response = await request(app)
      .post("/staff/new")
      .send(testStaff)
      .expect(201); // expect a 201 status code
    expect(response.body).toHaveProperty("_id"); // expect an _id in the response body
    const staff = await Staff.findById(response.body._id); // find the created staff member in the database
    expect(staff).not.toBeNull(); // expect the staff member to exist
    expect(staff.staffName).toBe(testStaff.staffName); // expect the staff member to have the same name as the test staff
  });

  // test the validation error when the staff name is missing
  test("should return a 400 error when the staff name is missing", async () => {
    const response = await request(app)
      .post("/staff/new")
      .send({ ...testStaff, staffName: "" })
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("error"); // expect an error message in the response body
    expect(response.body.error).toContain("staffName"); // expect the error message to mention the staff name field
  });

  // test the validation error when the address is missing
  test("should return a 400 error when the address is missing", async () => {
    const response = await request(app)
      .post("/staff/new")
      .send({ ...testStaff, Address: "" })
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("error"); // expect an error message in the response body
    expect(response.body.error).toContain("Address"); // expect the error message to mention the address field
  });

  // test the validation error when the contact number is missing
  test("should return a 400 error when the contact number is missing", async () => {
    const response = await request(app)
      .post("/staff/new")
      .send({ ...testStaff, contactNumber: "" })
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("error"); // expect an error message in the response body
    expect(response.body.error).toContain("contactNumber"); // expect the error message to mention the contact number field
  });

  // test the validation error when the email address is missing
  test("should return a 400 error when the email address is missing", async () => {
    const response = await request(app)
      .post("/staff/new")
      .send({ ...testStaff, emailAddress: "" })
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("error"); // expect an error message in the response body
    expect(response.body.error).toContain("emailAddress"); // expect the error message to mention the email address field
  });

  // test the validation error when the NIC is missing
  test("should return a 400 error when the NIC is missing", async () => {
    const response = await request(app)
      .post("/staff/new")
      .send({ ...testStaff, NIC: "" })
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("error"); // expect an error message in the response body
    expect(response.body.error).toContain("NIC"); // expect the error message to mention the NIC field
  });
});

// test the /read route
describe("GET /read", () => {
  // test the successful retrieval of all staff members
  test("should return an array of staff members", async () => {
    await request(app).post("/staff/new").send(testStaff); // create a test staff member first
    const response = await request(app).get("/staff/read").expect(200); // expect a 200 status code
    expect(response.body).toBeInstanceOf(Array); // expect the response body to be an array
    expect(response.body.length).toBe(1); // expect the array to have one element
    expect(response.body[0].staffName).toBe(testStaff.staffName); // expect the element to have the same name as the test staff
  });

  // test the empty array when no staff members are found
  test("should return an empty array when no staff members are found", async () => {
    const response = await request(app).get("/staff/read").expect(200); // expect a 200 status code
    expect(response.body).toBeInstanceOf(Array); // expect the response body to be an array
    expect(response.body.length).toBe(0); // expect the array to be empty
  });
});
