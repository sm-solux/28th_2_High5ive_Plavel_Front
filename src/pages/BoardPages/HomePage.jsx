import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TopBar from '../../components/TopBar';
import Banner from '../../components/Banner';
import WriteBtn from '../../components/WriteBtn';
import label_sun from '../../images/label/sun.svg';
import label_jupiter from '../../images/label/jupiter.svg';
import label_comet from '../../images/label/comet.svg';
import label_earth from '../../images/label/earth.svg';
import label_moon from '../../images/label/moon.svg';
import label_saturn from '../../images/label/saturn.svg';
import label_whitehole from '../../images/label/whitehole.svg';
import label_blackhole from '../../images/label/blackhole.svg';
import bookmark from '../../images/bookmark.svg';
import comment from '../../images/comment.svg';
import { useNavigate } from 'react-router-dom';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import GoogleMapReact from 'google-map-react';
import {CssBaseline, Grid} from '@material-ui/core';
import Map from '../../components/Map/Map';
import List from '../../components/List/List';

import { getPlacesData } from '../../api/travelAdvisorAPI';
import Header from '../../components/Header/Header';
import axios from 'axios';

const Body = styled.div`
    margin-top: 10vh;
`
const Explain = styled.div`
    margin-top: 50px;
    color: #8B8B8B;
    font-size: 15px;
    font-weight: 600;
    margin-left: 60px;
`
const HomeTitle = styled.div`
    color: #262626;
    font-size: 25px;
    font-weight: 600;
    margin-left: 60px;
`
const ListContainer = styled.div`
    width: calc(100vw - 120px);
    display: flex;
    margin-left: 60px;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 60px;
`
const HotList = styled.div`
    width: 47%;
    border-radius: 20px;
    border: 1px solid #E9E9E9;
    background: #F9F9F9;
    margin-bottom: 20px;
    padding: 30px;
    cursor: pointer;
    &:hover {
        border: 1px solid #6695F1;
        background-color: #F4F8FF;
    }
`
const Title = styled.div`
    color: #6695F1;
    font-size: 30px;
    font-weight: 600;
`
const Detail = styled.div`
    color: #C2C2C2;
    font-size: 15px;
    font-weight: 600;
    margin-top: 10px;
`
const Line = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    line-height: 35px;
`
const InfoDiv = styled.div`
    display: flex;
`
const Label = styled.img`
    
`
const Writer = styled.div`
    color: #7F7F7F;
    font-size: 18px;
    font-weight: 600;
    margin-left: 10px;
`
const Date = styled.div`
    color: #A6A6A6;
    font-size: 12px;
    font-weight: 600;
    margin-left: 10px;
`
const CommentBM = styled.div`
    display: flex;
`
const CommentImg = styled.img`
    
`
const Comment = styled.div`
    color: #7F7F7F;
    font-size: 18px;
    font-weight: 600;
    margin-left: 5px;
    margin-right: 15px;
`
const BMImg = styled.img`
    
`
const Bookmark = styled.div`
    color: #7F7F7F;
    font-size: 18px;
    font-weight: 600;
    margin-left: 5px;
`
const MapDiv = styled.div`
    width: '700px';
    height: '700px';
    border-radius: '20px';
    margin-left: '60px';
    margin-top: '10px';
`

let list = [
    {id: 1, title: '첫번째 글', detail: '첫번째 글 내용 어쩌구저쩌구 블라블라 샬라샬라', writer: '데미소다', label: label_blackhole, date: '2024/01/10 21:25', comment: 2, bookmark: 20},
    {id: 2, title: '두번째 글', detail: '두번째 글 내용 어쩌구저쩌구 블라블라 샬라샬라', writer: '데미소다', label: label_comet, date: '2024/01/10 21:25', comment: 10, bookmark: 2},
];  

const HomePage = () => {
    const navigate = useNavigate();
    const handleClickList = (e) => {
        const listId = e.target.id;
        navigate(`/detail/${listId}`);
    }

    // 연동코드
    // const getHotList = () => {
    //     axios.get('http://127.0.0.1:8000/board/home')
    //     .then(res => {
    //         console.log(res);
    //     })
    //     .catch(err => {
    //         console.error('Error get hotlist: ', err)
    //     })
    // }

    // useEffect(() => {
    //     getHotList();
    // }, []);

    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    const [coords, setCoords] = useState({});
    const [bounds, setBounds] = useState(null);

    //const [weatherData, setWeatherData] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [places, setPlaces] = useState([]);

    const [autocomplete, setAutocomplete] = useState(null);
    const [childClicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
        });
    }, []);

    useEffect(() => {
        const filtered = places.filter((place) => Number(place.rating) > rating);

        setFilteredPlaces(filtered);
    }, [rating]);

    useEffect(() => {
        if (bounds) {
        setIsLoading(true);

        //   getWeatherData(coords.lat, coords.lng)
        //     .then((data) => setWeatherData(data));

        getPlacesData(type, bounds.sw, bounds.ne)
            .then((data) => {
            setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
            setFilteredPlaces([]);
            setRating('');
            setIsLoading(false);
            });
        }
    }, [bounds, type]);

    const onLoad = (autoC) => setAutocomplete(autoC);

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoords({ lat, lng });
    };

    return (
        <>
            <TopBar/>
            <Body>
                <Banner/>
                <Explain>사람들이 가장 많이 북마크한 글이에요.</Explain>
                <HomeTitle>유용한 정보, 놓치지 마세요. 가장 핫한 글 🔥</HomeTitle>
                <ListContainer>
                    {list && list.map(list => (
                        <HotList key={list.id} id={list.id} onClick={handleClickList}>
                            <Title id={list.id}>{list.title}</Title>
                            <Detail id={list.id}>{list.detail}</Detail>
                            <Line>
                                <InfoDiv>
                                    <Label src={list.label} id={list.id}/>
                                    <Writer id={list.id}>{list.writer}</Writer>
                                    <Date id={list.id}>{list.date}</Date>
                                </InfoDiv>
                                <CommentBM>
                                    <CommentImg src={comment} id={list.id}/><Comment id={list.id}>{list.comment}</Comment>
                                    <BMImg src={bookmark} id={list.id}/><Bookmark id={list.id}>{list.bookmark}</Bookmark>
                                </CommentBM>
                            </Line>
                        </HotList>
                    ))}
                </ListContainer>
                <HomeTitle>내가 지금 떠나고 싶은 곳은?</HomeTitle>
                {/* <LoadScript
                    googleMapsApiKey="AIzaSyCcuPaFAa2xIlhGE4DKJMEDhI1EBYB32ZY"
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={14}
                    >
                        <></>
                    </GoogleMap>
                </LoadScript> */}
                 <CssBaseline />
                <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
                <Grid container spacing={3} style={{ width: '90%', marginLeft: '60px' }}>
                    <Grid item xs={12} md={5}>
                    <List
                        isLoading={isLoading}
                        childClicked={childClicked}
                        places={filteredPlaces.length ? filteredPlaces : places}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                    />
                    </Grid>
                    <Grid item xs={12} md={7} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Map
                        setChildClicked={setChildClicked}
                        setBounds={setBounds}
                        setCoords={setCoords}
                        coords={coords}
                        places={filteredPlaces.length ? filteredPlaces : places}
                        // weatherData={weatherData}
                    />
                    </Grid>
                </Grid>
                <WriteBtn/>
            </Body>
        </>
    );
};

export default HomePage;