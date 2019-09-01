import {make, create, writeTo} from "redux-chill";
import {SettingsState} from "./state";
import {
    getListsInformation,
    changeOrderInformation,
    updateStatusIndicator,
    addElement,
    deleteElement,
} from "./actions";

const {on, bootstrap} = create(new SettingsState());

const settings = bootstrap(

    on(getListsInformation, (state: SettingsState, action) => {
        let listInfo = [];
        const listInformationFromLocalStorage = JSON.parse(localStorage.getItem('lists'));

        if(!listInformationFromLocalStorage || listInformationFromLocalStorage.length === 0){

            const newList = [];
            let i = 0;
            while (i < 100) {
                newList.push({
                    name: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    index: i,
                    date: new Date()
                });
                i++;
            }

            listInfo = newList;
            localStorage.setItem('lists', JSON.stringify(newList));
        } else {
            listInfo = Array.isArray(listInformationFromLocalStorage) ? listInformationFromLocalStorage : [];
        }
        if (!state.lists) {
            state.lists = listInfo;
        }

    }),

    on(changeOrderInformation, (state: SettingsState, action) => {
        state.lists = action.payload;
        localStorage.setItem('lists', JSON.stringify(action.payload));
    }),

    on(addElement, (state: SettingsState, action) => {
        const { name, index } = action.payload;
        const elements = state.lists;

        if(index !== null) {
            const oneEl = elements.find((el)=>el.index === index);
            oneEl.name = name
        } else {
            elements.push({
                name: name,
                index: elements.length + 1,
                date: new Date()
            });
        }

        state.lists = elements;
        localStorage.setItem('lists', JSON.stringify(elements));
    }),

    on(deleteElement, (state: SettingsState, action) => {
        const {index} = action.payload;
        const elements = state.lists;
        const indexElement = elements.findIndex(el => el.index === index);
        elements.splice(indexElement, 1);
        state.lists = elements;
        localStorage.setItem('lists', JSON.stringify(elements));
    }),

    on(updateStatusIndicator, (state: SettingsState, action) => {
        state.statusIndicator = action.payload
    }),
);

export {settings};
