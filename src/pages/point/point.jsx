import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
export default class PointPage extends Component {

   config = {
       navigationBarTitleText: '积分管理'
  }
  static options = {
    addGlobalClass: true
  }
  state={}

  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    return (
      <View className="padding30-left-right container">
          <View className="font32-size user-shop flex-space-between">
            <View className="user-shop-title-left">
              <View className="label"></View> 我关联的店铺</View>
            <View>积分规则</View>
            </View>
      </View>
    );
  }
}