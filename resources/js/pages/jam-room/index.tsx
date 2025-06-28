import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { CriarJamDialog } from './components/CriarJamDialog';

interface User {
  id: number;
  name: string;
}

interface JamRoom {
  id: number;
  name: string;
  room_code: string;
  owner_id: number;
  createdAt: string;
  updatedAt: string;
}

interface JamRoomProps {
  auth: {
    user: User;
  };
  jamRoom?: JamRoom;
}

export default function Index(jamRoomProps: JamRoomProps) {
  const userName = jamRoomProps.auth.user.name.split(' ')[0];

  return (
    <AppLayout>
      <Head title="Jam" />
      <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
        <div>
          <h1 className="mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-center text-4xl leading-tight font-bold text-transparent md:text-5xl">
            Seja bem-vindo {userName}, agora é só criar a sua Jam!
          </h1>
          <div className="my-8 flex items-center justify-center">
            <div className="flex items-center space-x-1">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1 animate-pulse rounded bg-gradient-to-t from-purple-500 to-blue-500`}
                  style={{
                    height: `${Math.random() * 24 + 8}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
          <p className="text-md mx-auto mt-4 max-w-2xl text-center leading-6 font-normal tracking-normal text-neutral-500 dark:text-neutral-400">
            Um encontro vibrante onde a música brota livre e a espontaneidade encontra a melodia, tecendo ritmos que se entrelaçam em uma dança
            espontânea de sons.
          </p>
          <div className="mt-18 flex justify-center">
            <CriarJamDialog />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
