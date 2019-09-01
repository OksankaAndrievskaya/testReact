import {ApiService} from "@services";
import {inject, injectable} from "inversify";
import {Saga} from "redux-chill";
import {
    takeEvery,
} from "redux-saga/effects";
import {
    getListsInformation,
    changeOrderInformation,
    updateStatusIndicator,
} from "@store/settings/actions";
import {any} from "prop-types";

@injectable()
class SettingsSaga {
    /**
     * Get dependencies
     */
    public constructor(@inject(ApiService) private api: ApiService) {
    }


    @Saga(takeEvery, getListsInformation)
    public* getListsInformation(action: ReturnType<typeof any>) {
    }
    @Saga(takeEvery, changeOrderInformation)
    public* changeOrderInformation(action: ReturnType<typeof any>) {
    }


    /**
     * Action update state information
     */
    @Saga(takeEvery, updateStatusIndicator)
    public* updateStatus(action: ReturnType<typeof any>) {
    }

}

export {SettingsSaga};
