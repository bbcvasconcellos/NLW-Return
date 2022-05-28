import { Camera, Trash } from "phosphor-react"
import html2canvas from "html2canvas"
import { Dispatch, SetStateAction, useState } from "react"
import { Loading } from "../../Loading";

interface ScreenshotProps {
  onScreenshotSnap: Dispatch<SetStateAction<string | null>>;
  screenshot: string | null;
}

export const ScreenshotButton = ({ onScreenshotSnap, screenshot }: ScreenshotProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleTakeScreenshot = async() => {
    try{
      setIsLoading(true)
      const canvas = await html2canvas(document.querySelector('html')!) // pass the html that we want to take a screenshot
      const base64image = canvas.toDataURL('image/png'); // text that represents an image
      onScreenshotSnap(base64image)
    }
    catch(err) {
      console.log('Oh snap something happened. Could not take the screenshot...');
    }
    finally {
      setIsLoading(false);
    }
  }

  if(screenshot) {
    return (
      <button 
        type='button'
        onClick={() => onScreenshotSnap(null)}
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400
        hover:text-zinc-100 transition-colors" 
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180
        }} 
      > 
        <Trash weight="fill" />
      </button>
    )
  }
  return (
    <button
      type='button'
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent
      hover:bg-zinc-700 transition-colors
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      {isLoading ? <Loading /> : <Camera className="w-6 h-6 text-zinc-100" />}
    </button>
  )  
}