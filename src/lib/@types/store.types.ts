import { reduxStore } from "../store/store";


export type TRootState = ReturnType<typeof reduxStore.getState>;
export type TAppDispatch = typeof reduxStore.dispatch;