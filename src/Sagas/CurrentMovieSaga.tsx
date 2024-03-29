import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { SET_CURRENT_MOVIE_DETAILS } from "../Actions/SetCurrentMovieDetails";
import { SET_CURRENT_MOVIE_ID } from "../Actions/SetCurrentMovieId";
import * as Data from "../Data";

// worker Saga: will be fired on SET_CURRENT_MOVIE_ID actions
function* fetchCurrentMovie(action: any) {
   try {
        const currentMovieResponse = yield call(Data.getMovieDetails, action.movieId);
        yield put({
            movie: currentMovieResponse.data,
            type: SET_CURRENT_MOVIE_DETAILS,
        });
   } catch (e) {
       console.error("Unable to load movies: " + e.message);
       yield put({type: SET_CURRENT_MOVIE_DETAILS, movie: undefined });
    }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "SET_SEARCH_QUERY" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* CurrentMovieSaga() {
  yield takeLatest(SET_CURRENT_MOVIE_ID, fetchCurrentMovie);
}

export default CurrentMovieSaga;
