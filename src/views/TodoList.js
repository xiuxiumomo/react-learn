import React,{Component} from 'react';
class TodoList extends Component{
    render(){
        return (
            <div>
                <div>
                    <input type="text" placeholder='请输入内容'/>
                    <button>按钮</button>
                </div>
                <div>
                    <ul>
                        <li>jack</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default TodoList;