export default function Banner() {
  return (
    <div className="items-center justify-center gap-x-6 bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 fixed top-0 left-0 right-0 z-50">
      <p className="text-sm text-center leading-6 text-white">
        <strong className="font-semibold">Welcome to Ferrara Real NY Pizza</strong>
        <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline h-0.5 w-0.5 fill-current">
          <circle r={1} cx={1} cy={1} />
        </svg>
        Real New Yorkers, Real Italians, Real Pizza.{' '}
        <a href="https://ferrarapizzacolumbia.hrpos.heartland.us/menu" className="font-semibold underline text-white">
          order online&nbsp;<span aria-hidden="true">&rarr;</span>
        </a>
        <a href="https://slicelife.com/restaurants/sc/columbia/29212/ferrara-real-ny-pizza/menu?utm_campaign=order_now_button&utm_medium=referral&utm_content=custom_link&utm_source="
          className="font-semibold underline text-white">
          Delivery&nbsp;<span aria-hidden="true">&rarr;</span></a>
      </p>
    </div>
  );
}
