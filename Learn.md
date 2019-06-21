## react 学习笔记

### 1 父子组件通信

-   父组件传值给子组件传递值
-   字组件给父组件传递方法

```
 //父组件给子组件传递值都是通过属性=xx 方法=**
    getTodoItem(){
        return this.state.list.map((item, index) => {
            return <TodoItem content={item} _index={index} key={index} itemDelete={this.deleteItem} />
        })
    }
    //子组件接收参数都是通过this.props.XX 触发事件
    itemClick() {
        const { _index, itemDelete } = this.props;
        itemDelete(_index)

    }
```

### 2 ref 作用 ref 当作一个属性内容是一个函数，把 ul 挂载到 this 上面

```
 <ul ref={(ul)=>{this.ul=ul}}>
 this.ul = ul // 返回当前ul dom节点
```

### 3 页面赋值使用 setState

> setState 类似小程序 setState,是一个同步方法,接收第二个参数 fn

```
    this.setState(()=>{
        return {
            valueData: val
        }
    },()=>{
        console.log('赋值完成')
    })
```

### 4 react 的生命周期(某个时刻，某个方法自东执行)

### 4.1 mounting

-   1.componentWillMount 组件即将挂载
-   2.render
-   3.componentDidMount 组件挂载

### 4.2 updation

-   props 变化
-   states 变化
-   shouldComponentUpdate 需要一个返回值=> true 组件更新前(数据变化)时自动执行

### 4.3 componentWillReceiveProps

-   在 props 改变时执行一般作用在子组件中

### 4.4 componentWillUnmount

-   子组件移除 componentWillUnmount
## 5 redux相关
> redux与vuex类似，vuex有借鉴redux的实现原理。
### 5.1redux工作原理
~~~
//在store中引入redux 并且创建store对象。以及创建回调函数reducer 
import { createStore } from 'redux';
import reducer from './reducer'
const store = createStore(reducer);
export default store;

//reducer.js

import { CHANGE_INPUT_VALUE, CHANGE_ARR, DELETE_ARR } from './actionTypes';
const defaultState = {
    inputValue: '1111',
    list: [1, 2]
};
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = Object.assign({}, state);
        newState.inputValue = action.value;
        return newState; //如果有改变返回改变后的对象
    }
    return state; //默认return state对象
}

//component
constructor(props) {
    super(props);
    this.state = store.getState();
    this.InputChange = this.InputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.btnClick = this.btnClick.bind(this);

    store.subscribe(this.handleStoreChange)
}

handleStoreChange() {
    //相当于this.setState({list:[],inputValue})
    this.setState(store.getState())
}
~~~
当组件中component->dispatch(action)->state(和默认的state比较看是否有变化，比较原则(直接state比较或者通过action.type比较))->返回newState
-> 组件中通过store.subscribe监听state是否变化，完成数据根跟新(store.subscribe(this.handleStoreChange))

### 5.2vuex工作原理
> vuex在main.js中引入，并且使用。原理：页面component通过dispatch触发actions类型actions同时提交commit触发mutation,mutation中改变state数据，通过getters返回state数据，在组件中通过引入mapGetters 请求getters数据
componet->dispatch('getHome',data) ->mutations(改变state值)->state(通过getters返回新值)->页面中使用
~~~
import Vue from 'vue';
import store from './store'
//挂载到vue上
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
//在store中
import 'home' from './modules/home';
import  getters from './getters';
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        home,
    },
    getters
})
//home中
const home = {
    state: {
        homeData: {}
    },
    mutations: {
        HomeData: (state,data)=>{
            state.homeData = data;
        }
    },
    actions: {
        getHome: function({commit},data){
            commit('HomeData',data)
        }
    }
}
//getters中
const Home ={
    homeData: (state)=>{state.home.homeData}
}
//页面中通过mapGetters 使用
~~~



