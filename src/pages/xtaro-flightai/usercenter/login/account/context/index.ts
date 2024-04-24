import { Dispatch, createContext } from 'react';
import { defaultState } from '../state';
import { IAccountAction } from '../action';
import { IAccountState } from '../state/interface';

const dispatchEmpty: Dispatch<IAccountAction> = () => {};
const contextModel: [IAccountState, Dispatch<IAccountAction>] = [defaultState, dispatchEmpty];
const AccountContext = createContext(contextModel);
export { AccountContext };

type SharkFunc = {
    get: (key: string, appid: number) => string;
    sharkDatas: {
        '6002': Record<string, string>;
        '37888': Record<string, string>;
    };
};

const contextModal: [string,SharkFunc] = [
    'en-US',
    {
        get: () => '',
        sharkDatas: { '6002': {}, '37888': {} }
    },
];

const SharkContext = createContext(contextModal);
export { SharkContext };