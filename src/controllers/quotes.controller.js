import getQuoteService from "../services/quotes.services.js";

const getQuote = async (req, res) => {
  const response = await getQuoteService();

  if (response.error) return res.status(500).json(response);

  return res.status(200).json(response);
};

export { getQuote };
