import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';

export default class MyPage extends Component {

   config = {
       navigationBarTitleText: '我的',
  }

  state={}

  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {
    Taro.setNavigationBarTitle({
     
    })
  } 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    return (
      <View>
        我的页面
      </View>
    );
  }
}