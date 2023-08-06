<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    // display all contacts
    public function index()
    {
        $contacts = Contact::all();
        return response()->json($contacts);
    }

    //  add a new contact to the database
    public function store(Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:255',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
        ]);


        $contact = Contact::create([
            'name' => $request->input('name'),
            'phone_number' => $request->input('phone_number'),
            'latitude' => $request->input('latitude'),
            'longitude' => $request->input('longitude'),
        ]);

        return response()->json([
            'contact' => $contact,
            'message' => 'Contact created successfully',
        ], 201);
    }

    //  display a specific contact by its ID
    public function show($id)
    {
        $contact = Contact::find($id);

        if (!$contact) {
            return response()->json(['message' => 'Contact not found'], 404);
        }

        return response()->json($contact);
    }
}