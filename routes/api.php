<?php

use App\Http\Controllers\JobController;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('/jobs')->middleware('auth:sanctum')->group(function () {
    Route::get('', [JobController::class, 'show']);
    Route::post('/create', [JobController::class, 'store']);
    Route::post('/detail', [JobController::class, 'getJobById']);
});

Route::prefix('/users')->middleware('auth:sanctum')->group(function () {
    Route::post('/login', [UserController::class,'login'])->withoutMiddleware('auth:sanctum');
    Route::get('/me', [UserController::class,'me']);
});
