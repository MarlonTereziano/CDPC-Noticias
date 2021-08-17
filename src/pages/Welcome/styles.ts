import styled from 'styled-components/native';


export const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  align-items:center;
  justify-content: center;
  background-color:#00CC00;
`;

export const ContentTitle = styled.View`
  margin-top: 15%;
  align-Items: center;
  justify-content: center;
  flex-direction: row;
  top: 0;
  position: absolute;
  background-color: #ffffff;
  width: 100%;
  height: 6%;
  /* z-index: -1; */
`;

export const TitleRed = styled.Text`
  font-size: 25px;
  font-family: 'AGENCYB';
  color: #C90C10;
`;

export const TitleCDPC = styled.Text`
  font-size: 25px;
  font-family: 'AGENCYB';
  color: #369831;
`;

export const Title = styled.Text`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -40%;
  font-size: 30px;
  font-family: 'AGENCYB';
  color: #ffffff;
`;

export const ButtonEntrar = styled.TouchableOpacity`
  margin-top: 3%;
  width: 50%;
  height: 6%;
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: #1F8E2A;
`;

export const TextEntrar = styled.Text`
  font-size: 30px;
  font-family: 'AGENCYB';
  color: #369831;
`


export const Footer = styled.View`
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: absolute;
  width: 100%;
  height: 25%;
  bottom: 0;
  background-color: #ffffff;

`;

export const ContainerLeft = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50%;
  height: 120%;
`;
export const ContainerRight = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 120%;
`;

export const LogoCampus = styled.Image`
  width: 80%;
  height: 80%;
`;

export const LogoPc = styled.Image`
  width: 80%;
  height: 80%;
`;