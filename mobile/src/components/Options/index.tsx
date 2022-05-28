import React from "react";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { Footer } from "../Footer";
import { FeedbackType } from "../widget";
import { Option } from "./Option";
import { Container, HeaderText, OptionsContainer } from "./styles";

interface OptionsProps {
  onFeedbackTypeChanged: (FeedbackType: FeedbackType) => void;
}

export const Options = ({ onFeedbackTypeChanged }: OptionsProps) => {
  return (
    <Container>
      <HeaderText>Leave your feedback</HeaderText>
      <OptionsContainer>
        {
          Object.entries(feedbackTypes).map(([key, value]) => 
            <Option
              key={key}
              image={value.image}
              title={value.title}
              onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
            />
          )
        }
      </OptionsContainer>
      <Footer/>
    </Container>
  )
}