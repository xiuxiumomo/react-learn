import React,{Component} from 'react';
import '../assets/less/toDoList.css';

class ToDoList extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            list: ['a','b'],
            valueData: ''
        }
    }
    render(){
        return (
            <div>
                <input value={this.state.valueData} onChange={this.inpChange.bind(this)}></input><button onClick={this.btnClick.bind(this)}>点击</button>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return <li key={index} onClick={this.deleteItem.bind(this,index)}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
    inpChange(e){
        let val = e.target.value;
        this.setState({
            valueData: val
        })
    }
    btnClick(){
        let data = [...this.state.list,this.state.valueData];
        this.setState({
            list: data,
            valueData: ''
        })

    }
    deleteItem(index){
        let data = [...this.state.list];
            data.splice(index,1);
        this.setState({
            list: data
        })
    }

   
}
export default ToDoList;