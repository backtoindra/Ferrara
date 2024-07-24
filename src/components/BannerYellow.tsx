import { XMarkIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

export default function BannerYellow({ }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  }
  return (
    <> {isVisible && (
      <div className="fixed top-10 left-0 right-0 z-50 flex items-center gap-x-6 bg-yellow-500 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <p className="text-sm leading-6 text-red-800">
          <strong className="font-bold">New Private Banquet Room</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline h-0.5 w-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          <strong className='font-semibold'>For Up to 50 People. Contact #803-785-7200</strong>
        </p>
        <div className="flex flex-1 justify-end">
          <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
            <span className="sr-only">Dismiss</span>
            <XMarkIcon aria-hidden="true" onClick={handleDismiss} className="h-5 w-5 text-red-800" />
          </button>
        </div>
      </div>
    )}
    </>
  );
}
