 import { History } from "history";
import { Container } from "inversify";
import {
  applyMiddleware,
  combineReducers,
  createStore as reduxCreateStore,
  Store
} from "redux";
import { init, router, run, transitioned } from "redux-chill";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { RouterSaga } from "./router";
import {ApiService, HttpService} from "../services";
 import {SettingsSaga} from "@store/settings/saga";
 import {settings} from "@store/settings";

const initContainer = (history: History, store: Store) => {
  const container = new Container();

  container.bind("history").toConstantValue(history);

  [HttpService, ApiService].map(item =>
    container
      .bind(item as any)
      .toSelf()
      .inSingletonScope()
  );

  const sagas = [
      RouterSaga,
      SettingsSaga
  ].map(item => {
    container
      .bind(item as any)
      .to(item)
      .inSingletonScope();

    return container.get(item as any);
  });

  return {
    sagas,
    container
  };
};

/**
 * Create redux store
 */
const createStore = (history: History) => {
  const sagaMiddleware = createSagaMiddleware();
  const reducer = combineReducers({
    router,
    settings
  });

  const store = reduxCreateStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  store.dispatch(init(history.location));

  history.listen(location => store.dispatch(transitioned(location)));

  const { sagas } = initContainer(history, store);

  run(sagaMiddleware as any, sagas);

  return store;
};

export { createStore };
