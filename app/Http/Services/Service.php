<?php

namespace App\Http\Services;

use Illuminate\Validation\ValidationException;

abstract class Service
{
    public function rules(): array
    {
        return [];
    }

    public function handle(array $data) {}

    public function validate(array $data)
    {
        $validator = validator($data, $this->rules());

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        return $validator->validated();
    }
}
