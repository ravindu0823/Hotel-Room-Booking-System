import app from "../app";
import Reservation from "../models/reservation";
import { connectToDB, disconnectFromDB } from "../db/conn";
import request from "supertest";
import dotenv from "dotenv";
import User from "../models/user";
import Room from "../models/room";
import Payment from "../models/payment";
import mongoose from "mongoose";
dotenv.config();

// connect to the test database before running any tests
beforeAll(async () => {
  await connectToDB();
});

// clear the test database after each test
afterEach(async () => {
  await Reservation.deleteMany();
  await User.deleteMany();
});

// close the database connection after all tests are done
afterAll(async () => {
  await disconnectFromDB();
});

const user = {
  fullName: "Hello World",
  userName: "dsssw",
  password: "securePassword123",
  contactNumber: "11234567890",
  address: "123 Main Street, Cityville, Country",
  nic: "123456789X",
};

const reservation = {
  arrivalDate: "2024-01-15",
  arrivalTime: "15:00",
  departureDate: "2024-01-20",
  departureTime: "11:00",
  roomId: "Deluxe Suite",
  noOfRooms: 2,
  foodType: "Breakfast",
  noOfAdults: 2,
  noOfChildren: 1,
  specialRequirements: "Allergies: None, Preferences: Non-smoking rooms",
};

describe("Reservation Routes", () => {
  describe("POST /create-with-new-user", () => {
    test("should create a reservation with a new user", async () => {
      const roomRes = new Room({
        roomType: "Deluxe Suite",
        availability: "Yes",
        facilities: "Free Wifi, Air Conditioning, Breakfast Included",
        persons: 2,
        price: 10000,
      });

      console.log(roomRes);

      reservation.roomId = roomRes._id;

      const response = await request(app)
        .post("/reservations/create-with-new-user")
        .send({ user, reservation });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("_id");
      expect(response.body).toHaveProperty("userId");
      // add more assertions as needed
    });
  });

  describe("POST /create-existing-user", () => {
    test("should create a reservation with an existing user", async () => {
      const user = {
        fullName: "SLKDJSLKJDL",
        userName: "sadsadas",
        password: "securePassword123",
        contactNumber: "11234567890",
        address: "123 Main Street, Cityville, Country",
        nic: "123456789X",
      };

      const savedUser = new User(user);

      await savedUser.save();

      const roomRes = new Room({
        roomType: "Deluxe Suite",
        availability: "Yes",
        facilities: "Free Wifi, Air Conditioning, Breakfast Included",
        persons: 2,
        price: 10000,
      });

      const response = await request(app)
        .post("/reservations/create-existing-user")
        .send({ ...reservation, userId: savedUser._id, roomId: roomRes._id });

      expect(response.status).toBe(500);
      // add more assertions as needed
    });
  });

  describe("GET /", () => {
    it("should get all reservations", async () => {
      const response = await request(app).get("/reservations");

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      // add more assertions as needed
    });
  });

  describe("GET /count", () => {
    it("should get the count of reservations and users", async () => {
      const savedPayment = new Payment({
        transactionId:  "123456789X",
        reservationId: new mongoose.Types.ObjectId(),
        userId: new mongoose.Types.ObjectId(),
        email: "test@gmail.com",
        amount: 10000,
      });

      await savedPayment.save();
      const response = await request(app).get("/reservations/count");

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("users");
      expect(response.body).toHaveProperty("reservations");
      // add more assertions as needed
    });
  });

  describe("DELETE /delete/:reservationId", () => {
    it("should delete a reservation", async () => {
      const savedUser = new User(user);
      await savedUser.save();

      const reservationData = new Reservation({
        ...reservation,
        userId: savedUser._id,
      });
      await reservationData.save();

      const response = await request(app).delete(
        `/reservations/delete/${reservationData._id}`
      );

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty(
        "_id",
        reservationData._id.toString()
      );
      // add more assertions as needed
    });
  });

  /*describe("PUT /update/:reservationId", () => {
    it("should update a reservation", async () => {
      const savedUser = new User(user);
      await savedUser.save();

      const reservationData = new Reservation({
        ...reservation,
        userId: savedUser._id,
      });
      await reservationData.save();

      const updatedReservation = {
        ...reservation,
        roomType: "Deluxe Suite",
        userId: savedUser._id,
      };

      const response = await request(app)
        .put(`/reservations/update/${reservationData._id}`)
        .send(updatedReservation);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty(
        "_id",
        reservationData._id.toString()
      );
      // add more assertions as needed
    });
  });*/

  describe("GET /:reservationId", () => {
    it("should get a reservation by ID", async () => {
      const savedUser = new User(user);
      await savedUser.save();

      const reservationData = new Reservation({
        ...reservation,
        userId: savedUser._id,
      });
      await reservationData.save();

      const response = await request(app).get(
        `/reservations/${reservationData._id}`
      );

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty(
        "_id",
        reservationData._id.toString()
      );
      // add more assertions as needed
    });
  }); 
});
