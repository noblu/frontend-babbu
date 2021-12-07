import styled  from "styled-components";


export const Wrapper = styled.div`
flex: 1;
margin-top: 20px;
padding: 0 20px;
width: 100%;
width: calc(100% - 34px);
background-color: #F7F7F7;
min-height: auto;
border-radius: 20px;
`;
export const Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 10px;
width: 100%;
`;

export const Icon = styled.img`
margin: 0 5px;
object-fit: cover;
`;

export const Container = styled.div`
position: absolute;
top: 115%;
left: 70px;
`

export const Img = styled.img`
padding-bottom: 10px;
width: 100%;
object-fit: cover;
`;

export const Span = styled.div`
font-size: 14px;
line-height: 17px;
color: #98795C;
`;



export const Title = styled.h2`
margin: 0;
`;
export const Text = styled.div`
margin-bottom: 20px;
display: flex;
`;

export const Button = styled.button`
border: 1 px solid #98795C;
border-radius: 20px;
padding: 5px 10px;
cursor: pointer;
outline: none;
border: none;

`;
export const ButtonBottom = styled.button`
background-color: #0FD545;
color: white;
border-radius: 16px;
padding: 10px 15px;
border: none;
outline: none;
`;

export const Icons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const ImgPeople = styled.img`
margin-right: 5px;
`

export const TextTop = styled.span`

font-size: 32px;
color : #47131A;
font-weight: 700;
line-height: 38px;

` 

export const TextContent = styled.div`
padding: 7px 15px;
background-color: #47131A;
border-radius: 16px;
color: white;
font-size: 24px;
font-weight: 600;
`