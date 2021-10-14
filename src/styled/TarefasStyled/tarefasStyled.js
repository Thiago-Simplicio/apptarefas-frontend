import styled from "styled-components";

export const TarefaContainer = styled('ul')`
    margin-top: 65px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    gap: 25px;
    padding-bottom: 20px;

    .card{
        z-index: 10;
        width: 330px;
        height: 260px;
        border-radius: 6px;
        list-style: none;
        padding: 10px;
        background-color: #1C1C1C;
        box-shadow: 0px 5px 7px 5px rgba(0,0,0,0.3);

        .head{
            display: flex;
            justify-content: space-between;
            align-items: center;

            span{
                font-family: sans-serif;
                color: white;
                font-weight: bold;
                letter-spacing: 3px;
                font-size: 18px;
            }
            .delete{
                color: #CF2F2F;
                font-size: 21px;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            .delete:hover{
                opacity: 0.4;
            }
        }
        .text{
            margin-top: 35px;
            width: 100%;

            textarea{
                background-color: rgba(0,0,0,0.3);
                border: none;
                width: 100%;
                height: 120px;
                color: white;
                font-family: sans-serif;
                padding: 7px;
                border-radius: 6px;
                resize: none;
                font-size: 15px;
                outline: 0;
            }
        }
        .bottom{
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            a{
                background-color: #3F7FBF;
                padding: 2px;
                width: 30px;
                border-radius: 3px;
                text-align: center;
                cursor: pointer;
                text-decoration: none;

                .edit{
                    color: white;
                    font-size: 18px;
                }
            }
        }
    }
`