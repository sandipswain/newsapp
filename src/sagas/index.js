import { put, takeLatest, all } from "redux-saga/effects";
function* fetchNews() {
  const json = yield fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2021-07-22&sortBy=publishedAt&apiKey=27d9a46a45af4617bbffa2c67edbad0d"
  ).then((response) => response.json());
  yield put({ type: "NEWS_RECEIVED", json: json.articles });
}
function* actionWatcher() {
  yield takeLatest("GET_NEWS", fetchNews);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
