<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Ta Thi Cong Vien',
            'email' => 'hr.devplus' . '@gmail.com',
            'password' => Hash::make('Abc@123'),
            'avatar' => 'https://quynhnganehe.s3.us-east-2.amazonaws.com/261838630_1262942110890632_7357131792017423757_n.jpeg',
            'role_id' => 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
    }
}
