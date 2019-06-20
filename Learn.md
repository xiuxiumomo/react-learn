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
## redux相关
