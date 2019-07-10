import React, { Component } from 'react';
import { connect } from 'dva';
import { Button, Switch } from 'antd-mobile';
import { array } from 'prop-types';
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
        this.switchChange = this.switchChange.bind(this);


    }
    componentDidMount() {
        this.props.getTableData();
        console.log(this.props)

    }
    render() {
        const { inputValue } = this.props.home;
        return (
            <div>
                <input value={inputValue} onChange={this.props.inputChange}></input>
                <Button>提交</Button>
                <Switch checked={this.state.checked} onChange={this.switchChange}></Switch>
                <ul>
                    {
                        this.renderUI()
                    }
                </ul>
            </div>
        )
    }
    switchChange() {
        let checked = this.state.checked;
        this.setState({
            checked: !checked
        })
    }
    renderUI() {
        let { tableData } = this.props.home;
        let arr = tableData.data;
        return arr.map((item) => {
            return (<li>{item.name}</li>)
        })

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
        getTableData: function () {
            dispatch({
                type: 'home/getTableData'
            })
        }
    }
}
export default connect(mapState, mapDispatch)(Home);
