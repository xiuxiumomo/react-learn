import React, { Component } from 'react';
import TodoListUI from './TodoListUI';
import store from '../store';
import { _InputChange, _btnClick, _itemClick,_getHomeAction } from '../store/actionCreators';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.inputChange = this.inputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.btnClick = this.btnClick.bind(this);
        this.itemClick = this.itemClick.bind(this);
        store.subscribe(this.handleStoreChange)

    }
    componentDidMount() {
        this.getHomeData();
    }
    getHomeData() {
       
        const action = _getHomeAction();
        store.dispatch(action);
        
    }
    render() {
        return (<TodoListUI list={this.state.list} inputChange={this.inputChange} inputValue={this.state.inputValue} btnClick={this.btnClick} itemClick={this.itemClick} />)

    }
    inputChange(e) {
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
