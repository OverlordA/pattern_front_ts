export default interface StoreState {
    readonly users: UserStoreState;
}

export interface UserStoreState {
    name: string;
    token: string;
}
