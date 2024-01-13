import React from 'react';
import styled from 'styled-components';
import TopBar from '../../components/TopBar';
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
import profileimg from '../../images/dummyprofileimg.png';
import { useNavigate } from 'react-router-dom';

const Body = styled.div`
    margin-top: 10vh;
    background-color: #E6EEFC;
    padding: 50px 100px 50px 100px;
    display: flex;
    justify-content: space-between;
`
const ListContainer = styled.div`
    width: calc(65vw - 100px);
`
const List = styled.div`
    background-color: white;
    //height: 140px;
    border-radius: 20px;
    border: 1px solid #DFDFDF;
    margin-bottom: 20px;
    padding: 30px;
    cursor: pointer;
    &:hover {
        border: 1px solid #6695F1;
        background-color: #F4F8FF;
    }
`
const Title = styled.div`
    color: #262626;
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
const InfoContainer = styled.div`
    width: calc(30vw - 100px);
`
const FilterBox = styled.div`
    position: fixed;
    top: calc(10vh + 50px);
    right: 70px;
    border-radius: 20px;
    border: 1px solid #DFDFDF;
    background: #FFF;
    width: calc(30vw - 100px);
    padding: 30px;
`
const Text = styled.div`
    color: #262626;
    font-size: 20px;
    font-weight: 600;
`
const LabelDiv = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
`
const LabelLine = styled.div`
    display: block;
    width: 25%;
`
const LabelBtn = styled.img`
    margin-bottom: 5px;
    cursor: pointer;
    &:hover {
        //transform: translateY( -5px );
        transform: scale( 1.1 );
    }
`
const MyInfoBox = styled.div`
    position: fixed;
    top: calc(10vh + 50px + 80px + 55px + 35px*4 + 20px);
    right: 70px;
    border-radius: 20px;
    border: 1px solid #DFDFDF;
    background: #FFF;
    width: calc(30vw - 100px);
    padding: 30px;
`
const MyDiv = styled.div`
    text-align: center;
    justify-content: center;
`
const ProfileImg = styled.img`
    width: 84px;
    height: 84px;
    border-radius: 50%;
    margin-top: 20px;
`
const MyLabelExp = styled.div`
    color: #B1B1B1;
    font-size: 15px;
    font-weight: 600;
    margin-top: 15px;
`
const MyName = styled.div`
    color: #262626;
    font-size: 25px;
    font-weight: 600;
    margin-top: 10px;
`
const MyLabel = styled.img`
    width: 120px;
    margin-top: 10px;
`

let list = [
    {id: 1, title: '첫번째 글', detail: '첫번째 글 내용 어쩌구저쩌구 블라블라 샬라샬라', writer: '데미소다', label: label_blackhole, date: '2024/01/10 21:25', comment: 2, bookmark: 20},
    {id: 2, title: '두번째 글', detail: '두번째 글 내용 어쩌구저쩌구 블라블라 샬라샬라', writer: '데미소다', label: label_comet, date: '2024/01/10 21:25', comment: 10, bookmark: 2},
    {id: 3, title: '세번째 글', detail: '두번째 글 내용 어쩌구저쩌구 블라블라 샬라샬라', writer: '데미소다', label: label_sun, date: '2024/01/10 21:25', comment: 25, bookmark: 1},
    {id: 4, title: '네번째 글', detail: '두번째 글 내용 어쩌구저쩌구 블라블라 샬라샬라', writer: '데미소다', label: label_jupiter, date: '2024/01/10 21:25', comment: 32, bookmark: 0},
];  

const RecentPage = () => {
    const navigate = useNavigate();
    const handleClickList = (e) => {
        const listId = e.target.id;
        navigate(`/detail/${listId}`);
    }
    return (
        <>
            <TopBar/>
            <Body>
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
                <InfoContainer>
                    <FilterBox>
                        <Text>필터</Text>
                        <LabelDiv>
                            <LabelLine style={{marginRight:"70px"}}>
                                <LabelBtn  src={label_sun}/>
                                <LabelBtn src={label_jupiter}/>
                                <LabelBtn src={label_comet}/>
                                <LabelBtn src={label_earth}/>
                            </LabelLine>
                            <LabelLine>
                                <LabelBtn  src={label_moon}/>
                                <LabelBtn src={label_saturn}/>
                                <LabelBtn src={label_whitehole}/>
                                <LabelBtn src={label_blackhole}/>
                            </LabelLine>
                        </LabelDiv>
                    </FilterBox>
                    <MyInfoBox>
                        <Text>나의 정보</Text>
                        <MyDiv>
                            <ProfileImg src={profileimg}/>
                            <MyLabelExp>자유분방 어디로든, 혜성형 여행자</MyLabelExp>
                            <MyName>닉네임님</MyName>
                            <MyLabel src={label_comet}/>
                        </MyDiv>
                    </MyInfoBox>
                </InfoContainer>
            </Body>
        </>
    );
};

export default RecentPage;