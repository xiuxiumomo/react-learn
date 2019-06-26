import React, { Component } from 'react';
import './header.less';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Header extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    render() {
        const { title,changeTitle } = this.props;
        console.log(title)
        return (
            <div id='common-header'>
                <div className='title' onClick={changeTitle}>
                    我是标题 redux是: {Number(title)}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        title: state.header.title
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeTitle: function () {
           
            let action = actionCreators.change_title(true);
           
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);

