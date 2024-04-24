import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import Taro from '@tarojs/taro'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import Style from './index.module.scss'
// import Style from "./index.module.scss";

export default class Index extends Component<PropsWithChildren> {
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text className={Style.txt}>Hello world!</Text>
        <AtButton type='primary'>I need Taro UI,zy</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type='primary' circle={true} onClick={()=>{
          Taro.showToast({title:'Hello',icon:'none'});
        }}>支持</AtButton>
        <Text>共建？</Text>
        <AtButton type='secondary' circle={true}>来</AtButton>
      </View>
    )
  }
}
