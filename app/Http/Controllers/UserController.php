<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController
{
    public function login(Request $request)
    {
        $email = $request->get("email");
        $password = $request->get("password");
        $user = User::where("email", $email)->first();
        if (!$user) {
            return response()->json([
                "error"=> "Not registered!"
            ], 422);
        }

        $isCorrectPassword = Hash::check($password, $user->password);
        if (!$isCorrectPassword) {
            return response()->json([
                "info"=> "Password did not match!"
            ], 200);
        }

        return response()->json([
            "token"=> $user->createToken("UI")->plainTextToken
        ]);

    }
}
