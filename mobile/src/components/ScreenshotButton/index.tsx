import { Camera, Trash } from "phosphor-react-native";
import React from "react";
import { ImageSourcePropType } from "react-native";
import theme from "../../theme";
import { BackgroundScreenshot, ButtonWithScreenshot, ScreenshotButtonContainer, styles } from "./styles";

interface Props {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export const ScreenshotButton = ({ screenshot, onTakeShot, onRemoveShot }: Props) => {
  return (
    <ScreenshotButtonContainer
      onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      {
        screenshot ? 
        <ButtonWithScreenshot>
          <BackgroundScreenshot 
            source={screenshot as ImageSourcePropType}
          />
          <Trash 
            size={22}
            color={theme.colors.text_secondary}
            weight="fill"
            style={styles.removeIcon}
          />
        </ButtonWithScreenshot> :
        <Camera 
          size={24}
          color={theme.colors.text_secondary}
          weight="bold"
        />
      }
    </ScreenshotButtonContainer>
  )
}