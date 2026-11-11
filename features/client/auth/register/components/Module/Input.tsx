import { Input } from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import React from 'react';
import type {FormInputProps} from "@/features/client/auth/register/types/Input.types";

function InputItems({id, label, type, placeholder, register, error,}:FormInputProps) {
    return (
        <>

            <div className="space-y-2">
                <Label
                    htmlFor={id}
                    className="text-xs font-medium text-gray-800"
                >
                    {label}
                    <span className="text-red-500 ml-1">*</span>
                </Label>

                <Input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    {...register(id)}
                    className={`
                    h-10 rounded-sm border-gray-200
                    text-xs placeholder:text-gray-400
                    focus-visible:ring-1 focus-visible:ring-gray-400
                    ${error ? "border-red-500" : ""}
                `}
                />

                {error && (
                    <p className="text-xs text-red-500">
                        {error}
                    </p>
                )}
            </div>

        </>
    );
}

export default InputItems;