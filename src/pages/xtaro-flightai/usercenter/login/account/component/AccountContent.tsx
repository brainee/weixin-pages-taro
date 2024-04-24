import { View } from '@tarojs/components';
import React, { FC, PropsWithChildren } from 'react';
import styles from './AccountContent.module.scss';

export interface IAccountContentProps extends PropsWithChildren {
    showAd: boolean;
}

export const AccountContent: FC<IAccountContentProps> = props => {
    return <View className={styles.imageContainer}>{props.children}</View>;
};
