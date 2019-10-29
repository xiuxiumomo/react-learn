import React, { Component } from 'react';
import { connect } from 'react-redux';
import { todo_input_change, add_list_item, delete_list_item } from '@/store/actionCreator';
class TodoList extends Component {
    render() {
        const { inputValue, inputChange, btnClick } = this.props;
        return (
            <div>
                <div>
                    <input onChange={inputChange} type="text" placeholder='请输入内容' value={inputValue} />
                    <button onClick={btnClick}>按钮</button>
                </div>
                <div>
                    <ul>
                        {
                            this.props.list.map((item, index) => {
                                return (
                                    <li key={index} >{item}</li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        )
    }


}
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        inputChange: function (e) {
            let val = e.target.value;
            let action = todo_input_change(val);
            dispatch(action)
        },
        btnClick: function () {
            let action = add_list_item();
            dispatch(action)
        },
        deleteItem: function (index) {
            console.log(index)
            let action = delete_list_item(index);
            dispatch(action);

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);