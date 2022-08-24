//메인 이미지
import React from 'react';

function MainImage(props) {
    return (
        <div style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0)
        39%,rgba(0,0,0,0)
        41%,rgba(0,0,0,0.65)
        100%),
        url('${props.image}'), #1c1c1c`, //이미지 URL을 가져온다. (가장 유명한 영화 이미지)
            height: '500px',
            backgroundSize: '100%, cover',
            backgroundPosition: 'center, center',
            width: '100%',
            position: 'relative',
        }}>
            <div>
                <div style={{ position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem' }}>
                    <h2 style={{ color: 'white' }}>  {props.title} </h2>
                    <p style={{ color: 'white', fontSize: '1rem' }}> {props.text}</p>

                </div>
            </div>
        </div>
    )
}


export default MainImage