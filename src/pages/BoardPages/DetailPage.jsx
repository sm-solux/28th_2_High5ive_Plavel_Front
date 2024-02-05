import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TopBar from '../../components/TopBar';
import profileimg from '../../images/dummyprofileimg.png';
import label_sun from '../../images/label/sun.svg';
import label_jupiter from '../../images/label/jupiter.svg';
import label_comet from '../../images/label/comet.svg';
import label_earth from '../../images/label/earth.svg';
import label_moon from '../../images/label/moon.svg';
import label_saturn from '../../images/label/saturn.svg';
import label_whitehole from '../../images/label/whitehole.svg';
import label_blackhole from '../../images/label/blackhole.svg';
import dummy1 from '../../images/dummy1.png';
import dummy2 from '../../images/dummy2.png';
import comment from '../../images/comment.svg';
import bookmark from '../../images/bookmark.svg';
import bookmark_on from '../../images/bookmark_on.svg';
import send from '../../images/send.svg';
import Comment from '../../components/Comment';
import WriteBtn from '../../components/WriteBtn';
import { useLocation , useNavigate} from 'react-router-dom';
import axios from 'axios';
import Rewrite from '../../components/Rewrite.jsx';

const Body = styled.div`
    margin-top: 10vh;
    background-color: #E6EEFC;
    padding: 50px 100px 50px 100px;
    display: flex;
    justify-content: space-between;
    min-height: calc(90vh - 100px);
`
const DetailContainer = styled.div`
    width: calc(65vw - 100px);
`
const Detail = styled.div`
    background-color: white;
    //height: 140px;
    border-radius: 20px;
    border: 1px solid #DFDFDF;
    margin-bottom: 20px;
    padding: 50px;
`
const FirstLine = styled.div`
    display: flex;
    align-items: center;
`
const SmallProfileImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
`
const ProfileDiv = styled.div`
    
`
const ProfName = styled.div`
    color: #262626;
    font-size: 17px;
    font-weight: 600;
`
const Date = styled.div`
    color: #A6A6A6;
    font-size: 13px;
    font-weight: 600;
`
const Title = styled.div`
    color: #262626;
    font-size: 30px;
    font-weight: 600;
    margin-top: 30px;
`
const Content = styled.div`
    color: #262626;
    font-size: 15px;
    font-weight: 500;
    margin-top: 20px;
`
const ImgLine = styled.div`
    display: flex;
    margin-top: 20px;
`
const Img = styled.img`
    width: 200px;
    height: 200px;
    margin-right: 10px;
`
const CommentBMLine = styled.div`
    display: flex;
`
const CommentBMDiv = styled.div`
    display: flex;
    width: 50px;
    height: 20px;
    border-radius: 20px;
    border: 1.5px solid #afaeae;
    background: #FFF;
    padding: 10px 15px;
    margin-right: 10px;
    margin-top: 20px;
    cursor: pointer;

    img {
        width: 20px;
    }
`
const HowMany = styled.div`
    color: #7F7F7F;
    font-size: 18px;
    font-weight: 600;
    margin-left: 15px;
`
const CommentField = styled.div`
    margin-top: 35px;
`
const InputLine = styled.div`
    margin-top: 50px;
    display: flex;
    border-radius: 25.5px;
    background: #F2F2F2;
    padding: 5px;
    justify-content: space-between;
`
const Input = styled.input`
    border: none;
    background-color: #F2F2F2;
    padding: 12px;
    padding-left: 20px;
    outline: none;
    width: 85%;
`
const SendBtn = styled.button`
    border-radius: 21.5px;
    background: #6695F1;
    border: none;
    width: 93px;
    cursor: pointer;
    &:hover {
        background: #5880cf;
    }
`


const InfoContainer = styled.div`
    width: calc(30vw - 100px);
`
const InfoBox = styled.div`
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
const InfoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
`
const ProfileImg = styled.img`
    width: 84px;
    height: 84px;
    border-radius: 50%;
    margin-right: 20px;
