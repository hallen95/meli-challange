import supertest from "supertest";
import { expect } from "chai";
import nock from "nock";
import app from "../src/app.js";

// Tests for "/api/items"
describe("GET /api/items", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it("should require a query parameter 'q'", async () => {
    const response = await supertest(app).get("/api/items");
    expect(response.status).to.equal(400);
    expect(response.body).to.have.property(
      "error",
      "Query parameter q is required"
    );
  });

  it("should return formatted data when a valid query is provided", async () => {
    nock("https://api.mercadolibre.com")
      .get("/sites/MLA/search?q=iphone")
      .reply(200, {
        results: [
          {
            id: "MLA1",
            title: "iPhone 11",
            currency_id: "ARS",
            price: 1000.99,
            thumbnail: "http://example.com/iphone.jpg",
            condition: "new",
            shipping: { free_shipping: true },
          },
        ],
        filters: [
          {
            id: "category",
            values: [{ path_from_root: [{ name: "Electronics" }] }],
          },
        ],
      });

    const response = await supertest(app).get("/api/items?q=iphone");
    expect(response.status).to.equal(200);
    expect(response.body.items).to.be.an("array").that.is.not.empty;
    expect(response.body.categories).to.deep.include("Electronics");
  });

  it("should handle errors from the external API", async () => {
    nock("https://api.mercadolibre.com")
      .get("/sites/MLA/search?q=iphone")
      .reply(500);

    const response = await supertest(app).get("/api/items?q=iphone");
    expect(response.status).to.equal(500);
    expect(response.body).to.have.property("error");
  });
});

// Test for "/api/items/:id"
describe("GET /api/items/:id", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it("should return item details, description, and category for a valid ID", async () => {
    const itemId = "MLA123";
    nock("https://api.mercadolibre.com")
      .get(`/items/${itemId}`)
      .reply(200, {
        id: itemId,
        title: "Example Item",
        currency_id: "ARS",
        price: 1000.5,
        pictures: [{ url: "http://example.com/image.jpg" }],
        condition: "new",
        shipping: { free_shipping: true },
        sold_quantity: 50,
        category_id: "Category123",
      })
      .get(`/items/${itemId}/description`)
      .reply(200, { plain_text: "Great product" })
      .get(`/categories/Category123`)
      .reply(200, {
        path_from_root: [{ name: "Electronics" }, { name: "Audio" }],
      });

    const response = await supertest(app).get(`/api/items/${itemId}`);
    expect(response.status).to.equal(200);
    expect(response.body.item).to.deep.include({
      title: "Example Item",
      description: "Great product",
    });
    expect(response.body.item.categories).to.eql(["Electronics", "Audio"]);
  });

  it("should handle external API errors gracefully", async () => {
    const itemId = "MLA999";
    nock("https://api.mercadolibre.com").get(`/items/${itemId}`).reply(404);

    const response = await supertest(app).get(`/api/items/${itemId}`);
    expect(response.status).to.equal(500);
    expect(response.body).to.have.property("error");
  });
});
