import { styled } from "@shared";
import {Dispatch, bindActionCreators} from "redux";
import {
    getListsInformation,
    changeOrderInformation,
    addElement,
    deleteElement,
} from "@store/settings";
import {ListPage as Component} from "./list-page.component"
import {connect} from "react-redux";
import {State} from "@store/state";

const mapStateToProps = (state: State) => ({
    ...state.settings, ...state.router
});

const mapDispatchMethodToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            getListsInformation: getListsInformation,
            changeOrder: changeOrderInformation,
            addElementNew: addElement,
            deleteElement: deleteElement,
        },
        dispatch
    )

const ListPage = connect(
    mapStateToProps,
    mapDispatchMethodToProps
)( styled(require("./lists-page.scss"))(Component));

export { ListPage };
