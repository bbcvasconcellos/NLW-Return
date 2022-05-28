import styled, { css } from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import theme from "../../theme";
import { StyleSheet } from "react-native";

export const Button = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.brand};
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 16px;
  bottom: ${getBottomSpace() + 16}px;
`;

export const styles = StyleSheet.create({
  modal: {
    backgroundColor: theme.colors.surface_primary,
    paddingBottom: getBottomSpace() + 16,
  },
  indicator: {
    backgroundColor: theme.colors.text_secondary,
    width: 56,
  },
});