`
const MainInfo = styled.div`
`
const Age = styled.div`
    color: #B1B1B1;
    font-size: 15px;
    font-weight: 600;
`
const Name = styled.div`
    color: #262626;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
`
const Label = styled.img`
    
`
const BlueTxt = styled.div`
    color: #6695F1;
    font-size: 15px;
    font-weight: 600;
    padding: 0 20px;
`
const InfoTxt = styled.div`
    color: #262626;
    font-size: 15px;
    font-weight: 600;
    padding: 10px 20px;
`

const ModifyBtn = styled.button`
    background: #50C56A;
    color: white;
    font-size: 17px;

    margin-right: 10px;
    border: none;
    padding: 10px 15px;
    border-radius: 50px;

    &:hover {
        background-color: #065D1F;
    }
`;

const DeleteBtn = styled.button`
    background: #E84E4E;
    color: white;
    font-size: 17px;

    margin-left: 10px;
    border: none;
    padding: 10px 15px;
    border-radius: 50px;

    &:hover {
        background-color: #9C0A0A;
    }
`;

const BtnContainer = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
`;


let commentlist = [
    {id: 1, profileimg: profileimg, name: '댓글1작성자', label: label_moon, comment_txt: '저도 곧 네덜란드 가는데 운하 보트투어 꼭 해야겠어요~~'},
    {id: 2, profileimg: profileimg, name: '댓글2작성자', label: label_blackhole, comment_txt: '라이든 이쁘당'}
];

let label = {
    'Jupiter': label_jupiter,
    'Sun': label_sun,
    'Comet': label_comet,
    'Earth': label_earth,
    'Moon': label_moon,
    'Saturn': label_saturn,
    'White': label_whitehole,
    'Black': label_blackhole
};
let sub_title = {
    'Jupiter': '여행계의 보부상, 목성형 여행자',
    'Sun': "맛집 탐방가, 태양형 여행자",
    'Comet': "자유분방! 어디로든, 혜성형 여행자",
    'Earth': "호기심 대마왕, 지구형 여행자",
    'Moon': "안전제일, 달형 여행자",
    'Saturn': "힐링 최고! 감성적인 사진가, 토성형 여행자",
    'White': "계획 자판기, 화이트홀형 여행자",
    'Black': "무엇이든 OK!, 블랙홀형 여행자"
}
let gender = {
    'M': '남',
    'F': '여'
};

