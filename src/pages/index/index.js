import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { add, minus, asyncAdd } from "../../actions/counter";

import { HomePage } from "../home/home";
import { PointPage } from "../point/point";
import { MyPage } from "../my/my";

import "./index.scss";
import { AtTabBar } from "taro-ui";


@connect(
  ({ counter }) => ({
    counter
  }),
  dispatch => ({
    add() {
      dispatch(add());
    },
    dec() {
      dispatch(minus());
    },
    asyncAdd() {
      dispatch(asyncAdd());
    }
  })
)
class Index extends Component {
  config = {
    navigationBarTitleText: "剑琅联盟"
  };
  handleClick(value) {
    console.log(value, "value");
    this.setState({
      current: value
    });
  }
  state = {
    current: 1
  };
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {
    
  }

  componentDidHide() {}

  render() {
    const pageType = this.state.current;
    return (
      <View className="index">
        {pageType == 0 ? <HomePage /> :( pageType == 1 ?  <PointPage /> : (pageType == 2 ? ( <MyPage />) : ( "")))}
        {/* <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
        <View className='index'>
         <AtButton type='primary'>按钮文案</AtButton>
      </View> */}
        <AtTabBar
          fixed
          tabList={[
            { title: "首页", iconType: "home" },
            { title: "积分", iconType: "bullet-list" },
            { title: "我的", iconType: "user" }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    );
  }
}

export default Index;
