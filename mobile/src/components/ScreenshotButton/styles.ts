import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const ScreenshotButtonContainer = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.surface_secondary};
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  position: relative;
`;

export const BackgroundScreenshot = styled.Image`
  width: 40px;
  height: 40px;
`;

export const ButtonWithScreenshot = styled.View``;

export const styles = StyleSheet.create({
  removeIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
