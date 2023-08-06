<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function getContacts()
    {
        // Fetch all contacts and return as JSON response
        $contacts = Contact::all();
        return response()->json($contacts);
    }

    public function getContactById($id)
    {
        // Find the contact by ID and return as JSON response
        $contact = Contact::find($id);

        if (!$contact) {

            return response()->json(['message' => 'Contact not found'], 404);
        }

        return response()->json([
            'message' => 'Contact created successfully',
            'contact' => $contact,
        ]);
    }




    public function addContact(Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:20',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
        ]);

        $userId = Auth::id();

        $contact = Contact::create([
            'name' => $request->input('name'),
            'phone_number' => $request->input('phone_number'),
            'latitude' => $request->input('latitude'),
            'longitude' => $request->input('longitude'),
            'user_id' => $userId,
        ]);


        return response()->json([
            'contact' => $contact,
            'message' => 'Contact created successfully',
        ], 201);
    }
}