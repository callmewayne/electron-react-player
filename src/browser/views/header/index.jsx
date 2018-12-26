import React, { } from 'react'
import {
    Router
} from 'react-router-dom'
import { Icon } from 'antd';
import iconFont from './../../assets/iconfont/iconfont.js'
import fontlogo from './../../assets/img/fontlogo.png'
import './index.less';
import './../../style/common.less';
import * as api from '../../api';

api.telLogin('18310301290', 'wayne250').then(res => {
    console.log(res)
})
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: iconFont, 
});
class Header extends React.Component {



    render() {
        var iconStyle = {
            fontSize: '22px',
            marginBottom: '2px',
            float: 'left'
        }
        return (
            <div className="header">
                <IconFont type='anticon-white-netease-music-copy' style={iconStyle} />
                <div className="header_icon">
                    <img src={fontlogo} alt="" />
                </div>
            </div>
        )
    }
}
export { Header }