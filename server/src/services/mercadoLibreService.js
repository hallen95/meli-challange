import axios from "axios";
import config from "../config/index.js";
import transformItemData from "../utils/transformItemData.js";

const mercadoLibreApi = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export async function searchItems(query) {
  try {
    const response = await mercadoLibreApi.get(`/sites/MLA/search`, {
      params: { q: query },
    });
    const items = response.data.results.map(transformItemData).slice(0, 4);
    const categories =
      response.data.filters
        .find((filter) => filter.id === "category")
        ?.values[0]?.path_from_root.map((category) => category.name) || [];

    return {
      author: {
        name: "Brian",
        lastname: "Ogas",
      },
      categories: categories,
      items: items,
    };
  } catch (error) {
    console.error("Error fetching items:", error);
    throw new Error("Failed to fetch items from MercadoLibre API");
  }
}

export async function getItemDetails(itemId) {
  try {
    const itemResponse = await mercadoLibreApi.get(`/items/${itemId}`);
    const descriptionResponse = await mercadoLibreApi.get(
      `/items/${itemId}/description`
    );
    // Hypothetical endpoint to fetch category by item's category ID
    const categoryResponse = await mercadoLibreApi.get(
      `/categories/${itemResponse.data.category_id}`
    );

    const itemData = transformItemData(itemResponse.data);
    const categories = categoryResponse.data.path_from_root.map(
      (cat) => cat.name
    );

    return {
      ...itemData,
      description: descriptionResponse.data.plain_text,
      categories: categories, // Now includes categories from a separate endpoint
      author: {
        name: "Brian",
        lastname: "Ogas",
      },
    };
  } catch (error) {
    console.error("Error fetching item details:", error);
    throw new Error("Failed to fetch item details from MercadoLibre API");
  }
}

export default mercadoLibreApi;
