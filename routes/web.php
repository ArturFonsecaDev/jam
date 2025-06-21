<?php

use App\Http\Controllers\JamRoom\JamRoomController;
use App\Models\JamRoom;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('login');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('minha-jam', [JamRoomController::class, 'index'])->name('jam-room.index');
});

Route::get('test', function () {
    return JamRoom::factory()->count(10)->create();
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
