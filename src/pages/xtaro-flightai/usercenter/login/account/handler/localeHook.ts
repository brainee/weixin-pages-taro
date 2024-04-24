import { useContext,useState,Reducer, useReducer, useEffect, useRef, useCallback } from "react";
import Taro from '@tarojs/taro';

import { IAccountState } from "../state/interface";
import { IAccountAction } from "../action";
import {SharkContext} from "../context";

// export const useLocaleHook = () => {
//     return 'zh_CN';
// };


// shark
export const useLocale = () => {
    const [locale,_] = useContext(SharkContext);
    const [text, setText] = useState('');

    useEffect(() => {
        setText(locale.replace('-', '_'));
    }, [locale]);

    return text;
};


export function useLocaleHook(
    reducer: Reducer<IAccountState, IAccountAction>,
    initialState: IAccountState
): [IAccountState, React.Dispatch<IAccountAction>] {
    const [state,dispatch] = useReducer(reducer, initialState);
    const actionRef = useRef<IAccountAction>();

    // const actionRef = useRef<IAccountAction | undefined>();
    const locale = useLocale();

    useEffect(() => {
        if (!actionRef.current) {
            return;
        }
        Taro.setStorageSync(`cache_${locale}`, state);
    }, [state, actionRef, locale]);

    const dispatchProxy = useCallback(
        (action: IAccountAction) => {
            actionRef.current = action;
            dispatch(action);
        },
        [dispatch]
    );

    return [state, dispatchProxy];
}