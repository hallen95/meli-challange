import {
  searchItems,
  getItemDetails,
} from "../services/mercadoLibreService.js";

export async function getItems(req, res) {
  if (!req.query.q) {
    return res.status(400).send({ error: "Query parameter q is required" });
  }

  try {
    const result = await searchItems(req.query.q);
    res.send(result);
  } catch (error) {
    console.error("Error fetching items: ", error);
    res.status(500).send({ error: "Error fetching data from external API" });
  }
}

export async function getItemById(req, res) {
  try {
    const result = await getItemDetails(req.params.id);
    res.send({ item: result }); 
  } catch (error) {
    console.error("Error fetching item details: ", error);
    res.status(500).send({ error: "Error fetching data from external API" });
  }
}
