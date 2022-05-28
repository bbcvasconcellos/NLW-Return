import React, { useState } from "react";
import { ArrowLeft } from "phosphor-react-native";
import * as fs from "expo-file-system";
import { captureScreen } from "react-native-view-shot";

import { FeedbackType } from "../widget";
import { ScreenshotButton } from "../ScreenshotButton";

import { feedbackTypes } from "../../utils/feedbackTypes";
import theme from "../../theme";
import { Container, FeedbackImage, Footer, Header, Input, ReturnButton, TitleContainer, TitleText } from "./styles";
import { SubmitButton } from "../SubmitButton";
import { api } from "../../api";

interface FormProps {
  selectedFeedbackType: FeedbackType | null;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

export const Form = ({ selectedFeedbackType, onFeedbackCanceled, onFeedbackSent }: FormProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [comment, setComment] = useState('');

  const selectedFeedBackInfo = feedbackTypes[selectedFeedbackType!];

  const handleScreenshot = () => {
    captureScreen({
      format: 'jpg',
      quality: 0.8
    }).then(uri => setScreenshot(uri))
    .catch(error => console.log(error))
  }

  const handleScreenshotRemoval = () => {
    setScreenshot(null)
  }

  const handleFeedbackSubmission = async() => {
    if (isSendingFeedback) {
      return;
    }

    setIsSendingFeedback(true);

    const screenshotBase64 = screenshot && await fs.readAsStringAsync(screenshot, {
      encoding: "base64"
    })

    try {
      await api.post('/feedbacks', {
        type: selectedFeedbackType,
        comment, 
        screenshot: `data:image/png;base64, ${screenshotBase64}`
      });

      onFeedbackSent();

    } catch(err) {
      console.log(err)
    } finally {
      setIsSendingFeedback(false);
    }
  }

  return (
    <Container>
      <Header>
        <ReturnButton
          onPress={onFeedbackCanceled}
        >
          <ArrowLeft 
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </ReturnButton>
        <TitleContainer>
          <FeedbackImage
            source={selectedFeedBackInfo.image}
          />
          <TitleText>{selectedFeedBackInfo.title}</TitleText>
        </TitleContainer>
      </Header>
      <Input
        multiline
        placeholder="Is something not working as it should be? Let us fix it. Please tell us in details what is going on"
        placeholderTextColor={theme.colors.text_secondary}
        onChangeText={setComment}
      />
      <Footer>
        <ScreenshotButton 
          onRemoveShot={handleScreenshotRemoval}
          onTakeShot={handleScreenshot}
          screenshot={screenshot}
        />
        <SubmitButton 
          isLoading={isSendingFeedback}
          onPress={handleFeedbackSubmission}  
        />
      </Footer>
    </Container>
  )
}