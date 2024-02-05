import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TopBar from '../../components/TopBar';
import photo from '../../images/photo.svg';
import camera from '../../images/camera.svg';
import arrow from '../../images/send.svg';
import axios from 'axios';

const Body = styled.div`
    margin-top: 10vh;
    background-color: #E6EEFC;
    padding: 50px 100px 50px 100px;
    min-height: calc(90vh - 100px);
`
const Txt = styled.div`
    color: #262626;
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
`
const SubTxt = styled.div`
    color: #6695F1;
    font-size: 15px;
    font-weight: 500;
    display: flex;
    align-items: end;
    margin-bottom: 10px;
    margin-left: 10px;
`
const Title = styled.input`
    outline: none;
    width: 619px;
    height: 73px;
    border-radius: 20px;
    border: 1px solid #DFDFDF;
    background: #FFF;
    padding: 0 20px;
    font-size: 25px;
    font-weight: 600;
    color: #262626;
    &::placeholder {
        color: #D9D9D9;
    }
    margin-bottom: 20px;
`
const Content = styled.textarea`
    width: calc(100% - 200px);
    height: 339px;
    border-radius: 20px;
    border: 1px solid #DFDFDF;
    background: #FFF;
    padding: 30px;
    outline: none;
    font-size: 17px;
    resize: none;
    &::placeholder {
        color: #D9D9D9;
        font-size: 17px;
        font-weight: 600;
    }
    margin-bottom: 20px;
`
const PhotoLine = styled.div`
    display: flex;
`
const PhotoBox = styled.div`
    margin-right: 20px;
`
const FileInput = styled.input`
    display: none;
    width: 253px;
`
const Label = styled.label`
    width: 253px;
`
const Box = styled.div`
    width: 200px;
    height: 194px;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
    background-color: #F4F4F4;
    z-index: 3;
    cursor: pointer;
    > img {
        position: relative;
        z-index: 0;
        object-fit: cover;
        width: 50px;
        height: 50px;
    }
`
const PhotoTxt = styled.div`
    width: 100%;
    height: 47px;
    background: rgba(153, 153, 153, 0.30);
    margin-top: -50px;
    position: relative;
    z-index: 98;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    color: white;
    font-size: 1.2rem;
    text-align: center;
    font-weight: 800;
    line-height: 50px;
    display: flex;
`
const Photodiv = styled.div`
    display: flex;
    justify-content: center;
    > img {
        display: flex;
        justify-content: center;
        width: 30px;
        margin-right: 5px;
    }
    margin: auto;
`
const PostLine = styled.div`
    display: flex;
    margin-top: 50px;
`
const PostBtn = styled.button`
    width: 195px;
    height: 69px;
    border-radius: 34.5px;
    background: #6695F1;
    border: none;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    > div {
        color: #FFF;
        font-size: 25px;
        font-weight: 600;
        margin-left: 15px;
    }
    &:hover {
        background: #5880cf;
    }
`

const WritePage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const imgRef = useRef();
    const imgRef2 = useRef();
    const imgRef3 = useRef();
    const [imgFile1, setImgFile1] = useState("");
    const [imgFile2, setImgFile2] = useState("");
    const [imgFile3, setImgFile3] = useState("");
    const [realfile1, setRealFile1] = useState([]);
    const [realfile2, setRealFile2] = useState([]);
    const [realfile3, setRealFile3] = useState([]);
    const navigate = useNavigate();

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const onChangeContent = (e) => {
        setContent(e.target.value);
    }
    // 이미지 업로드 input의 onChange
    const saveImgFile = () => {
        const file = imgRef.current.files[0];
        setRealFile1(file);
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImgFile1(reader.result);
            };
            console.log(file);
        }
    };
    const saveImgFile2 = () => {
        const file = imgRef2.current.files[0];
        setRealFile2(file);
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImgFile2(reader.result);
            };
            console.log(file);
        }
    };
    const saveImgFile3 = () => {
        const file = imgRef3.current.files[0];
        setRealFile3(file);
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImgFile3(reader.result);
            };
            console.log(file);
        }
    };

    const handlePost = () => {
        axios.post('http://127.0.0.1:8000/board/articles/', {
            title : title,
            content : content,
        })
        .then(res => {
            alert("게시완료");
            navigate('/home');
            console.log(res);
        })
        .catch(error => {
            console.error('Error handle post: ', error);
        });
    };

    return (
        <>
            <TopBar/>
            <Body>
                <Txt>제목</Txt>
                <Title 
                    name='title'
                    value={title}
                    placeholder='제목을 입력해주세요.'
                    onChange={onChangeTitle}
                />
                <Txt>내용</Txt>
                <Content
                    name='content'
                    value={content}
                    placeholder='내용을 입력해주세요.'
                    onChange={onChangeContent}
                />
                <PhotoLine>
                    <Txt>사진 업로드</Txt>
                    <SubTxt>*사진은 최대 3장까지 업로드 가능합니다.</SubTxt>
                </PhotoLine>
                <PhotoLine>
                    <PhotoBox>
                        <Label for="img1">
                        <Box>
                            <img src={imgFile1 ? imgFile1 : photo} style={{width:"100%", height:"100%", borderRadius:'10px'}}/>
                            <PhotoTxt><Photodiv><img src={camera}/>사진 선택</Photodiv></PhotoTxt>
                        </Box>
                        </Label>
                        <FileInput
                            type="file"
                            accept="image/*"
                            id="img1"
                            onChange={saveImgFile}
                            ref={imgRef}
                        />
                    </PhotoBox>
                    <PhotoBox>
                        <Label for="img2">
                        <Box>
                            <img src={imgFile2 ? imgFile2 : photo} style={{width:"100%", height:"100%", borderRadius:'10px'}}/>
                            <PhotoTxt><Photodiv><img src={camera}/>사진 선택</Photodiv></PhotoTxt>
                        </Box>
                        </Label>
                        <FileInput
                            type="file"
                            accept="image/*"
                            id="img2"
                            onChange={saveImgFile2}
                            ref={imgRef2}
                        />
                    </PhotoBox>
                    <PhotoBox>
                        <Label for="img3">
                        <Box>
                            <img src={imgFile3 ? imgFile3 : photo} style={{width:"100%", height:"100%", borderRadius:'10px'}}/>
                            <PhotoTxt><Photodiv><img src={camera}/>사진 선택</Photodiv></PhotoTxt>
                        </Box>
                        </Label>
                        <FileInput
                            type="file"
                            accept="image/*"
                            id="img3"
                            onChange={saveImgFile3}
                            ref={imgRef3}
                        />
                    </PhotoBox>
                </PhotoLine>
                <PostLine>
                    <PostBtn onClick={handlePost}>
                        <img src={arrow}/>
                        <div>게시하기</div>
                    </PostBtn>
                </PostLine>
            </Body>
        </>
    );
};

export default WritePage;