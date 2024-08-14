import { filtersFetched, filtersFetching, filtersFetchingError } from "../components/heroesFilters/filtersSlice"

export const fetchFilters = request => dispatch => {
  dispatch(filtersFetching())
  request("http://localhost:5173/filters")
    .then(data => dispatch(filtersFetched(data)))
    .catch(() => dispatch(filtersFetchingError()))
}
