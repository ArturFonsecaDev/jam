<?php

namespace App\Http\Controllers\JamRoom;

use App\Http\Controllers\Controller;
use App\Http\Requests\JamRoom\StoreJamRoomRequest;
use App\Http\Services\JamRoom\CreateRoomService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class JamRoomController extends Controller
{
    public function index(Request $request)
    {
        if ($request->user()->jamRoom()->first()) {
            return redirect()->route('jam-room.show');
        }

        return Inertia::render('jam-room/index');
    }

    public function store(StoreJamRoomRequest $request)
    {
        $service = app(CreateRoomService::class);
        $ownerId = Auth::id();
        $data = array_merge($request->validated(), ['owner_id' => $ownerId]);
        $service->handle($data);

        return redirect()->route('jam-room.show')
            ->with('success', 'Jam Room created successfully.');
    }

    public function show(Request $request)
    {
        if (!$request->user()->jamRoom()->exists()) {
            return redirect()->route('jam-room.index');
        }

        $jamRoom = $request->user()->jamRoom()->first();

        return Inertia::render('jam-room/show', [
            'jamRoom' => $jamRoom,
        ]);
    }
}
