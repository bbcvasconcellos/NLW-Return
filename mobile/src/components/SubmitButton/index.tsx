import React from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import theme from "../../theme";
import { ButtonContainer, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  isLoading: boolean;
}

export const SubmitButton = ({ isLoading, ...rest }: Props) => {
  return (
    <ButtonContainer>
      {
        isLoading ? 
        <ActivityIndicator 
          color={theme.colors.text_on_brand_color}
        />
        :
        <Title>
          Enviar Feedback
        </Title> 
      }
    </ButtonContainer>
  )
}