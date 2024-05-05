import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Suggestions } from "./index.types";
import { SUGGESTIONS_QUERY_KEY } from "./index.enum";
import { getSuggestions } from "./api";

export const useGetSuggestions = (
  queryOptions?: Omit<UseQueryOptions<Suggestions[]>, "queryKey" | "queryFn">
) => {
  return useQuery({
    queryKey: [SUGGESTIONS_QUERY_KEY.LIST],
    queryFn: () => getSuggestions(),
    ...queryOptions,
  });
};
