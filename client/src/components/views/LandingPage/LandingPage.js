import React, { useEffect, useState } from 'react'
import { FaCode, FaHandMiddleFinger } from "react-icons/fa";
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config';
import MainImage from './Sections/MainImage';
import axios from 'axios';
import GridCards from '../commons/GridCards';
import { Row } from 'antd';

function LandingPage() {


    //API : https://developers.themoviedb.org/3
    //영화 목록 정보들을 state에 넣는다.
    const [Movies, setMovies] = useState([])
    //메인 이미지에 대한 정보들을 배열에 넣는다.
    const [MainMovieImage, setMainMovieImage] = useState(null)
    const [CurrentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        //인기있는 영화 목록 불러오기 (첫번쨰 페이지를 위해 language=en-US&page=1를 넣음 )
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;
        fetchMovies(endpoint)

    }, [])


    const fetchMovies = (endpoint) => {
        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setMovies([...Movies, ...response.results])
                setMainMovieImage(response.results[0])
                setCurrentPage(response.page)
            })
    }

    //더보기에 관한 함수
    const loadMoreItems = () => {

        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=${CurrentPage + 1}`;
        fetchMovies(endpoint)

    }


    return (
        <div style={{ width: '100%', margin: '0'}}>
            
            {/* 메인 이미지 , MainMovieImage &&의 표현식의미는  MainMovieImage가 로드되었을 때 아래코드가 실행됨*/} 
            {MainMovieImage &&
                <MainImage
                    //영화 이미지 (가장 큰 사이즈 1280)
                    image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
                    //영화 제목
                    title={MainMovieImage.original_title}
                    //영화 정보
                    text={MainMovieImage.overview}
                />
            }


            <div style={{ width: '85%', margin: '1rem auto' }}>

                <h2>해외 영화 순위</h2>
                <hr />

                {/* 영화 목록 카드 antd 디자인 사용*/}
                
                <Row gutter={[16, 16]} >

                    {Movies && Movies.map((movie, index) => (
                        <React.Fragment key={index}>
                            <GridCards
                                landingPage
                                image={movie.poster_path ?
                                    `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                                movieId={movie.id}
                                movieName={movie.original_title}
                            />
                        </React.Fragment>
                    ))}

                </Row>

            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={loadMoreItems}> 더 보기</button>
            </div>

        </div>
    )
}

export default LandingPage
