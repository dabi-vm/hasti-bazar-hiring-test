import { useState } from "react";
import { TextField } from "@mui/material";
import { Controller, Control } from "react-hook-form";

interface IProps {
  name: string;
  placeholder: string;
  type?: string;
  rows?: number;
  maxRows?: number;
  fullWidth?: true;
  required?: true;
  disable?: true;
  maxLength?: number;
  control: any;
  error?: boolean;
  helpText?: string;
}

const TextInput: React.FC<IProps> = ({
  type = "text",
  rows,
  maxRows,
  fullWidth,
  required,
  disable,
  maxLength,
  control,
  name,
  placeholder,
  error,
  helpText,
}) => {
  return (
    <Controller
      render={({ field }) => (
        <>
          <TextField
            {...field}
            type={type}
            placeholder={placeholder}
            onChange={(event) => {
              field.onChange(event.target.value);
            }}
            size="small"
            fullWidth={fullWidth}
            margin="dense"
            multiline={rows ? true : false}
            rows={rows}
            maxRows={maxRows}
            required={required}
            disabled={disable}
            inputProps={{ maxLength: maxLength }}
            error={error}
            helperText={helpText}
          />
        </>
      )}
      name={name}
      control={control}
    />
  );
};

export default TextInput;
