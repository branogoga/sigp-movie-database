import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { SET_SEARCH_QUERY } from "../Actions/SetSearchQuery";
import { SET_SEARCH_RESULTS } from "../Actions/SetSearchResults";
import * as Data from "../Data";

// worker Saga: will be fired on SET_SEARCH_QUERY actions
function* fetchSearchMovies(action: any) {
  try {
    const searchMovieResponse = yield call(Data.searchMovies, action.query);
      yield put({
        movies: searchMovieResponse.data.Search,
        totalNumberOfResults: Number(searchMovieResponse.data.totalResults),
        type: SET_SEARCH_RESULTS,
      });
   } catch (e) {
      console.error("Unable to load movies: " + e.message);
      yield put({type: SET_SEARCH_RESULTS, movies: [], totalNumberOfResults: 0});
    }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "SET_SEARCH_QUERY" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* SearchQuerySaga() {
  yield takeLatest(SET_SEARCH_QUERY, fetchSearchMovies);
}

export default SearchQuerySaga;
