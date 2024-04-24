import React, { FC } from 'react';
import { View,Text, } from '@tarojs/components';
// import { SearchBoxContainer } from '../container/SearchBoxContainer';
import styles from './index.module.scss';
import { XScrollView } from '../../../../common/ScrollView';
// import { FooterContainer } from '../container/FooterContainer';

import { AccountContent } from './AccountContent';

export const AccountFragment: FC = () => {
    // 是否展示广告位
    const [showAd, setShowAd] = React.useState(false);
    const handleShowAdChange = (newShowAd: boolean) => {
        setShowAd(newShowAd);
    };

    return (
        <View className={styles.container}>
            {/* <IphoneXAdapter.Top /> */}
            <XScrollView className={styles.scroll}>
                <AccountContent showAd={showAd}>
                    <Text>abc-AccountContent</Text> 
                    <Text>zy-AccountContent</Text> 
                </AccountContent>
            </XScrollView>
            <Text>FooterContainer</Text> 
            {/* <FooterContainer /> */}
        </View>
    );
};
