import React from 'react';
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
const List = styled.div`
    width: 45%;
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

let list = [
    {id: 1, title: '첫번째 글', detail: '첫번째 글 내용 어쩌구저쩌구 블라블라 샬라샬라', writer: '데미소다', label: label_blackhole, date: '2024/01/10 21:25', comment: 2, bookmark: 20},
    {id: 2, title: '두번째 글', detail: '두번째 글 내용 어쩌구저쩌구 블라블라 샬라샬라', writer: '데미소다', label: label_comet, date: '2024/01/10 21:25', comment: 10, bookmark: 2},
];  

const containerStyle = {
    width: '700px',
    height: '700px',
    borderRadius: '20px',
    marginLeft: '60px',
    marginTop: '10px'
  };
  
  const center = {
    lat: 14.018000,
    lng: 120.835941
  };

const HomePage = () => {
    const navigate = useNavigate();
    const handleClickList = (e) => {
        const listId = e.target.id;
        navigate(`/detail/${listId}`);
    }
    return (
        <>
            <TopBar/>
            <Body>
                <Banner/>
                <Explain>사람들이 가장 많이 북마크한 글이에요.</Explain>
                <HomeTitle>유용한 정보, 놓치지 마세요. 가장 핫한 글 🔥</HomeTitle>
                <ListContainer>
                    {list && list.map(list => (
                        <List key={list.id} id={list.id} onClick={handleClickList}>
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
                        </List>
                    ))}
                </ListContainer>
                <HomeTitle>내가 지금 떠나고 싶은 곳은?</HomeTitle>
                <LoadScript
                    googleMapsApiKey="AIzaSyCcuPaFAa2xIlhGE4DKJMEDhI1EBYB32ZY"
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={14}
                    >
                        <></>
                    </GoogleMap>
                </LoadScript>
                <WriteBtn/>
            </Body>
        </>
    );
};

export default HomePage;