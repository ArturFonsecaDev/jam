<?php

namespace App\Http\Services;

use Illuminate\Validation\ValidationException;

abstract class Service
{
    protected function rules(): array
    {
        return [];
    }

    abstract public function handle(array $data);

    protected function validate(array $data)
    {
        $validator = validator($data, $this->rules());

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        return $validator->validated();
    }
}
