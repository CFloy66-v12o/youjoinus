import ActivityStore from "./activityStore";
import userStore from "./userStore";
import { createContext } from "react";
import { configure, observable } from "mobx";
import CommonStore from "./commonStore";

configure({ enforceActions: 'always' });

export class RootStore {
    activityStore: ActivityStore;
    userStore: userStore;
    commonStore: CommonStore;

    constructor() {
        this.activityStore = new ActivityStore(this);
        this.userStore = new userStore(this);
        this.commonStore = new CommonStore(this);
    }

}

export const RootStoreContext = createContext(new RootStore());
