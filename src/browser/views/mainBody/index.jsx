import React, { Component } from 'react';
import './index.less';
import { SlideLeft} from './../slideLeft/index'
class MainBody extends React.Component {
    render() {
        return (
            <div className="mainBody">
                 <SlideLeft />
            </div>
        )
    }
}
MainBody.propTypes = {
}
export {MainBody }  ;