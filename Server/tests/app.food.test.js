import app from "../app";
import Food from "../models/food";
import { connectToDB, disconnectFromDB } from "../db/conn";
import request from "supertest";
import dotenv from "dotenv";
import { jest } from "@jest/globals";
dotenv.config();

// a sample food object to use in tests
const testFood = {
  foodName: "Pizza",
  foodCategory: "Italian",
  foodType: "Vegetarian",
  price: 10,
  persons: 2,
  spicinessLevel: 1,
  image: "pizza.png",
};

// connect to the test database before running any tests
beforeAll(async () => {
  await connectToDB();
});

// clear the test database after each test
afterEach(async () => {
  await Food.deleteMany();
});

// close the database connection after all tests are done
afterAll(async () => {
  await disconnectFromDB();
});

// test the /new route
describe("POST /new", () => {
  // test the successful creation of a new food
  test("should create a new food and return it", async () => {
    const response = await request(app)
      .post("/foods/new")
      .send(testFood)
      .expect(201); // expect a 201 status code
    expect(response.body).toHaveProperty("_id"); // expect an _id in the response body
    const food = await Food.findById(response.body._id); // find the created food in the database
    expect(food).not.toBeNull(); // expect the food to exist
    expect(food.foodName).toBe(testFood.foodName); // expect the food to have the same name as the test food
  });

  // test the validation error when the food name is missing
  test("should return a 400 error when the food name is missing", async () => {
    const response = await request(app)
      .post("/foods/new")
      .send({ ...testFood, foodName: "" })
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("message"); // expect a message in the response body
    expect(response.body.message).toBe("Missing required fields"); // expect the message to match
  });

  // test the validation error when the food category is missing
  test("should return a 400 error when the food category is missing", async () => {
    const response = await request(app)
      .post("/foods/new")
      .send({ ...testFood, foodCategory: "" })
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("message"); // expect a message in the response body
    expect(response.body.message).toBe("Missing required fields"); // expect the message to match
  });

  // test the validation error when the food type is missing
  test("should return a 400 error when the food type is missing", async () => {
    const response = await request(app)
      .post("/foods/new")
      .send({ ...testFood, foodType: "" })
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("message"); // expect a message in the response body
    expect(response.body.message).toBe("Missing required fields"); // expect the message to match
  });

  // test the validation error when the price is missing
  test("should return a 400 error when the price is missing", async () => {
    const response = await request(app)
      .post("/foods/new")
      .send({ ...testFood, price: "" })
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("message"); // expect a message in the response body
    expect(response.body.message).toBe("Missing required fields"); // expect the message to match
  });

  // test the validation error when the persons is missing
  test("should return a 400 error when the persons is missing", async () => {
    const response = await request(app)
      .post("/foods/new")
      .send({ ...testFood, persons: "" })
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("message"); // expect a message in the response body
    expect(response.body.message).toBe("Missing required fields"); // expect the message to match
  });

  // test the validation error when the spiciness level is missing
  test("should return a 400 error when the spiciness level is missing", async () => {
    const response = await request(app)
      .post("/foods/new")
      .send({ ...testFood, spicinessLevel: "" })
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("message"); // expect a message in the response body
    expect(response.body.message).toBe("Missing required fields"); // expect the message to match
  });
});

// test the /read route
describe("GET /read", () => {
  // test getting all foods
  test("should get all foods", async () => {
    // save a test food in the database
    await Food.create(testFood);

    const response = await request(app).get("/foods/read").expect(200); // expect a 200 status code

    expect(response.body).toHaveLength(1); // expect an array with one food
    expect(response.body[0].foodName).toBe(testFood.foodName); // expect the food to have the same name as the test food
  });

  // test server error when there is an issue with the database
  test("should return a 500 error if there is a server error", async () => {
    // Mocking a connection error to simulate a server error
    jest.spyOn(Food, "find").mockImplementation(() => {
      throw new Error("Mocked server error");
    });

    const response = await request(app).get("/foods/read").expect(500); // expect a 500 status code
  });
});

// test the /:id route
describe("GET /:id", () => {
  // test getting a specific food by ID
  test("should get a specific food by ID", async () => {
    // save a test food in the database
    const savedFood = await Food.create(testFood);

    const response = await request(app)
      .get(`/foods/${savedFood._id}`)
      .expect(200); // expect a 200 status code

    expect(response.body.foodName).toBe(testFood.foodName); // expect the food to have the same name as the test food
  });

  // test 404 error when the food with the provided ID is not found
  test("should return a 404 error if the food with the provided ID is not found", async () => {
    const nonExistingId = "60b6d5d2713d361874daddb0"; // non-existing ID

    const response = await request(app).get(`/foods/${nonExistingId}`).expect(404); // expect a 404 status code
  });

  // test server error when there is an issue with the database
  test("should return a 500 error if there is a server error", async () => {
    // save a test food in the database
    const savedFood = await Food.create(testFood);

    // Mocking a connection error to simulate a server error
    jest.spyOn(Food, "findById").mockImplementation(() => {
      throw new Error("Mocked server error");
    });

    const response = await request(app).get(`/foods/${savedFood._id}`).expect(500); // expect a 500 status code
  });
});
