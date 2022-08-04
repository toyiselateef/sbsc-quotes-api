import axiosGet from "./../lib/Axios.js";
import _, { map } from "underscore";

const baseURL = process.env.QUOTEBASEURL || "https://type.fit/api";
const quoteResourceURL = process.env.QUOTERESOURCEURL || "quotes";

const getQuoteService = async () => {
  var serviceResponse = null;
  try {
    var apiResponse = await axiosGet(baseURL, quoteResourceURL);
    if (apiResponse.error) {
      // serviceResponse =
      return { success: false, code: 500, error: apiResponse.error };
    }
    const { data } = apiResponse;
    var { text, author } = _.sample(data);

    serviceResponse = {
      success: true,
      code: 200,
      quote: `${text} - ${author}`,
    };
    return serviceResponse;
  } catch (error) {
    return { success: false, code: 500, error: error };
  }
};

export default getQuoteService;
