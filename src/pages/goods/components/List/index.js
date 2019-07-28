import React, { Component } from 'react';
import { ListView } from 'adtd-mobile';
const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];
class ListBox extends Component {
  renderList=()=>{
    data.map((item)=>{
      return (
        <div className="item flex-box">
            <div className="left-item flex-box">
              <div className="title ellipse-2">
                {item.title}
                </div>
              <div className="msg">
                <span>热点资讯</span>
                <span>2019-10-1</span>
              </div>
            </div>
            <div className="right-item">
              <img src={item.img} />
            </div>
          </div>
      )
    })
  }
  render() {
    return (
      <React.Fragment>
        <div className="list-box">

        </div>
      </React.Fragment>
    )
  }
}
export default ListBox;
