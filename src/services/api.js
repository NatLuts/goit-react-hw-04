import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async (query, page) => {
  const response = await axios.get("search/photos", {
    params: {
      query,
      page,
      per_page: 12,
      client_id: "fF4smEQdGwdsaSVAzGSHoukpDdVB9II8pe87g6f1gaE",
    },
  });
  return response.data;
};
