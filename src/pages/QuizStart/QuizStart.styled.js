import styled from "styled-components";

import PageBgd from '../../assets/img/pageBgd.jpg'

export const QuizStartStyle = styled.div`
    margin: 32px 0 56px;
    background: url(${PageBgd}) no-repeat;
    background-size: cover;
    padding: 46px 45px 90px;

    .select{
        display: flex;
        align-items: center;
        gap: 30px;
        justify-content: center;
    }

    button{
        text-align: center;
        color: #000;
        font-size: 32px;
        font-weight: 700;
        line-height: normal;
        transition: all .3s ease;
        animation-name: none;
        &:hover{
            transform: scale(1.1) !important;
        }
        &:active{
            transform: scale(0.95) !important;
        }
    }


    img{
        max-width: 327px;
    }

     /* button{
        display: block;
        width: 100%;
        max-width: 620px;
        border-radius: 20px;
        background: #DC3018;
        margin: 0 auto;
        padding: 16px;
        color: #FFF;
        font-size: 20px;
        font-weight: 700;
        line-height: 32px;
        margin-top: 50px;
        transition: all .3s ease;

        &:hover{
            background: #b94231;
        }
    }  */

    @media screen and (max-width: 768px) {
        margin: 20px 0 30px;
        padding: 25px 25px 43px;

        a{
            font-size: 22px;
        }

        button{
            margin-top: 30px;
            padding: 10px;
            font-size: 16px;
        }

        
        .select{
            flex-direction: column;
            img{
                max-width: 250px;
                margin: 0 auto;
            }
        }
    }
`