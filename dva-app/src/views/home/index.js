import React, { Component } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
class Home extends Component {

    componentDidMount(){
        this.props.getTableData();
        console.log(process.env)
    }
    render() {
        const { inputValue,tableData } = this.props.home;
        console.log(tableData)
        return (
            <div>
                <input value={inputValue} onChange={this.props.inputChange}></input><Button>提交</Button>
                <ul>
                    <li>aaa</li>
                    <li>bbb</li>
                </ul>
            </div>
        )
    }

}



Home.propTypes = {

};
const mapState = (state) => {
    return state;
}
const mapDispatch = (dispatch) => {
    return {
        inputChange: function (e) {
            let value = e.target.value;
            dispatch({
                type: 'home/inputChange',
                value
            })
        },
        getTableData: function(){
            dispatch({
                type: 'home/getTableData'
            })
        }
    }
}
export default connect(mapState, mapDispatch)(Home);
