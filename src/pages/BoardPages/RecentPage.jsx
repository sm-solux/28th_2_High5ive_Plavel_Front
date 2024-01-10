import React from 'react';
import styled from 'styled-components';
import TopBar from '../../components/TopBar';
// import label_sun from '../../images/label/sun.svg';
// import label_jupiter from '../../images/label/jupiter.svg';
// import label_comet from '../../images/label/comet.svg';
// import label_earth from '../../images/label/earth.svg';
// import label_moon from '../../images/label/moon.svg';
// import label_saturn from '../../images/label/saturn.svg';
// import label_whitehole from '../../images/label/whitehole.svg';
import label_blackhole from '../../images/label/blackhole.svg';

const Body = styled.div`
    margin-top: 10vh;
    background-color: #E6EEFC;
    padding: 50px 70px 50px 70px;
    display: flex;
    justify-content: space-between;
`
const ListContainer = styled.div`
    width: calc(65vw - 70px);
`
const List = styled.div`
    background-color: white;
    height: 20vh;
    border-radius: 20px;
    border: 1px solid #DFDFDF;
    margin-bottom: 20px;
`
const Title = styled.div`
    
`
const Detail = styled.div`
    
`
const InfoDiv = styled.div`
    display: flex;
`
const Label = styled.img`
    
`
const Writer = styled.div`
    
`
const Date = styled.div`
    
`
const InfoContainer = styled.div`
    width: calc(30vw - 70px);
`
const FilterBox = styled.div`
    position: fixed;
    top: calc(10vh + 50px);
    right: 70px;
    border-radius: 20px;
    border: 1px solid #DFDFDF;
    background: #FFF;
    height: 30vh;
    width: calc(30vw - 70px);
`
const MyInfoBox = styled.div`
    position: fixed;
    top: calc(10vh + 50px + 30vh + 20px);
    right: 70px;
    border-radius: 20px;
    border: 1px solid #DFDFDF;
    background: #FFF;
    height: 40vh;
    width: calc(30vw - 70px);
`

let list = [
    {id: 1, title: '첫번쨰 글', detail: '첫번째 글 내용 어쩌구저쩌구 블라블라 샬라샬라', writer: '데미소다', label: label_blackhole, date: '2024/01/10 21:25', comment: 2, bookmark: 20},
    {id: 2, title: '두번쨰 글', detail: '두번째 글 내용 어쩌구저쩌구 블라블라 샬라샬라', writer: '데미소다', label: label_blackhole, date: '2024/01/10 21:25', comment: 2, bookmark: 20},
    {id: 2, title: '두번쨰 글', detail: '두번째 글 내용 어쩌구저쩌구 블라블라 샬라샬라', writer: '데미소다', label: label_blackhole, date: '2024/01/10 21:25', comment: 2, bookmark: 20},
    {id: 2, title: '두번쨰 글', detail: '두번째 글 내용 어쩌구저쩌구 블라블라 샬라샬라', writer: '데미소다', label: label_blackhole, date: '2024/01/10 21:25', comment: 2, bookmark: 20},
];  

const RecentPage = () => {
    return (
        <>
            <TopBar/>
            <Body>
                <ListContainer>
                    {list && list.map(list => (
                        <List>
                            <Title>{list.title}</Title>
                            <Detail>{list.detail}</Detail>
                            <InfoDiv>
                                <Label src={list.label}/>
                                <Writer>{list.writer}</Writer>
                                <Date>{list.date}</Date>
                            </InfoDiv>
                        </List>
                    ))}
                </ListContainer>
                <InfoContainer>
                    <FilterBox>

                    </FilterBox>
                    <MyInfoBox>

                    </MyInfoBox>
                </InfoContainer>
            </Body>
        </>
    );
};

export default RecentPage;