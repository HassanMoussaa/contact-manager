<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = ['name', 'phone_number', 'latitude', 'longitude'];

    // removed user_id
//     public function user()
//     {
//         return $this->belongsTo(User::class);
//     }
// 
}