import React, { FC, useReducer, useEffect } from 'react';
import { getCurrentInstance } from '@tarojs/taro';
import { reducer } from '../reducer';
import { defaultState, getInitState } from '../state';
import { AccountContext,} from '../context';
import { useLocaleHook, } from '../handler/localeHook';
import { AccountContainer } from './AccountContainer';
import { IUrlParams } from '../state/interface';

export const AccountProvider: FC = () => {
    const urlParam = getCurrentInstance().router?.params as IUrlParams | undefined;
    const [state, dispatch] = useLocaleHook(reducer, getInitState(urlParam));

    return (
        <AccountContext.Provider value={[state, dispatch]}>
            <AccountContainer />
        </AccountContext.Provider>
    );
};
