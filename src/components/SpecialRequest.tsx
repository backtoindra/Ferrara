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
        <div className="mt-10 px-8 sm:px-6 lg:max-w-7xl lg:px-8 flex justify-between">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900">FERRARA PIZZA AND PASTA</h3>
            <h5 className='text-xl mt-4 font-bold text-gray-900 align-left'>Address:</h5>
            <p className='font-semibold text-gray-900 align-left'>6801 St. Andrews rd Suite 15</p>
            <p className='font-semibold text-gray-900 align-left'>Columbia, SC 29212</p>
            <p className='font-semibold text-gray-900 align-left'>Contact: (803)-785-7200</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 md:text-left">Hours</h3>
            <ul className="mt-4 text-lg text-gray-600 md:text-right">
              <li className='font-semibold'>Mon 11:00 – 22:00</li>
              <li className='font-semibold'>Tue 11:00 – 22:00</li>
              <li className='font-semibold'>Wed 11:00 – 22:00</li>
              <li className='font-semibold'>Thu 11:00 – 22:00</li>
              <li className='font-semibold'>Fri 11:00 – 23:00</li>
              <li className='font-semibold'>Sat 11:00 – 23:00</li>
              <li className='font-semibold'>Sun 11:00 – 22:00</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialRequests;