const DetailPage = () => {
    const { state } = useLocation();
    const postId = state;
    const [isBM, setIsBM] = useState(false);
    const [input, setInput] = useState('');
    const [detail, setDetail] = useState([]);
    const [post, setPost] = useState([]);
    const [img1url, setImg1url] = useState('');
    const [img2url, setImg2url] = useState('');
    const [img3url, setImg3url] = useState('');
    const [profile, setProfile] = useState('');
    const [age, setAge] = useState('');
    const [isTrue, setIsTrue] = useState(false);
    const [showRewrite, setShowRewrite] = useState(false);
    const navigate = useNavigate();

    const handleBM = (e) => {
        setIsBM(isBM => !isBM);
        !isBM? alert("북마크에 저장되었습니다.") : alert("북마크가 취소되었습니다.");
    }
    const onChangeInput = (e) => {
        setInput(e.target.value);
    }
    const getDetail = () => {
        axios.get(`http://127.0.0.1:8000/board/articles/${postId}`)
        .then(res => {
            console.log(res);
            setDetail(res.data);
            setPost(res.data.author);
            const serverDomain = 'http://127.0.0.1:8000';
            const imagePath = res.data.image;
            const profpath = res.data.author.profile_pic;
            setImg1url(serverDomain + imagePath);
            setImg2url(serverDomain + imagePath);
            setImg3url(serverDomain + imagePath);
            setProfile(serverDomain + profpath);
            handleBtn(res.data.author.nickname);

            console.log(2024 - parseInt(post.birth_date.substr(0, 4)));

            setAge(2024 - parseInt(post.birth_date.substr(0, 4)));
        })
        .catch(err => {
            console.error('get detail error', err);
        })
    }

    const handleBtn = (nickname) => {
        //글사용자와 현재 사용자의 닉네임이 같으면
        if(nickname === "눈송"){
            console.log("참");
            setIsTrue(true);
            return isTrue;
        }
        console.log("거짓");
        setIsTrue(false);
        return isTrue;
    }
    
    const modifyDetail = () => {
        //수정 페이지
        setShowRewrite(true);
    }

    const deleteDetail = () => {
        const confirmDelete = window.confirm("진짜로 삭제하시겠습니까?");

        axios.delete(`http://127.0.0.1:8000/board/articles/${postId}/`)
        .then(response => {
            navigate('/home')
            console.log("게시물이 삭제되었습니다.");
        })
          .catch(error => {
            console.error("게시물 삭제에 실패했습니다:", error);
        });
    }

    useEffect(() => {
        console.log(state);
        getDetail();

    },[]);

    return (
        <>
            <TopBar/>
            {!showRewrite ? <Body>
                <DetailContainer>
                    <Detail>
                        <FirstLine>
                            <SmallProfileImg src={profileimg}/>
                            <ProfileDiv>
                                <ProfName>{post.nickname}</ProfName>
                                <Date>{detail.updated_at}</Date>
                            </ProfileDiv>
                        </FirstLine>
                        <Title>{detail.title}</Title>
                        <Content>{detail.content}</Content>
                        <ImgLine>
                            {detail.image? <Img src={img1url}/> : <div></div>}
                            {/* {detail.image2? <Img src={img2url}/> : <div></div>}
                            {detail.image3? <Img src={img3url}/> : <div></div>} */}
                        </ImgLine>
                        <CommentBMLine>
                            <CommentBMDiv>
                                <img src={comment}/>
                                <HowMany>2</HowMany>
                            </CommentBMDiv>
                            <CommentBMDiv onClick={handleBM} style={isBM? {borderColor:"#6695F1", backgroundColor:"#E6EEFC"}: {}}>
                                {isBM? <img src={bookmark_on}/> :<img src={bookmark}/>}
                                <HowMany style={isBM? {color:"#6695F1"} : {}}>{detail.bookmarks_count}</HowMany>
                            </CommentBMDiv>
                        </CommentBMLine>
                        {isTrue ? (
                        <BtnContainer>
                            <ModifyBtn onClick={modifyDetail}>수정</ModifyBtn>
                            <DeleteBtn onClick={deleteDetail}>삭제</DeleteBtn>
                        </BtnContainer>
                        ) : null}
                        <CommentField>
                            {commentlist && commentlist.map(commentlist => (
                                <Comment
                                    profileimg={commentlist.profileimg}
                                    name={commentlist.name}
                                    label={commentlist.label}
                                    comment_txt={commentlist.comment_txt}
                                />
                            ))}
                        </CommentField>
                        <InputLine>
                            <Input 
                                name='comment'
                                type='text'
                                placeholder='댓글을 입력해주세요.'
                                onChange={onChangeInput}
                                value={input}/>
                            <SendBtn><img src={send}/></SendBtn>
                        </InputLine>
                    </Detail>
                </DetailContainer>
                <InfoContainer>
                    <InfoBox>
                        <Text>글쓴이</Text>
                        <InfoDiv>
                            <ProfileImg src={profile}/>
                            <MainInfo>
                                <Age>{age}세 / {gender[post.gender]}</Age>
                                <Name>{post.nickname}</Name>
                                <Label src={label[post.user_type]}/>
                            </MainInfo>
                        </InfoDiv>
                        <BlueTxt>여행 성향</BlueTxt>
                        <InfoTxt>{sub_title[post.user_type]}</InfoTxt>
                        <BlueTxt>자기 소개</BlueTxt>
                        <InfoTxt>{post.bio}</InfoTxt>
                    </InfoBox>
                </InfoContainer>
                <WriteBtn/>
            </Body> : <Rewrite/>}
        </>
    );
};

export default DetailPage;