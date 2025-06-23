import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

interface JamRoom {
  id: number;
  name: string;
  room_code: string;
  owner_id: number;
  createdAt: string;
  updatedAt: string;
}

interface JamRoomsProps {
  jamRoom: JamRoom;
}

export default function MinhaJam(JamRoomProps: JamRoomsProps) {
  console.log(JamRoomProps);
  return (
    <AppLayout>
      <Head title="Minha Jam" />
      <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
        <div>
          <h1 className="mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-center text-4xl leading-tight font-bold text-transparent md:text-5xl">
           {JamRoomProps.jamRoom.name} <br></br>Comece a Convidar Amigos para Ouvir a sua Jam em Conjunto! 
          </h1>
          <div className="my-8 flex items-center justify-center"></div>
        </div>
      </div>
    </AppLayout>
  );
}
