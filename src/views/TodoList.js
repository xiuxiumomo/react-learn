import React, { Component } from 'react';
import '../assets/less/toDoList.css';
import TodoItem from '../views/ToItem';

class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: ['a', 'b'],
            valueData: ''
        }
        this.inpChange = this.inpChange.bind(this);
        this.btnClick = this.btnClick.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    render() {
        // dangerouslySetInnerHTML={{__html:item}} 相当于v-html
        return (
            <div>
                <input value={this.state.valueData} onChange={this.inpChange}></input><button onClick={this.btnClick}>点击</button>
                <ul ref={(ul)=>{this.ul=ul}}>
                    {
                       this.getTodoItem()
                    }
                </ul>
            </div>
        )
    }
    getTodoItem(){
        return this.state.list.map((item, index) => {
            return <TodoItem content={item} _index={index} key={index} itemDelete={this.deleteItem} />
        })
    }
    inpChange(e) {
        let val = e.target.value;
        this.setState(()=>{
            return {
                valueData: val
            }
        })
    }
    btnClick() {
        this.setState((prevState)=>{
            let data = [...prevState.list, prevState.valueData];
            return {
                list: data,
                valueData: ''
            }
        })
        console.log(this.ul)

    }
    deleteItem(index) {
        this.setState((prevState)=>{
            let data = [...prevState.list];
                data.splice(index, 1);
            return {
                list: data
            }
        })
        
    }


}
export default ToDoList;