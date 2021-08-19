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

export const ContentTitle = styled.View`
  margin-top: 70px;
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
  margin-top: -120px;
  justify-content: center;
  font-size: 30px;
  font-family: 'AGENCYB';
  color: #ffffff;
`;

export const ButtonEntrar = styled.TouchableOpacity`
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
  height: 180px;
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
  width: 110px;
  height: 140px;
`;

export const LogoPc = styled.Image`
margin-left: 10%;
  width: 120px;
  height: 150px;
`;