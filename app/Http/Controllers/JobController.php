<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreJobRequest;
use App\Http\Requests\UpdateJobRequest;
use App\Http\Requests\UpdateJobStatusRequest;
use App\Models\Job;
use Illuminate\Support\Facades\Request;

class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreJobRequest $request)
    {
        Job::create($request->validated());
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        return Job::where('status', 'approved')->get();
    }

    public function getJobById(StoreJobRequest $request) {
        return Job::find($request->get('id'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Job $job)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateJobRequest $request, Job $job)
    {
        //
    }

    public function updateJobStatus(UpdateJobStatusRequest $request) 
    {
        $job = Job::find($request->get('id'));
        $job->status = $request->get('status');
        $input = $request->all();
        $job->update($input);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Job $job)
    {
        //
    }
}
