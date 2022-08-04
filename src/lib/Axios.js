/////
////
import axios from "axios";
const axiosGet = async (
  baseUrl,
  resourceUrl,
  authToken = "",
  headers = {},
  params = {}
) => {
  try {
    const axiosConfig = {
      method: "GET",
      url: `https://${baseUrl}/${resourceUrl}`,
      params: params,
      headers: {
        "Content-Type": "application/json",
      },
    };
    var result = await axios(axiosConfig);

    //console.log(JSON.stringify(axiosConfig));

    return result;
  } catch (ex) {
    console.log("error", ex);
    return { error: ex };
  }
};

export default axiosGet;
