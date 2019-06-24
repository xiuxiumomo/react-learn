import React,{Component} from 'react';
import store from '../store/index'
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        this.btnClick = this.btnClick.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }
    render(){
        return (
            <div>
                <div>
                    <input onChange={this.inputChange} type="text" placeholder='请输入内容' value={this.state.inputValue}/>
                    <button onClick={this.btnClick}>按钮</button>
                </div>
                <div>
                    <ul>
                        <li>jack</li>
                    </ul>
                </div>
            </div>
        )
    }
    btnClick(){
        console.log(111)
    }
    inputChange(){
        console.log('change')
    }
}
export default TodoList;