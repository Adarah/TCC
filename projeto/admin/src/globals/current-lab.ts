import { makeObservable, observable, reaction } from "mobx";
import React from "react";


class CurrentLab {
    @observable
    id: number | null = null;

    @observable
    loading: boolean = false;

    constructor() {
        makeObservable(this)
        this.loadFromStorage();
        reaction(() => this.id, (newLabId) => this.updateStorage(newLabId), {delay: 500});
    }

    private loadFromStorage(): void {
        const storedLabId = localStorage.getItem('currentLabId');
        if (storedLabId === null) {
            return;
        }
        this.id = parseInt(storedLabId, 10);
        console.log('in storage', this.id);
    }
    
    private updateStorage(newLabId: number | null): void {
        if (newLabId === null) {
            return;
        }
        localStorage.setItem('currentLabId', newLabId.toString());
    }
}

export const CurrentLabContext = React.createContext(new CurrentLab());