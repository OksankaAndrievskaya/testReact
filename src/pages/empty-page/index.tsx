import { styled } from "@shared";
import {Dispatch, bindActionCreators} from "redux";
import {EmptyPage as Component} from "./empty-page.component"
import {connect} from "react-redux";
import {State} from "@store/state";

const mapStateToProps = (state: State) => ({
    ...state
});

const mapDispatchMethodToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
        },
        dispatch
    );

const EmptyPage = connect(
    mapStateToProps,
    mapDispatchMethodToProps
)( styled(require("./empty-page.scss"))(Component));

export { EmptyPage };
