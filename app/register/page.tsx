import AcmeLogo from '@/app/ui/acme-logo';
import RegisterForm from '../ui/register-form';

 
export default async function RegisterPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:mt-3">
        <div className="flex h-20 w-full items-center justify-center rounded-lg bg-black p-3 md:h-36">
          <div className="flex w-32 md:w-36">
            <p className='text-slate-400'>Registro en <strong className='font-bold text-6xl text-red-400'>Local</strong></p>
          </div>
        </div>
        <RegisterForm />
      </div>
    </main>
  );
}