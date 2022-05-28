import React, { useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { ChatTeardropDots } from "phosphor-react-native";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import { Form } from "../Form";
import { Options } from "../Options";

import { feedbackTypes } from "../../utils/feedbackTypes";
import theme from "../../theme";
import { Button, styles } from "./styles";
import { Success } from "../Success";

export type FeedbackType =keyof typeof feedbackTypes;

const Widget = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleOpenBottomSheet = () => {
    bottomSheetRef.current?.expand();
  }

  const handleRestartFeedback = () => {
    setFeedbackType(null);
    setFeedbackSent(false)
  }

  const handleSentFeedback = () => {
    setFeedbackSent(true);
  }

  return (
    <>
      <Button onPress={handleOpenBottomSheet}>
        <ChatTeardropDots 
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </Button>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {
          feedbackSent ? 
          <Success 
           onSendAnotherFeedback={handleRestartFeedback}
          /> : 
          <>
            feedbackType ? 
            
              <Form 
                selectedFeedbackType={feedbackType}
                onFeedbackCanceled={handleRestartFeedback}
                onFeedbackSent={handleSentFeedback}
              /> 
              :
              <Options 
                onFeedbackTypeChanged={setFeedbackType}
              />
            
          </>
        }
      </BottomSheet>
    </>
  )
}

export default gestureHandlerRootHOC(Widget) as React.FC;
