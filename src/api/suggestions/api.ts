import axios from "axios";
import { SUGGESTIONS_URL } from "./index.enum";
import { Suggestions } from "./index.types";

export const getSuggestions = async (config?: {}): Promise<Suggestions[]> => {
  const res = await axios.get(`${SUGGESTIONS_URL.LIST}`, config);

  return res.data.data;
};
