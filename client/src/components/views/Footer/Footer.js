import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> 경남정보대학교 기말고사 프로젝트 <Icon type="smile" /></p>
           <p>20181016 염성현, 20181026 이승열 </p>
        </div>
    )
}

export default Footer
