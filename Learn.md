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
### 2 ref作用 ref当作一个属性内容是一个函数，把ul挂载到this上面

~~~
 <ul ref={(ul)=>{this.ul=ul}}>
 this.ul = ul // 返回当前ul dom节点
~~~



