import { styled } from "@shared";
import {Dispatch, bindActionCreators} from "redux";
import {SettingsState, updateStatusIndicator} from "@store/settings";
import {HeaderPage as Component} from "./header.component"
import {connect} from "react-redux";
import {State} from "@store/state";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state: State) => ({
    ...state.settings
});

const mapDispatchMethodToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
           setStatusIndicator:  updateStatusIndicator
        },
        dispatch
    )

const HeaderPage = withRouter(connect(
    mapStateToProps,
    mapDispatchMethodToProps
)( styled(require("./header.scss"))(Component)));

export { HeaderPage };
