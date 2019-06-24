import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.itemClick = this.itemClick.bind(this);
    }
    //子组件只在content发生变化才更新
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true;
        }else{
            return false;
        }
    }
    render() {
        const { content } = this.props;
        return (
            <li onClick={this.itemClick}>{content}</li>
        )
    }
    itemClick() {
        const { _index, itemDelete } = this.props;
        itemDelete(_index)

    }
   
}

export default TodoItem;

