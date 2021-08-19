import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    align-items:center;
    justify-content: center;
    background-color:#369831;
`;

export const ContentAbout = styled.View`
    width: 95%;
    height: 85%;
    border-radius: 30px;
    box-shadow: 40px 20px 50px black;
    padding-top: 30px;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    background-color: #ffffff;
    overflow: scroll;
`

export const ButtonBack = styled.TouchableOpacity`
  top: 7%;
  left: 35%;
  height: 40px;
  width: 40px;
  position: absolute;
  z-index: 1;
`;

export const ButtonInfo = styled.TouchableOpacity`
  top: 7%;
  right: 35%;
  height: 40px;
  width: 40px;
  position: absolute;
  z-index: 1;
`;



// export const Title = styled.Text`
//     font-family: 'AGENCYB';
//     font-size: 25px;
//     text-align: justify;

// `

// export const AboutText = styled.Text`
//     margin-top: 10;
//     font-family: 'AGENCYR';
//     font-size: 20;
//     text-align: 'justify';
// `