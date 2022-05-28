import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton";  

interface FeedbackProps {
  setSelectedFeedback: (type: FeedbackType) => void;
}

export const FeedbackSelectTypeStep = ({ setSelectedFeedback }: FeedbackProps) => {
    return (
    <>
      <header>
        <span>Send your feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full"> {/* gap -> cria uma distancia entre os elemento */}
        { Object.entries(feedbackTypes).map(([key, value]) => 
          <button 
            className="bg-zinc-700 rounded-md py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent
            hover:border-brand-500
            focus:border-brand-500 focus:outline-none"
            type="button"
            onClick={() => setSelectedFeedback(key as FeedbackType)} 
            key={key}
          >
            <img 
              src={value.image.source} 
              alt={value.image.alt}
            />
            <span>{value.title}</span>
          </button> 
        )}
      </div>
    </>
  )
}