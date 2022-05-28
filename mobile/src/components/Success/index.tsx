import React from "react"
import successImg from "../../assets/success.png";
import { Footer } from "../Footer";
import { ButtonTitle, ConfirmButton, Container, SuccessImage, Title } from "./styles";

interface SuccessProps {
  onSendAnotherFeedback: () => void;
}

export const Success = ({ onSendAnotherFeedback }: SuccessProps) => {
  return (
    <Container>
      <SuccessImage source={successImg}/>
      <Title>
        Thank you for your feedback
      </Title>
      <ConfirmButton>
        <ButtonTitle
          onPress={onSendAnotherFeedback}
        >
          Submit another feedback
        </ButtonTitle>
      </ConfirmButton>
      <Footer />
    </Container>
  )
}