import Taro, {Component} from '@tarojs/taro'
import {View, Text, Button} from '@tarojs/components'
import {connect} from '@tarojs/redux';
import './index.scss'


@connect(({home, common, loading}) => ({
  ...home,
  ...common,
  ...loading,
}))
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  };

  componentDidMount = () => {
    this.props.dispatch({
      type: 'home/load',
    })
  };

  handleChangeName() {
    this.props.dispatch({
      type: 'common/save',
      payload: {
        initName: 'chang jun',
      },
    });
  }

  handleGetTestData() {
    this.props.dispatch({
      type: 'home/getdata',
    })
  }

  render() {
    const {initName, testData, homeData} = this.props;
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Text>我的名字叫做{initName}</Text>
        <View>{testData[0].author_id}</View>
        <Button onClick={this.handleGetTestData}>获取数据</Button>
        <Text>获取到的数据标题是:{homeData.title}</Text>
        <Button onClick={this.handleChangeName}>修改名字</Button>
      </View>
    )
  }
}

