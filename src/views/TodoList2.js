import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import store from '../store';
import { _InputChange, _btnClick, _itemClick } from '../store/actionCreators';


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.InputChange = this.InputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.btnClick = this.btnClick.bind(this);

        store.subscribe(this.handleStoreChange)

    }

    render() {
        return (
            <div style={{ marginTop: '20px', marginLeft: '20px' }}>
                <Input onChange={this.InputChange} value={this.state.inputValue} placeholder="请填写内容" style={{ width: '300px', marginRight: '10px' }}></Input>
                <Button type="primary" onClick={this.btnClick}>提交</Button>
                <div style={{ width: '300px' }}>
                    <List
                        size="small"

                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => <List.Item onClick={this.itemClick.bind(this, index)} >{item}</List.Item>}
                    />
                </div>
            </div>)


    }
    InputChange(e) {
        const action = _InputChange(e.target.value);
        store.dispatch(action)

    }
    btnClick() {
        const action = _btnClick();
        store.dispatch(action)
    }
    itemClick(index) {
        const action = _itemClick(index);
        store.dispatch(action)
    }
    handleStoreChange() {
        //相当于this.setState({list:[],inputValue})
        this.setState(store.getState())
    }
}
export default TodoList;
