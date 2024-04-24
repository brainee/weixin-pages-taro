import React from "react";
import {View,Text} from "@tarojs/components";

import Style from "./index.module.scss";
import BasePage from "./common/BasePage";

class Index extends React.Component {
  componentDidMount() {
    // logRaw()
    console.log(1111111);
  }

  componentDidShow() {
    console.log(">>>>>componentDidShow")
  }

  render() {
    return (
      <View className={Style["index"]}>
          <Text>Hello, world!zy</Text>
      </View>
    );
  }
}

export default BasePage({})(Index);