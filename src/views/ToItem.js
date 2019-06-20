import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.itemClick = this.itemClick.bind(this);
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

