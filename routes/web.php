<?php

use App\Http\Controllers\JamRoom\JamRoomController;
use App\Models\JamRoom;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('login');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('jam', [JamRoomController::class, 'index'])->name('jam-room.index');
    Route::get('jam/create', [JamRoomController::class, 'create'])->name('jam-room.create');
});

Route::get('test', function () {
    return JamRoom::factory()->count(10)->create();
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
