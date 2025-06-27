<?php

namespace App\Http\Services\JamRoom;

use App\Models\JamRoom;
use App\Http\Services\Service;

class CreateRoomService extends Service{
    protected function rules(): array{
        return [
            'name' => 'required|string',
            'owner_id' => 'required|integer|exists:users,id',
        ];
    }

    public function handle(array $data){
        $validatedData = $this->validate($data);

        $room = JamRoom::create([
            'name' => $validatedData['name'],
            'owner_id' => $validatedData['owner_id'],
        ]);

        return $room;
    }
}
