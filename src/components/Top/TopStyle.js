import styled from "styled-components";


export const Wrapper = styled.div `
 display: flex;
 align-items: center;
 justify-content: space-between;

`;

export const AppWrapper = styled.div `
 background: var(--white);
 padding: 0 20px;
 width: 100%;
 height: 68px;
 
  `

export const Content = styled.div `
 display: flex;
 align-items: center;
 height: 100%;
 
 `;
export const LogoImg = styled.img `
position: absolute;
top: 0;
left: 70px;
margin-top: 14px;
`;
export const IconLeft = styled.img `
margin: 18px 14px;
`;

export const IconRight = styled.img `
height: 32px;
width: 32px;
border-radius: 50%;
margin: 18px 14px;

`

export const Button = styled.button `
 font-size: 1.2rem;
 background-color: #FFE000;
 border-radius: 10px;
 border: none;
 outline: none;
 cursor: pointer;
 padding: 5px 5px;
 :hover {
   background-color: rgba(255, 224, 0, 0.7);
   color: rgba(0,0,0, 0.7);
 }
`;
export const IconLogo = styled.img `

`