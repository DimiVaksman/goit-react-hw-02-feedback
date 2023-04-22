import styled from 'styled-components';

export const StatisticsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Likes = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 80px;
  position: relative;
`;
export const StatNumberLickes = styled.span`
  color: #fff;
  font-size: 18px;
  position: absolute;
  left: 117px;
    top: 51px;
  font-weight: bold;
`;
export const StatNumberNeutral = styled.span`
  color: #fff;
  font-size: 18px;
  position: absolute;
  left: 187px;
    top: 51px;
  font-weight: bold;
`;
export const StatNumberDislikes = styled.span`
  color: #fff;
  font-size: 18px;
  position: absolute;
  left: 246px;
  top: 51px;
  font-weight: bold;
`;

export const Text = styled.p`
  margin-right: 20px;
`;

export const Total = styled.p`
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 22px;
    font-weight: bold;
    padding: 8px;
    text-align: center;
    border: 1px solid transparent;
    color: rgb(255, 255, 255);
    text-shadow: rgb(180 206 198) 0px 4px 3px;
    border-radius: 50px;
    background-color: rgb(22, 226, 37);
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 70%) -1px -1px 40px -4px;`

    export const PositiveFeedbackStyled = styled.p`
       display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    line-height: 1;
    text-decoration: none;
    color: rgb(174, 244, 11);
    font-size: 18px;
    border-radius: 50px;
    border: 1px solid rgb(174, 244, 11);
    width: 230px;
    height: 30px;
    font-weight: bold;
    transition: all 0.3s ease 0s;
    box-shadow: rgb(0 0 0 / 50%) 0px 2px 4px 0px;
    cursor: pointer;
    background-color: rgb(255, 255, 255);
    margin-top: 27px;

    `

    export const TotalNumber = styled.span`
    color: red;
    padding: 4px;
    text-shadow: rgb(180 206 198) 0px 4px 3px;
    position: relative;
    `

export const PostFeedbNumber = styled.p`
padding: 4px;
color: rgb(22, 226, 37);`