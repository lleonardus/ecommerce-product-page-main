function Header() {
  return (
    <header className="flex items-end justify-between gap-6 px-4">
      <div
        id="left-side"
        className="flex items-end gap-6 md:grid md:grid-cols-2"
      >
        <div className="md:col-start-2">
          <button className="h-4 w-4 bg-[url('images/icon-menu.svg')] bg-no-repeat"></button>
        </div>
        <a href="/" className="min-w-32 md:col-start-1">
          <img src="images/logo.svg" alt="logo" />
        </a>
      </div>
      <div id="right-side" className="flex items-end gap-8">
        <div id="cart-stuff">
          <div className="text-blue-800 hover:cursor-pointer hover:text-blue-900">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="currentColor"
                fillRule="nonzero"
              />
            </svg>
          </div>
        </div>
        <button className="h-6 w-6 bg-[url('images/image-avatar.png')] bg-cover bg-no-repeat hover:rounded-full hover:outline hover:outline-[2px] hover:outline-orange-200"></button>
      </div>
    </header>
  );
}

export default Header;
