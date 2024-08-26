const SpecialRequests = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-red-700 sm:text-4xl">Special Requests?</h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Do you have dietary concerns? Questions about an upcoming event? Drop us a line, and we'll get back to you soon.
          </p>
        </div>
        <div className="mt-10 px-8 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-col md:flex-row md:justify-between">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-gray-900">Ferrara Real NY Pizza</h3>
            <h5 className='text-xl mt-4 font-bold text-gray-900'>Address:</h5>
            <p className='font-semibold text-gray-900'>6801 St. Andrews Rd Suite 15</p>
            <p className='font-semibold text-gray-900'>Columbia, SC 29212</p>
            <p className='font-semibold text-gray-900'>Contact: (803)-728-0055</p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900">Hours</h3>
            <ul className="mt-4 text-lg text-gray-600">
              <li className='font-semibold'>Mon – Thu: 10:30 AM – 9:30 PM</li>
              <li className='font-semibold'>Fri – Sat: 10:30 AM – 10:30 PM</li>
              <li className='font-semibold'>Sun: 11:00 AM – 9:00 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialRequests;
