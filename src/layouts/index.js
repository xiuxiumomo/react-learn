import React, { Component } from 'react';
import BasicLayout from './BasicLayout';
import { Footer_Arr } from '../utils/has_footer_config';

class Layouts extends Component {
  renderBody = () => {
    const { location: { pathname }, children } = this.props;
    if (Footer_Arr.includes(pathname)) {
      return (<BasicLayout  {...this.props}/>)
    } else {
      return (<React.Fragment>
        {children}
      </React.Fragment>)
    }
  }
  render() {
    return (
      <React.Fragment>
        {this.renderBody()}
      </React.Fragment>
    )
  }
}
export default Layouts;
