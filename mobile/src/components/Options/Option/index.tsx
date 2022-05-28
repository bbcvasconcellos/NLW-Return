import React from "react";
import { ImageSourcePropType, TouchableOpacityProps } from "react-native";
import { ButtonContainer, OptionImage, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  image: ImageSourcePropType;
}

export const Option = ({ title, image }: ButtonProps) => {
  return (
    <ButtonContainer>
      <OptionImage 
        source={image}
      />
      <Title>{title}</Title>
    </ButtonContainer>
  )
}