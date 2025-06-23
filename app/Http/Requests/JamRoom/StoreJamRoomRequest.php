<?php

namespace App\Http\Requests\JamRoom;

use Illuminate\Foundation\Http\FormRequest;

class StoreJamRoomRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'owner_id' => 'required|integer|exists:users,id',
        ];
    }
}
