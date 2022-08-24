//영화 목록 카드 (그리드 카드)
import React from 'react'
import { Col } from 'antd';

function GridCards(props) {

    if (props.landingPage) {
        return (
            //antd 디자인을 사용 6사이즈, 미디움일 때 8사이즈, 가장 작을 때에는 24사이즈
            <Col lg={6} md={8} xs={24}>
                <div style={{ position: 'relative' }}>
                    <a href={`/movie/${props.movieId}`} >
                        <img style={{ width: '100%', height: '320px', borderRadius: '7px', border: '0.5px solid black'}} src={props.image} alt={props.movieName} />
                    </a>
                </div>
            </Col>
        )
    } else {
        return (
            <Col lg={6} md={8} xs={24}>
                <div style={{ position: 'relative' }}>

                    <img style={{ width: '100%', height: '320px' }} src={props.image} alt={props.characterName} />

                </div>
            </Col>
        )
    }

}

export default GridCards