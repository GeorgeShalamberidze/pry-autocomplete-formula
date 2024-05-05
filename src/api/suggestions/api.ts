import axios from "axios";
import { Suggestions } from "./index.types";
import { SUGGESTIONS_URL } from "./index.enum";

export const getSuggestions = async (config?: {}): Promise<Suggestions[]> => {
  const res = await axios.get<Suggestions[]>(`${SUGGESTIONS_URL.LIST}`, config);

  return res.data;
};
