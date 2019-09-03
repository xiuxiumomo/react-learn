import '@tarojs/async-await'
import Taro, {Component} from '@tarojs/taro'
import Home from './pages/index'
import dva from './utils/dva'
import models from './models'
import {Provider} from '@tarojs/redux'
import './styles/default.scss'

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();

class App extends Component {

  config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'trao模板',
      navigationBarTextStyle: 'black'
    }
  };

  render() {
    return (<Provider store={store}>
      <Home/>
    </Provider>);
  }
}

Taro.render(<App/>, document.getElementById('app'));
