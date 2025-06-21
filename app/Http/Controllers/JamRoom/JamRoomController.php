<?php

namespace App\Http\Controllers\JamRoom;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class JamRoomController extends Controller
{

    public function index()
    {
        return Inertia::render('jam-room/index', [
            'user' => $this->getCurrentUser(),
        ]);
    }

    private function getCurrentUser()
    {
        return Auth::user();
    }
}
