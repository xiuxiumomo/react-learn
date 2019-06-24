import React, { Component } from 'react';
import { connect } from 'react-redux';
class TodoList extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)


    }
    render() {
        return (
            <div>
                <div>
                    <input onChange={this.props.inputChange} type="text" placeholder='请输入内容' value={this.props.inputValue} />
                    <button onClick={this.props.btnClick}>按钮</button>
                </div>
                <div>
                    <ul>
                        {
                            this.props.list.map((item, index) => {
                                return (
                                    <li key={index}>{item}</li>
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
            let action = {
                type: 'change_input_value',
                value: val
            }
            dispatch(action)
        },
        btnClick: function () {
            let action = {
                type: 'add_list_item'
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);