import styled from "styled-components";

export const ContainerEdit = styled('div')`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .voltar{
        position: absolute;
        left: 0%;
        top: 15%;
        width: 45px;
        height: 35px;
        font-size: 31px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rebeccapurple;
        border-radius: 0px 50px 50px 0px;
    }
    
    .card{
        width: 450px;
        height: 250px;
        display: flex;
        flex-direction: column;
        background-color: rgba(0,0,0,0.3);
        padding: 10px;
        border-radius: 6px;
        box-shadow: 0px 5px 5px rgba(0,0,0,0.7);

        .head{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 60px;

            input{
                width: 100%;
                text-align: center;
                background-color: transparent;
                padding: 7px;
                color: white;
                font-family: sans-serif;
                font-weight: bold;
                outline: 0;
                border: none;
            }
            input:focus{
                border: 1px solid white;
                outline-style: solid;
            }
        }
        .text{
            width: 100%;
            height: 120px;

            textarea{
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.3);
                resize: none;
                color: white;
                padding: 7px;
                border: none;
            }
            textarea:focus{
                border: 1px solid white;
                outline-style: solid;
            }
        }
        .bottom{
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;

            button{
                background-color: rebeccapurple;
                color: white;
                font-weight: bold;
                font-family: sans-serif;
                padding: 7px;
                border: none;
                outline: 0;
                cursor: pointer;
            }
        }
    }
`