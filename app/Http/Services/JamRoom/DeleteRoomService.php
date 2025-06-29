<?php

namespace App\Http\Services\JamRoom;

use App\Models\JamRoom;
use App\Http\Services\Service;

class DeleteRoomService extends Service{
    protected function rules(): array{
        return [
            'id' => 'required|integer|exists:jam_rooms,id',
        ];
    }

    public function handle(array $data){
        $validatedData = $this->validate($data);

        $room = JamRoom::findOrFail($validatedData['id']);
        $isDeleted = $room->delete();

        // depois lembrar de deletar os arquivos/mensagens/remover participantes associados a este quarto
        return $isDeleted;
    }
}
