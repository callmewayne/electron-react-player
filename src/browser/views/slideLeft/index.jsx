import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Icon } from 'antd';
// const IconFont = Icon.createFromIconfontCN({
//     scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
// });
import iconFont from './../../assets/iconfont/iconfont.js'

import './index.less';
import './../../style/common.less';
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: iconFont,
  });
const states = {
    menuList: [
        {
        title: '推荐',
        type:'recommend',
        children: [
            {
                name: "发现音乐",
                path: "",
                icon: "anticon-music"
            },
            {
                name: "私人FM",
                path: "",
                icon: "anticon-wuxian"
            },
            {
                name: "视频",
                path: "",
                icon: "anticon-video"
            },
            {
                name: "朋友",
                path: "",
                icon: "anticon-pengyou"
            },
            
        ]
    },
    {
        title: '我的音乐',
        type:'myMusic',
        children: [
            {
                name: "本地音乐",
                path: "",
                icon: "anticon-icon-"
            },
            {
                name: "下载管理",
                path: "",
                icon: "anticon-xiazai"
            },
            {
                name: "我的音乐云盘",
                path: "",
                icon: "anticon-cloud"
            },
            {
                name: "我的电台",
                path: "",
                icon: "anticon-xiangsidiantai"
            },
            {
                name: "我的收藏",
                path: "",
                icon: "anticon-wodeshoucang"
            },
        ]
    },
    {
        title: '创建的歌单',
        type:'createList',
        children: [
            {
                name: "我喜欢的音乐",
                path: "",
                icon: "anticon-heart"
            },
            {
                name: "kooria",
                path: "",
                icon: "anticon-iconfont-gedan"
            }
        ]
    },
]
}

class SlideLeft extends React.Component {
    render() {
        var ScrollbarsStyle = {
            width: '200px',
        }

        return (
            <div className="SlideLeft">
                <Scrollbars
                    style={ScrollbarsStyle}
                    autoHideTimeout={1000}
                    autoHideDuration={200}>
                    {
                     states.menuList.map(function (item, index) {
                            return( <div className="menuGroup" key={index}>
                                <p className="menuTitle">
                                    {item.title}
                                </p>
                                <ul className="menuList">
                                    {
                                       item.children.map(function (elem, idx) {
                                            return (
                                                <li className="memuItem" key={idx}>
                                                <IconFont className="itemIcon" type={elem.icon} /> <span> {elem.name}</span>
                                            </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            )
                        })
                    }
                </Scrollbars>
                <div className="slide_left_bottom">

                </div>
            </div>

        )
    }
}

export { SlideLeft };