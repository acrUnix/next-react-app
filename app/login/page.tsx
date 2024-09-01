import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { LinkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '../ui/fonts';

 
export default async function LoginPage(params: {name: string}) {
  console.log('entro aca: LoginPage, login/page.tsx', params.name);
  return (
    <main className="flex items-center bg-black justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[500px] flex-col space-y-2.5 p-4 md:mt-3">
        <div className="flex h-25 w-full justify-center items-center border border-red-700 items-center rounded-md  p-3 md:h-36">
          <div className="flex flex-col justify-between items-center w-32 md:w-36">
            <h1 className={ `text-white text-2xl text-bold ${lusitana.className}`}>Iniciar en </h1>
            <p className='text-red-700 font-bold md:text-6xl'>Local</p>
          </div>
        </div>
        <LoginForm />
        <div className='flex rounded-md border border-red-700 items-center justify-center bg-black hover:bg-gray-800'>
          <Link
            key={params.name}
            href={'/register'}
          >
            <p className="hidden text-white text-md font-semibold hover:text-red-500 md:block">Registrarse</p>
          </Link>
        </div>
        
      </div>
    </main>
  );
}