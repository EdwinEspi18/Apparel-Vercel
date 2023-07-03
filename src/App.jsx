function App() {
  return (
    <div className='w-screen min-h-screen bg-[#CE9797]/20 flex flex-col justify-between items-center sm:flex-row-reverse sm:relative'>
      <div className='w-full bg-white p-7 sm:absolute sm:top-0 sm:bg-transparent sm:pl-10'>
        <img src='/logo.svg' alt='logo' loading='lazy' />
      </div>
      <section className='w-full sm:flex sm:justify-end sm:flex-1 sm:min-screen sm:object-contain'>
        <img
          className='w-full sm:hidden'
          src='/hero-mobile.jpg'
          alt='Women'
          loading='lazy'
        />
        <img
          className='w-full max-sm:hidden z-20'
          src='/hero-desktop.jpg'
          alt='Women'
          loading='lazy'
        />
      </section>

      <section className='w-full flex flex-col flex-1 justify-evenly items-center'>
        <img
          className='bg-no-repeat w-full h-full absolute top-0 left-0 -z-40 object-cover max-sm:hidden'
          src='/bg-pattern-desktop.svg'
          alt='Background'
        />
        <article className='w-full'>
          <div className='w-64 text-center mx-auto sm:mx-24 '>
            <h1 className='text-6xl text-center sm:text-7xl sm:text-start sm:tracking-[.15em]'>
              <span className='font-extralight text-[#CE9797]'>WE`RE </span>
              COMING SOON
            </h1>
          </div>
          <p className='w-11/12 text-center text-[#CE9797] font-medium mx-auto p-3 sm:text-start sm:mx-24 sm:whitespace-pre-line sm:w-96 sm:p-0 sm:py-8'>
            Hello fellow shoppers! We`re currently building our new fashion
            store. Add your email below to stay up-to-date announcements and our
            launch deals.
          </p>
        </article>
        <article className='w-11/12 flex items-center mx-auto'>
          <div className='w-full relative flex items-center sm:relative sm:w-96 sm:mx-16 sm:justify-center '>
            <input
              className='bg-[#CE9797]/10 rounded-full outline outline-1 outline-pink-300/75 h-14 w-full pl-8 relative'
              type='email'
              placeholder='Email Address'
            />
            <button className='absolute right-0 border-none rounded-full w-20 h-16 flex justify-center items-center bg-gradient-to-r from-rose-300 to-rose-500 shadow-xl'>
              <img src='/icon-arrow.svg' alt='Arrow' />{" "}
            </button>
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;
