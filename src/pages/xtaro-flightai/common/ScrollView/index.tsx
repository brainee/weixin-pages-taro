import { ScrollView, ScrollViewProps, View } from '@tarojs/components';
import React, { FC } from 'react';
import styles from './index.module.scss';

export const XScrollView: FC<ScrollViewProps> = props => {
    return (
        <ScrollView className={`${styles.container} ${props.className}`} scrollY {...props}>
            {/* 这个东西它依赖 bug 运行，我实在是搞不明白原理，但它运行的很好，就这样吧 */}
            <View className={styles.scrollHelper}>
                <View className={styles.scrollContainer}>
                    <View className={styles.scrollContent}>{props.children}</View>
                </View>
            </View>
        </ScrollView>
    );
};
