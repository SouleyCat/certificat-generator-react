<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Certificate;
use App\Http\Controllers\Controller;

class CertificateController extends Controller
{

    public function index()
    {
        $certificates = Certificate::all();
        return response()->json(['certificates' => $certificates], 200);
    }


    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required',
            'prenom' => 'required',
            'dateNaissance' => 'required|date',
            'lieuNaissance' => 'required',
            'classe' => 'required',
            'filiere' => 'required',
            'matricule' => 'required',
        ]);

        $certificate = Certificate::create($request->all());

        return response()->json(['certificate' => $certificate], 201);
    }


    public function update(Request $request, $id)
    {
        $request->validate([
            'nom' => 'required',
            'prenom' => 'required',
            'dateNaissance' => 'required|date',
            'lieuNaissance' => 'required',
            'classe' => 'required',
            'filiere' => 'required',
            'matricule' => 'required',
        ]);

        $certificate = Certificate::findOrFail($id);
        $certificate->update($request->all());

        return response()->json(['certificate' => $certificate], 200);
    }


    public function destroy($id)
    {
        $certificate = Certificate::findOrFail($id);
        $certificate->delete();

        return response()->json(['message' => 'Certificat supprimé avec succès.'], 200);
    }
}
