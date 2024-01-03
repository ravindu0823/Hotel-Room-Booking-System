import app from "../app";
import Room from "../models/room";
import { connectToDB, disconnectFromDB } from "../db/conn";
import request from "supertest";
import dotenv from "dotenv";
import { jest } from "@jest/globals";
dotenv.config();

// a sample room object to use in tests
const testRoom = {
  roomType: "Deluxe",
  facilities: "AC, TV, WiFi",
  persons: 2,
  price: 100,
  image: "deluxe.png",
};

// connect to the test database before running any tests
beforeAll(async () => {
  await connectToDB();
});

// clear the test database after each test
afterEach(async () => {
  await Room.deleteMany();
});

// close the database connection after all tests are done
afterAll(async () => {
  await disconnectFromDB();
});

// test the /new route
describe("POST /new", () => {
  // test the successful creation of a new room
  test("should create a new room and return it", async () => {
    const response = await request(app)
      .post("/rooms/new")
      .send(testRoom)
      .expect(201); // expect a 201 status code
    expect(response.body).toHaveProperty("_id"); // expect an _id in the response body
    const room = await Room.findById(response.body._id); // find the created room in the database
    expect(room).not.toBeNull(); // expect the room to exist
    expect(room.roomType).toBe(testRoom.roomType); // expect the room to have the same type as the test room
  });

  // test the validation error when the room type is missing
  test("should return a 400 error when the room type is missing", async () => {
    const response = await request(app)
      .post("/rooms/new")
      .send({ ...testRoom, roomType: "" })
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("error"); // expect an error message in the response body
    expect(response.body.error).toContain("roomType"); // expect the error message to mention the room type field
  });

  // test the validation error when the facilities are missing
  test("should return a 400 error when the facilities are missing", async () => {
    const response = await request(app)
      .post("/rooms/new")
      .send({ ...testRoom, facilities: "" })
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("error"); // expect an error message in the response body
    expect(response.body.error).toContain("facilities"); // expect the error message to mention the facilities field
  });

  // test the validation error when the persons are missing
  test("should return a 400 error when the persons are missing", async () => {
    const response = await request(app)
      .post("/rooms/new")
      .send({ ...testRoom, persons: "" })
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("error"); // expect an error message in the response body
    expect(response.body.error).toContain("persons"); // expect the error message to mention the persons field
  });

  // test the validation error when the price is missing
  test("should return a 400 error when the price is missing", async () => {
    const response = await request(app)
      .post("/rooms/new")
      .send({ ...testRoom, price: "" })
      .expect(400); // expect a 400 status code
    expect(response.body).toHaveProperty("error"); // expect an error message in the response body
    expect(response.body.error).toContain("price"); // expect the error message to mention the price field
  });
});

// test the /read route
describe("GET /read", () => {
  // test getting all rooms
  test("should get all rooms", async () => {
    // save a test room in the database
    await Room.create({ ...testRoom, availability: true });

    const response = await request(app).get("/rooms/read").expect(200); // expect a 200 status code

    expect(response.body).toHaveLength(1); // expect an array with one room
    expect(response.body[0].roomType).toBe(testRoom.roomType); // expect the room to have the same type as the test room
  });

  // test server error when there is an issue with the database
  test("should return a 500 error if there is a server error", async () => {
    // Mocking a connection error to simulate a server error
    jest.spyOn(Room, "find").mockImplementation(() => {
      throw new Error("Mocked server error");
    });

    const response = await request(app).get("/rooms/read").expect(500); // expect a 500 status code
  });
});

