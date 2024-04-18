<?php

use App\Http\Controllers\JobController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('/jobs')->group(function () {
    Route::post('', [JobController::class, 'store']);
});
