import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
  return (
    <AppLayout>
      <Head title="Dashboard" />
      <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
        <div className="seção-boas-vindas">
          <h1 className="mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-4xl leading-tight font-bold text-transparent md:text-5xl text-center">
            Seja bem-vindo, agora é só criar a sua Jam!
          </h1>
         <p className="text-base text-slate-600 dark:text-slate-300 leading-loose max-w-3xl mx-auto font-light italic text-center mt-5 tracking-wider">
  Um encontro vibrante onde a música brota livre e a espontaneidade encontra a melodia, tecendo ritmos que se entrelaçam em uma dança espontânea de sons.
</p>
        </div>
        <div className="grid auto-rows-min gap-4 md:grid-cols-3"></div>
      </div>
    </AppLayout>
  );
}
