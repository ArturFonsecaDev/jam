<?php

use App\Http\Controllers\JamRoom\JamRoomController;
use App\Models\JamRoom;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('jam-room.index');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('jam', [JamRoomController::class, 'index'])->name('jam-room.index');
    Route::get('jam/show', [JamRoomController::class, 'show'])->name('jam-room.show');
    Route::post('jam', [JamRoomController::class, 'store'])->name('jam-room.store');
});

Route::get('test', function () {
    return JamRoom::factory()->count(10)->create();
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
