<?php

namespace App\Observers;

use App\Models\Job;
use App\Models\User;
use App\Notifications\JobPendingConfirmationNotification;
use Notification;

class JobObserver
{
    /**
     * Handle the Job "created" event.
     */
    public function created(Job $job): void
    {
        $moderators = User::where('type', 'moderator')->get();
        Notification::send($moderators, new JobPendingConfirmationNotification($job));
    }

    /**
     * Handle the Job "updated" event.
     */
    public function updated(Job $job): void
    {
        //
    }

    /**
     * Handle the Job "deleted" event.
     */
    public function deleted(Job $job): void
    {
        //
    }

    /**
     * Handle the Job "restored" event.
     */
    public function restored(Job $job): void
    {
        //
    }

    /**
     * Handle the Job "force deleted" event.
     */
    public function forceDeleted(Job $job): void
    {
        //
    }
}
