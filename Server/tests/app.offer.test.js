import app from "../app";
import Offers from "../models/offer";
import { connectToDB, disconnectFromDB } from "../db/conn";
import request from "supertest";
import { jest } from "@jest/globals";
import dotenv from "dotenv";
dotenv.config();

// a sample offer object to use in tests
const testOffer = {
  OfferName: "Buy one get one free",
  Price: 20,
  Description: "A limited time offer for pizza lovers",
};

// connect to the test database before running any tests
beforeAll(async () => {
  await connectToDB();
});

// clear the test database after each test
afterEach(async () => {
  await Offers.deleteMany();
});

// close the database connection after all tests are done
afterAll(async () => {
  await disconnectFromDB();
});

// test the /delete/:offerId route
describe("DELETE /delete/:offerId", () => {
  // test the successful deletion of an existing offer
  test("should delete the offer and return it", async () => {
    const offer = await Offers.create(testOffer); // create a test offer first
    const response = await request(app)
      .delete(`/offers/delete/${offer._id}`)
      .expect(200); // expect a 200 status code

    expect(response.body).toHaveProperty("_id"); // expect an _id in the response body
    const deletedOffer = await Offers.findById(response.body._id); // find the deleted offer in the database
    expect(deletedOffer).toBeNull(); // expect the offer to be null
  });

  // test the deletion error when the offer id is not found
  test("should return a 404 error when the offer id is not found", async () => {
    const response = await request(app).delete("/offers/delete/123").expect(500); // expect a 404 status code
    expect(response.body).toHaveProperty("error"); // expect an error message in the response body
    expect(response.body.error).toBe("Server Error"); // expect the error message to match
  });

  // test the deletion error when the offer id is invalid
  test("should return a 500 error when the offer id is invalid", async () => {
    const response = await request(app).delete("/offers/delete/invalid").expect(500); // expect a 500 status code
    expect(response.body).toHaveProperty("error"); // expect an error message in the response body
    expect(response.body.error).toContain("Server Error"); // expect the error message to mention the cast error
  });
});
