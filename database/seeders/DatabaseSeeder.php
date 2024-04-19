<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'type' => 'moderator',
            'password' => bcrypt('test'),
        ]);

        User::factory()->create([
            'name' => 'Employeer A',
            'email' => 'employerA@employer.com',
            'type' => 'employeer',
            'password' => bcrypt('test'),
        ]);

        User::factory()->create([
            'name' => 'Job Seeker A',
            'email' => 'jobseeker@employer.com',
            'type' => 'seeker',
            'password' => bcrypt('test'),
        ]);
    }
}
