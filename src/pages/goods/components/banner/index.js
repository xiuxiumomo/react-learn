/**
 * banner组件
 * @ banner参数 数组必选1
 */
import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';
class GoodsBanner extends Component {
  state = {
    slideIndex: 0
  }
  render() {
    let { banner } = this.props;
    let arrData = [];
    const defaultData = [
      {
        id: 1,
        pic: 'https://zos.alipayobjects.com/rmsportal/1.png'
      }
    ]
    if(banner && Array.isArray(banner)){
      arrData = [...banner];
    }else{
      arrData = [...defaultData];
    }
    return (
      <React.Fragment>
        <Carousel
          autoplay={true}
          infinite
          afterChange={index => this.setState({ slideIndex: index })}
        >
          {arrData.map(item => (
            <div className="banner-item" key={item.id}>
              <img src={item.pic} />
            </div>

          ))}
        </Carousel>
      </React.Fragment>

    )
  }
}
export default GoodsBanner;
