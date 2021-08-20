import { makeAutoObservable, observable } from "mobx";
import React from "react";

class CurrentUser {
    @observable
    id?: string;

    constructor() {
        makeAutoObservable(this);
    }
}

const currentUser = new CurrentUser();

export const CurrentUserContext = React.createContext(currentUser);

export default currentUser;