
import React, { Component } from 'react';
import router from 'umi/router';

const TabBarData = [
  {

    name: '精华',
    url: '/goods',
    id: 1
  },
  {
    name: '问答',
    url: '/ask',
    id: 2
  },
  {
    name: '分享',
    url: '/share',
    id: 3
  },
  {
    name: 'job',
    url: '/job',
    id: 4
  }
];
class BasicLayout extends Component {

  componentDidMount() {

  }
  goRouter = (item) => {
    let {url}=item;
    router.push({
      pathname: url
    })
  }
  isActive=(url)=>{
    let {location:{pathname}} = this.props;

    if(pathname=='/'&&url==='/goods') {
      return true
    } else {
      return pathname===url;
    }
  }
  renderFooter=()=>{

    return TabBarData.map((item) => {
      let isActive = this.isActive(item.url);
      return (<li className={isActive?'active':''} key={item.id} onClick={()=>{ this.goRouter(item)}}>
        {item.name}
      </li>)
    })
  }
  render() {
    return (
      <div>
        {this.props.children}
        <div id='common-footer' >
          <ul className="flex-box">
            {
              this.renderFooter()
            }

          </ul>
        </div>
      </div>

    )
  }

}

export default BasicLayout;
