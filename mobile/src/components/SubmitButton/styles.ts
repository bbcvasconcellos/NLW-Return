import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
  flex: 1;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.brand};
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_on_brand_color};
`;
