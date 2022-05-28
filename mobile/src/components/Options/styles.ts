import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
`;

export const OptionsContainer = styled.View`
  width: 100%;
  margin-bottom: 48px;
  flex-direction: row;
  justify-content: center;
`;

export const HeaderText = styled.Text`
  font-size: ${RFValue(20)}px;
  margin-bottom: 32px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_primary};
`;
