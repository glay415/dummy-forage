import * as S from "./style";
import React, { useState, useEffect } from "react";

function MainHeader() {
    const [loginHeader, setLoginHeader] = useState(false)
    const [signHeader, setSignHeader] = useState(false)
    const [passwordNotMatch, setPasswordNotMatch] = useState(false)
    const [emailNotFound, setEmailNotFound] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [sEmail, setSEmail] = useState('')
    const [sPassword, setSPassword] = useState('')
    const [sPassword2, setSPassword2] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            if (sPassword == sPassword2) {
                setPasswordNotMatch(false)
            } else {
                setPasswordNotMatch(true)
            }

        };
        fetchData();
    }, [sPassword, sPassword2]);

    const Login = () => {
        if (localStorage.getItem('email') === email) {
            setEmailNotFound(false)
            window.location.reload()
        } else {
            setEmailNotFound(true)
        }
    }

    const Signin = () => {
        localStorage.setItem('email', sEmail)
        window.location.reload()
    }

    return (
        <S.MainHeader>
            <div class='logo'>
                    <i class="fa-solid fa-crop"></i>
                    <a href="/">DummyForge</a>
            </div>
            <nav>
                <ul class="nav">
                    <S.Link2 to="/basic">BASIC</S.Link2>
                    <S.Link2 to="/sql">SQL</S.Link2>
                    <S.Link2 to="/api">API</S.Link2>
                    <S.Link2 to="/share">SHARE</S.Link2>
                </ul>
            </nav>
            <button>
                <i class="fa-solid fa-user" onClick={() => {setLoginHeader(!loginHeader)}}></i>
            </button>
            {loginHeader && <S.LoginModal>
                <input placeholder="이메일" value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }}></input>
                <input type="password" placeholder="비밀번호" value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }}></input>
                {emailNotFound && <div class="not-found">
                        이메일 또는 비밀번호가 틀렸습니다.
                    </div>
                    }
                <input class="login-button" value="로그인" onClick={Login}/>
                <div class="login-footer">
                    <div>아직 회원이 아니신가요?</div>
                    <div class="sign-button" onClick={() => {setSignHeader(!signHeader)}}>회원가입</div>
                </div>
            </S.LoginModal>
            }
            {signHeader && <S.SignModal>
                <input placeholder="이메일" value={sEmail} onChange={(e) => {
                    setSEmail(e.target.value)
                }}></input>
                <input type="password" placeholder="비밀번호" value={sPassword} onChange={(e) => {
                    setSPassword(e.target.value)
                }}></input>
                <input type="password" placeholder="비밀번호 확인" value={sPassword2} onChange={(e) => {
                    setSPassword2(e.target.value)
                }}></input>
                {passwordNotMatch && <div class="not-match">
                    비밀번호가 매치 되지 않습니다!    
                </div>
                }
                <input class="sign-button" value="회원가입" onClick={Signin}/>
                <div class="sign-footer">
                    <div>아미 회원이신가요?</div>
                    <div class="login-button" onClick={() => {setSignHeader(!signHeader)}}>로그인</div>
                </div>
            </S.SignModal>
            }
        </S.MainHeader>
    );
};

export default MainHeader