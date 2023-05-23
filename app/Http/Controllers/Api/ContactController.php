<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Contact\CreateRequest;
use App\Http\Requests\Contact\UpdateRequest;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index(){
        $contacts = Contact::all();

        return response()->json([
            'contacts' => $contacts
        ], 200);
    }

    public function store(CreateRequest $request){
        $request = $request->all();
        $request['user_id'] = 1;
        Contact::create( $request );
        return response()->json(['success'], 200);
    }

    public function edit(Contact $contact){
        return response()->json($contact->toArray() ,200);
    }

    public function update(UpdateRequest $request, Contact $contact){
        $contact->update($request->all() );
        return response()->json(['success'], 200);
    }

    public function destroy(Contact $contact){
        $contact->delete();
        return response()->json(['success'], 200);
    }
}
