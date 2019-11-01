export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export type SET_SEARCH_QUERY = typeof SET_SEARCH_QUERY;

export interface SetSearchQuery {
    type: SET_SEARCH_QUERY;
    query: string;
}

export function setSearchQuery(query: string): SetSearchQuery {
    return {
        query,
        type: SET_SEARCH_QUERY,
    };
}