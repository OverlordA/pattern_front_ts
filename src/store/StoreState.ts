export default interface StoreState {
    readonly users: UserStoreState;
    readonly init: InitialStoreState;
}

export interface UserStoreState {
    name: string;
    token: string;
}
export interface InitialStoreState {
    thunkTest: string;
}
