import React, { Component } from 'react';
import './header.less';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Header extends Component {
    constructor(props) {
        super(props);
        this.props.getData();
    }
   
    render() {
        const { title,changeTitle,list } = this.props;
        console.log(list)
        
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
        title: state.header.title,
        list: state.header.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeTitle: function () {
            let action = actionCreators.change_title(true);
            dispatch(action)
        },
        getData: function(){
            let action = actionCreators.getHeaderData();
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);

