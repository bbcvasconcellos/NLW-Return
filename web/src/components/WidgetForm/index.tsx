import { useEffect, useState } from "react";
import { FeedbackSelectTypeStep } from "./Steps/FeedbackSelectTypeStep";

import Bug from "../../assets/Bug.svg";
import Idea from "../../assets/Idea.svg";
import Thought from "../../assets/Thought.svg";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  bug:{
    title: 'Problem',
    image: {
      source: Bug,
      alt: 'Bug image'
    }
  },
  idea:{
    title: 'Idea',
    image: {
      source: Idea,
      alt: 'Idea bulb'
    }
  },
  other: {
    title: 'Other',
    image: {
      source: Thought,
      alt: 'Thought cloud'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm = () => {
  const [selectedFeedback, setSelectedFeedback] = useState<FeedbackType | null>(null);  
  const [isFeedbackSent, setIsFeedbackSent] = useState(false);

  const handleRestartFeedback = () => {
    setIsFeedbackSent(false);
    setSelectedFeedback(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 
    flex flex-col items-center shadow-lg 
    w-[calc(100vw-2rem)] md:w-auto"
    >
      {isFeedbackSent ? 
        <FeedbackSuccessStep onRestartFeedback={handleRestartFeedback}/> :
        (<>
          {!selectedFeedback ? 
            <FeedbackSelectTypeStep 
              setSelectedFeedback={setSelectedFeedback}
            /> :
            <FeedbackContentStep 
              selectedFeedback={selectedFeedback}
              restartFeedback={handleRestartFeedback}
              onFeedbackSent={() => setIsFeedbackSent(true)}
            />
          }
        </>)
      }
      
    
      <footer className="text-xs text-neutral-400">
        Made with 🧡 by <a
         href='https://github.com/bbcvasconcellos' 
         target='_blank' 
         className="underline underline-offset-2"
        >
          Pruw
        </a>
      </footer>
    </div>
  )
}