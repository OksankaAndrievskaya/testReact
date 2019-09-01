import { takeEvery } from "redux-saga/effects";
import { navigate, Saga } from "redux-chill";
import { History } from "history";
import { injectable, inject } from "inversify";


@injectable()
class RouterSaga {
  /**
   * Get dependencies
   */
  public constructor(@inject("history") public history: History) {}
  /**
   * Push path
   */
  @Saga(takeEvery, navigate)
  public *push({ payload }: ReturnType<typeof navigate>) {
      console.log('payload', payload);
      const { history } = this;
    const [path, state] = payload;

    history.push(path as any, state);
  }
}

export { RouterSaga };
