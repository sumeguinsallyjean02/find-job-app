<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;
    
    protected $table = 'job_posts';
    
    protected $fillable = [
        'title',
        'location',
        'employment_type',
        'description'
    ];

    protected $casts = [
        'employment_type' => "array"
    ];
}
