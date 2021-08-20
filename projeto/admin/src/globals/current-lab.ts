import { action, autorun, computed, makeObservable, observable, reaction, } from "mobx";
import React from "react";
import apolloClient from "../utils/apollo-client";


class CurrentLab {
    @observable
    id?: number;

    @observable
    name?: string;

    @observable
    description: string | null = null;

    @observable
    location: string | null = null;

    @computed
    get isValid(): boolean {
        return this.id !== undefined;
    }

    // Technically not needed but it makes the calling code more readable
    @computed
    get isInvalid(): boolean {
        return !this.isValid;
    }

    constructor() {
        this.loadFromStorage();
        makeObservable(this)

        autorun(() => this.updateStorage(), { delay: 500 });
        reaction(() => this.id, apolloClient.resetStore);  // This refreshes the websocket connectionParams
    }

    // This is needed because otherwise the user has to manually selected a lab everytime they refresh the application, which is annoying.
    private loadFromStorage(): void {
        const storedLab = localStorage.getItem('currentLab');
        if (storedLab === null) {
            return;
        }
        Object.assign(this, JSON.parse(storedLab));
    }

    private updateStorage(): void {
        if (this.isInvalid) {
            return;
        }
        localStorage.setItem('currentLab', JSON.stringify(this));
    }

    @action
    public update(id: number, name: string, description?: string | null, location?: string | null) {
        this.id = id;
        this.name = name;
        this.description = description ?? null;
        this.location = location ?? null;
    }

    @action
    public unselect() {
        this.id = undefined;
        this.name = undefined;
        this.description = null;
        this.location = null;
    }
}

const currentLab = new CurrentLab();

export const CurrentLabContext = React.createContext(currentLab);

// This is needed so we can grab the observable outside of React (for apollo)
export default currentLab;