<?php

namespace App\Http\Controllers\JamRoom;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Services\JamRoom\CreateRoomService;
use App\Http\Requests\JamRoom\StoreJamRoomRequest;

class JamRoomController extends Controller
{

    public function index(Request $request)
    {
        return Inertia::render('jam-room/index');
    }

    public function store(StoreJamRoomRequest $request){
        $service = app(CreateRoomService::class);
        $room = $service->handle($request->validated());

        return redirect()->route('jam-room.show')
            ->with('success', 'Jam Room created successfully.');
    }

    public function show(Request $request)
    {
        $jamRoom = $request->user()->jamRoom();

        return Inertia::render('jam-room/show', [
            'jamRoom' => $jamRoom,
        ]);
    }
}
