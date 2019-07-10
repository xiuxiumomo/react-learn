import dva from 'dva';
import './assets/less/index.less';
import  'antd-mobile/dist/antd-mobile.less';
import 'normalize.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/home').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
