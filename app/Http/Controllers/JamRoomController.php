<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class JamRoomController extends Controller
{
    private function getCurrentUser()
    {
        return Auth::user();
    }
}
