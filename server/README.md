# Project Name: MercadoLibre API Interface

## Overview

This project provides an API interface for fetching item data from the MercadoLibre API. It includes endpoints to search items based on a query and to retrieve detailed information about specific items.

## Prerequisites

- Node.js
- npm or yarn installed
- Access to MercadoLibre API (API keys if required)

## Installation

Clone the repository and run the following command to install dependencies:
npm install

## Running the Server

node index.js

## API Endpoints

### 1. Search Items

- **URL**: `/api/items`
- **Method**: `GET`
- **URL Params**:
  - **Required**: `q=[string]` (search query)
- **Success Response**:
  - **Code**: 200
  - **Content**:
    ```
    {
      "author": {
        "name": "Brian",
        "lastname": "Ogas"
      },
      "categories": ["Electronics", "..."],
      "items": [
        {
          "id": "MLA1",
          "title": "iPhone 11",
          "price": {
            "currency": "ARS",
            "amount": 1000,
            "decimals": 0.99
          },
          "picture": "http://example.com/iphone.jpg",
          "condition": "new",
          "free_shipping": true
        }
      ]
    }
    ```
- **Error Response**:
  - **Code**: 400 BAD REQUEST
  - **Content**: `{"error": "Query parameter 'q' is required"}`

### 2. Get Item Details

- **URL**: `/api/items/:id`
- **Method**: `GET`
- **URL Params**:
  - **Required**: `id=[string]` (item ID)
- **Success Response**:
  - **Code**: 200
  - **Content**:
    ```
    {
      "author": {
        "name": "Brian",
        "lastname": "Ogas"
      },
      "item": {
        "id": "MLA123",
        "title": "Example Item",
        "price": {
          "currency": "ARS",
          "amount": 1000,
          "decimals": 0.5
        },
        "picture": "http://example.com/image.jpg",
        "condition": "new",
        "free_shipping": true,
        "sold_quantity": 50,
        "description": "Great product"
      }
    }
    ```
- **Error Response**:
  - **Code**: 500 INTERNAL SERVER ERROR
  - **Content**: `{"error": "Error fetching data from external API"}`

## Tests

To run tests, execute:
npm test

## Contributors

- Brian Ogas

## License

[MIT](https://opensource.org/licenses/MIT)
