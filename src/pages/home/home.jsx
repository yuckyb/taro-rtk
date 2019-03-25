import Taro from '@tarojs/taro'
import { View, Button, Icon } from '@tarojs/components'
import { AtRate } from 'taro-ui'
import './home.scss'

export default class HomePage extends Taro.Component {
  static options = {
    addGlobalClass: true
  }
  constructor (props) {
    super(props)
  }
  componentWillMount () {}
  render () {
    return (
      <View className='container'>
        <View className='title'>我关联的店</View>
        <View className='home-list'>
        <View className="item flex-space-around">
            <View className="item-left">
              <image src="http://10.12.64.204:8089/306103571459436544/shopLogoImage/960d3826f8f949ff296ba2358582fa79.jpg" alt="" srcset=""/>
              <View className="label flex-space-between">
                <Text>一口价</Text>
                <Text>￥999起</Text>
              </View>
            </View>
            <View className="item-right">
              <View className='shop-name'>店铺名称</View>
              <View className='flex-space-between tags'>
                  <View className='tag'>
                    <Text>标签1</Text>
                    <Text>标签2</Text>
                    <Text>标签3</Text>
                  </View>
                  <View className='distance'> 100m</View>
              </View>
              <View className='rates flex-space-between flex-wrap'>
                <View className='flex-space-around item-rate'>
                  <Text className='label text-align-justify'>环境</Text><AtRate size='14' value={4}/>
                </View>
                <View className='flex-space-around item-rate'>
                <Text className='label text-align-justify'>技术</Text><AtRate size='14' value={2}/>
                </View>
                 <View className='flex-space-around item-rate'>
                 <Text className='label text-align-justify'>服务</Text><AtRate size='14' value={1}/>
                </View>
                <View className='flex-space-around item-rate'>
                <Text className='label text-align-justify'>性价比</Text><AtRate size='14' value={5}/>
                </View>
                <View className='flex-space-around item-rate'>
                <Text className='label text-align-justify'>诚信度</Text><AtRate size='14' value={2}/>
                </View>
              </View>
            </View>
        </View>
        </View>
      </View>
     
    )
  }
}