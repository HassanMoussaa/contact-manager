<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = ['name', 'phone_number', 'latitude', 'longitude'];


    public function user()
    {
        return $this->belongsTo(User::class);
    }
}