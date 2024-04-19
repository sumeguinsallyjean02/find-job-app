<?php

use App\Http\Controllers\JobController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('/jobs')->group(function () {
    Route::get('', [JobController::class, 'show']);
    Route::post('/create', [JobController::class, 'store']);
    Route::post('/detail', [JobController::class, 'getJobById']);
});
