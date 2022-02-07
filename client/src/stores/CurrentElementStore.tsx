import { makeAutoObservable } from "mobx";

class CurrentElementStore {

    constructor(private _element: JSX.Element) {
        makeAutoObservable(this);
    }

    set element(element: JSX.Element) {
        this._element = element;

    }

    get element() {
        return this._element;
    }

}
export default CurrentElementStore;