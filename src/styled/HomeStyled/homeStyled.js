import styled from 'styled-components'

export const HomeContainer = styled('div')`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #131313;
    transition: .5s ease-in-out ;

    #darkmode:checked + .containerAside .aside{
        background-color: white;
    }

    h1{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-family: sans-serif;
        color: #8C8C8C;
        font-size: 285%;
        letter-spacing: 3px;
    }

    .busca{
        width: 100%;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;

        input{
            padding: 17px;
            width: 40%;
            font-family: sans-serif;
            font-size: 15px;
            letter-spacing: 3px;
            background-color: transparent;
            color: white;
            outline: 0;
            border-radius: 30px;
        }
        input::placeholder{
            color: white;
        }
    }

    .containerAside{
        position: fixed;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0,0.8);
        overflow: hidden;
        z-index: 18;
        display: none;

        .aside{
            background-color: #131313;
            box-shadow: 0px 5px 7px 3px rgba(0,0,0,0.5);
            width: 350px;
            height: 60%;
            border-radius: 6px;
            padding: 10px;
            animation: aside 1s forwards;
            position: fixed;

            form{
                width: 100%;
                margin-top: 85px;
                display: flex;
                flex-direction: column;
                gap: 25px;

                .field{
                    input{
                        width: 100%;
                        padding: 7px;
                        font-family: sans-serif;
                        border-top: none;
                        border-left: none;
                        border-right: none;
                        border-bottom: 1px solid rebeccapurple;
                        font-size: 13px;
                        color: white;
                        font-weight: bold;
                        outline: 0;
                        background-color: transparent;
                    }
                    input::placeholder{
                        color: rebeccapurple;
                    }
                    textarea{
                        width: 100%;
                        padding: 7px;
                        height: 150px;
                        resize: none;
                        border: 1px solid rebeccapurple;
                        border-radius: 5px;
                        font-family: sans-serif;
                        outline: 0;
                        background-color: transparent;
                        color: white;
                        font-weight: bold;
                    }
                    textarea::placeholder{
                        color: rebeccapurple;
                    }
                }

                .button{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    button{
                        width: 80%;
                        padding: 17px;
                        border-radius: 6px;
                        background-color: #8D258D;
                        color: white;
                        font-weight: bold;
                        font-family: sans-serif;
                        border: none;
                        cursor: pointer;
                        font-size: 18px;
                        opacity: 0.5;
                    }
                    button:hover{
                        cursor: not-allowed;
                    }
                }
            }
        }

        .fechar{
            position: fixed;
            right: 28%;
            top: 20%;
            background-color: purple;
            padding: 10px;
            border-radius: 0px 50px 50px 0px;
            cursor: pointer;
            transition: all 0.3s ease;
            animation: close 1s forwards;
            z-index: 77;

            span{
                font-family: sans-serif;
                color: white;
                font-weight: bold;
            }
        }
        .fechar:hover{
            background-color: rebeccapurple;
        }
        @media (max-width: 411px){
            .fechar{
                right: 0;
                border-radius: 50px 0px 0px 50px;
            }
        }
    }


    @keyframes aside{
        0%{transform: translateY(-850px)}
        100%{transform: translateY(1)}
    }
    @keyframes close{
        0%{transform: translateX(450px)}
        100%{transform: translateX(1)}
    }

    .add{
        position: fixed;
        right: 5%;
        bottom: 10%;
        background-color: purple;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 55px;
        height: 55px;
        cursor: pointer;
        border-radius: 0px 0px 0px 20px;
        transition: all 0.3s ease;
    }
    .add:hover{
        width: 65px;
        height: 65px;
        background-color: rebeccapurple;
    }
    @media (max-width: 411px){
            .add{
                top: 5%;
                z-index: 88;
            }
        }
`