export default interface StoreState {
    readonly users: UserStoreState;
    readonly init: InitialStoreState;
}

export interface UserStoreState {
    name: string;
    token: string;
    login: string;
    email: string;
}
export interface InitialStoreState {
    thunkTest: string;
}
