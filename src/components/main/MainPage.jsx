import React from "react";
import * as S from "./style";
import groupImg from '../../assets/Group 1.png';
import { useNavigate } from "react-router-dom";

function MainPage() {
    const navigate = useNavigate();
    
    const handleImageClick = () => {
        navigate('/basic');
    }

    return (
        <S.MainPage>
            <S.StyledTitle>Dummy Forage</S.StyledTitle>
            <div>
                <S.StyledContent>At DummyForge, our dummy data creation system<br/>we prioritize an efficient and fun experience for our customers<br/>Be a good dummy!</S.StyledContent>
            </div>
            <div className="group">
                <S.StyledContent2>start generate</S.StyledContent2>
                <img className='group-img' src={groupImg}></img>
                <div className='circle' onClick={handleImageClick}/>
            </div>
        </S.MainPage>
    );
};

export default MainPage;
