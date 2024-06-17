import { useSelector, useDispatch } from "react-redux"

import { TAppDispatch, TRootState } from "../lib/@types/store.types"


export const useAppDispatch = useDispatch.withTypes<TAppDispatch>();
export const useAppSelector = useSelector.withTypes<TRootState>();