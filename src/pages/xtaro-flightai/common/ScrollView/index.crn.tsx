import { ScrollView, ScrollViewProps, View } from '@tarojs/components';
import React, { FC, PropsWithChildren } from 'react';
import styles from './index.module.scss';

export const XScrollView: FC<ScrollViewProps> = props => {
    return (
        <View {...props}>
            <ScrollView scrollY onScrollToLower={props.onScrollToLower}>
                <View className={styles.scrollContent}>{props.children}</View>
            </ScrollView>
        </View>
    );
};
