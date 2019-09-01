import {
    getListsInformation,
    changeOrderInformation,
    addElement,
    deleteElement,
} from "@store/settings";

type ListPageProps = {
    lists?: any[];
    rowInfo?: any;
    activePage?: any;
    title?: string;

    getListsInformation?: typeof getListsInformation;
    changeOrder?: typeof changeOrderInformation;
    addElementNew?: typeof addElement,
    deleteElement?: typeof deleteElement,
};

export { ListPageProps };
