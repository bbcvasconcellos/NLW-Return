import { CloseButton } from "../../CloseButton"
import Success from "../../../assets/Success.svg";

interface FeedbackSuccessProps {
  onRestartFeedback: () => void;
}

export const FeedbackSuccessStep = ({ onRestartFeedback }: FeedbackSuccessProps) => {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={Success} />
        <span className="text-xl mt-2">We appreciate your feedback!</span>
        <button 
          type="button"
          onClick={onRestartFeedback}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6
          hover:bg-zinc-700 transition-colors
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500
            disabled:opacity-50 disabled:hover:bg-brand-500"
        >
          Send another form
        </button>
      </div>
    </>
  )
}