import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-black p-1">

      <div className="flex rounded-md h-12 md:h-40 mb-1 items-center justify-between md:flex-row">
        
        <h1 className="p-4 text-2xl font-bold text-fuchsia-400 md:text-6xl">Local</h1>
        
          <div className="flex items-center gap-2  pr-4 flex-row md:pt-3 md:h-40 md:gap-1 md:items-start">
              <Link
                href="/login"
                className="flex items-center border border-fuchsia-700 rounded-md md:bg-gray-800 md:mr-6 px-2 py-1 text-sm md:font-bold text-white transition-colors hover:bg-fuchsia-900 md:hover:bg-fuchsia-800 md:text-base md:px-5 md:py-3 md:h-8 md:rounded-lg"
              >
                <span>Log in</span>
                <ArrowRightIcon className="w-3 md:w-5"/>
              </Link>

              <Link
                href="/register"
                className="flex text-sm font-medium text-fuchsia-400 hover:text-fuchsia-100 md:font-bold md:text-lg"
              >
                <span>Register</span>
              </Link>
                  
          </div>
      </div>
          

      <div className="flex flex-col items-center jsutify-between gap-2 md:gap-4 p-3 md:flex-row">
          <div className="flex rounded-md h-40 border p-1 md:w-3/5 md:h-80">
              <Image 
              src={'/cart1.jpg'}
              alt={'No se encuentra la imagen'}
              width={650}
              height={550}
              className="md:block"
              />

          </div>

          <div className="flex rounded-md h-40 border p-1 md:w-3/5 md:h-80">
              <Image 
              src={'/iphone.jpg'}
              alt={'No se encuentra la imagen'}
              width={650}
              height={450}
              className="md:block"
              />
          </div>

      </div>
      
    </main>
  );
}

{/* z  <div className="flex h-20 shrink-0 items-center justify-center rounded-lg bg-pink-400 p-4 md:h-60">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>bienvenido a nxtjs.</strong> esto es un ejemplo para{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              curso de nxtjs
            </a>
            , implementado por vercel.
          </p>
          
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here 
          </div>
          <Image
          src='/hero-desktop.png'
          alt='imgen no encontrada'
          width={1000}
          height={750}
          className='hidden md:block'
          />
          <Image
          src='/hero-mobile.png'
          alt='imgen no encontrada'
          width={560}
          height={620}
          className='block md:hidden'
          />
      </div> */}