// test the /:roomId route
describe("GET /:roomId", () => {
  // test getting a specific room by ID
  test("should get a specific room by ID", async () => {
    // save a test room in the database
    const savedRoom = await Room.create({ ...testRoom, availability: true });

    const response = await request(app)
      .get(`/rooms/${savedRoom._id}`)
      .expect(200); // expect a 200 status code

    expect(response.body.roomType).toBe(testRoom.roomType); // expect the room to have the same type as the test room
  });

  // test 404 error when the room with the provided ID is not found
  test("should return a 404 error if the room with the provided ID is not found", async () => {
    const nonExistingId = "60b6d5d2713d361874daddb0"; // non-existing ID

    const response = await request(app)
      .get(`/rooms/${nonExistingId}`)
      .expect(404); // expect a 404 status code
  });

  // test server error when there is an issue with the database
  test("should return a 500 error if there is a server error", async () => {
    // save a test room in the database
    const savedRoom = await Room.create({ ...testRoom, availability: true });

    // Mocking a connection error to simulate a server error
    jest.spyOn(Room, "findById").mockImplementation(() => {
      throw new Error("Mocked server error");
    });

    const response = await request(app)
      .get(`/rooms/${savedRoom._id}`)
      .expect(500); // expect a 500 status code
  });
});

// test the /delete/:roomId route
describe("DELETE /:roomId", () => {
  // test deleting a specific room by ID
  test("should delete a specific room by ID", async () => {
    // save a test room in the database
    const savedRoom = await Room.create({ ...testRoom, availability: true });

    const response = await request(app)
      .delete(`/rooms/${savedRoom._id}`)
      .expect(200); // expect a 200 status code

    expect(response.body.roomType).toBe(testRoom.roomType); // expect the deleted room to have the same type as the test room
  });

  // test 404 error when the room with the provided ID is not found
  test("should return a 404 error if the room with the provided ID is not found", async () => {
    const nonExistingId = "60b6d5d2713d361874daddb0"; // non-existing ID

    const response = await request(app)
      .delete(`/rooms/${nonExistingId}`)
      .expect(404); // expect a 404 status code
  });

  // test server error when there is an issue with the database
  test("should return a 500 error if there is a server error", async () => {
    // save a test room in the database
    const savedRoom = await Room.create({ ...testRoom, availability: true });

    // Mocking a connection error to simulate a server error
    jest.spyOn(Room, "findByIdAndDelete").mockImplementation(() => {
      throw new Error("Mocked server error");
    });

    const response = await request(app)
      .delete(`/rooms/${savedRoom._id}`)
      .expect(500); // expect a 500 status code
  });
});

// test the /update/:roomId route
describe("PUT /:roomId", () => {
  // test updating a specific room by ID
  test("should update a specific room by ID", async () => {
    // save a test room in the database
    const savedRoom = await Room.create({ ...testRoom, availability: true });

    const updatedRoomData = {
      roomType: "Suite",
      availability: false,
      facilities: "WiFi, TV, Mini Bar",
      persons: 3,
      price: 200,
      image: "suite-room.jpg",
    };

    const response = await request(app)
      .put(`/rooms/${savedRoom._id}`)
      .send(updatedRoomData)
      .expect(200); // expect a 200 status code

    expect(response.body.roomType).toBe(updatedRoomData.roomType); // expect the updated room to have the new type
    expect(response.body.availability).toBe(updatedRoomData.availability); // expect the updated room to have the new availability
  });

  // test 404 error when the room with the provided ID is not found
  test("should return a 404 error if the room with the provided ID is not found", async () => {
    const nonExistingId = "60b6d5d2713d361874daddb0"; // non-existing ID

    const response = await request(app)
      .put(`/rooms/${nonExistingId}`)
      .expect(404); // expect a 404 status code
  });

  // test server error when there is an issue with the database
  test("should return a 500 error if there is a server error", async () => {
    // save a test room in the database
    const savedRoom = await Room.create({ ...testRoom, availability: true });

    // Mocking a connection error to simulate a server error
    jest.spyOn(Room, "findByIdAndUpdate").mockImplementation(() => {
      throw new Error("Mocked server error");
    });

    const response = await request(app)
      .put(`/rooms/${savedRoom._id}`)
      .send({ roomType: "Updated Type" })
      .expect(500); // expect a 500 status code
  });
});
