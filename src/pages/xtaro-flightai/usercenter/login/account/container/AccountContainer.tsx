import React, { FC, useContext, useEffect } from 'react';
import { AccountFragment } from '../component';
import { AccountContext } from '../context';
import { useLocale } from '../handler/localeHook';
import { EAccountAction, ILoadHistoryAction } from '../action';

export const AccountContainer: FC = () => {
    const [state, dispatch] = useContext(AccountContext);
    const locale = useLocale();

    return <AccountFragment />;
};
