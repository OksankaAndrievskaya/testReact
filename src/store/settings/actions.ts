import { make } from "redux-chill";

/**
 * Update state information
 */
const getListsInformation = make("[settings] get list information",
    (payload: any) => payload);
const changeOrderInformation = make("[settings] change order",
    (payload: any) => payload);
const addElement = make("[settings] add new element",
    (payload: any) => payload);
const deleteElement = make("[settings] delete element",
    (payload: any) => payload);
/**
 * Update state information
 */
const updateStatusIndicator = make("[settings] update status indicator",
    (payload: any) => payload);

export {
    getListsInformation,
    changeOrderInformation,
    updateStatusIndicator,
    addElement,
    deleteElement,
};
