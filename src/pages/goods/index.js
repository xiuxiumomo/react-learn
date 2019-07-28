import React, { Component } from 'react';
import router from 'umi/router';
import Banner from './components/banner/index';
import { connect } from 'dva';
@connect(({ goods }) => ({ goods }))
class Goods extends Component {
  componentDidMount() {
    this.getBanner()
  }
  getBanner = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'goods/getBanner',
      params: {}
    })
  }
  goFn = () => {
    router.push({
      pathname: `/details/1`,
    })
  }
  render() {
    let { bannerList } = this.props.goods;

    return (
      <div id="goods">
        <div className='slider-wrap'>
          <Banner banner={bannerList.data} />
        </div>
        <div className="wrap">
          <div className="list-box">
            <div className="item flex-box">
              <div className="left-item flex-box">
                <div className="title ellipse-2">
                  打开想想空间，杭州地体22条线全网最新全年解读
                </div>
                <div className="msg">
                  <span>热点资讯</span>
                  <span>2019-10-1</span>
                </div>
              </div>
              <div className="right-item">
                <img src='http://img.redocn.com/sheji/20141219/zhongguofengdaodeliyizhanbanzhijing_3744115.jpg' />
              </div>
            </div>
          </div>
        </div>
        </div>


        )
      }
    }
    export default Goods;
