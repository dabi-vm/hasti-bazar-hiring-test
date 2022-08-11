import React from "react";
import { TextField, MenuItem } from "@mui/material";
import { Controller, Control } from "react-hook-form";
import { ISelectList } from "../models/common";
import { Icons } from "../components/shared/Icons/Icons";
interface IProps {
  name: string;
  options: ISelectList[];
  hasOptionsIcon?: true;
  disable?: boolean;
  control: any;
  error?: boolean;
  helpText?: string;
  placeholder: string;
  fullWidth?: true;
}

const SelectInput: React.FC<IProps> = ({
  name,
  options,
  disable,
  placeholder,
  control,
  error,
  helpText,
  fullWidth,
  hasOptionsIcon,
}) => {
  return (
    <Controller
      render={({ field }) => (
        <>
          <TextField
            {...field}
            select
            placeholder={placeholder}
            onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
              if (event.target.value) {
                const val = event.target.value as string;
                field.onChange(val);
              } else field.onChange(undefined);
            }}
            size="small"
            fullWidth={fullWidth}
            margin="dense"
            disabled={disable}
            error={error}
            helperText={helpText}
          >
            {options.map((item: ISelectList) => (
              <MenuItem key={item.id} value={item.id}>
                {hasOptionsIcon && <Icons name={item.name} />}&nbsp;
                {item.name ?? item.name ?? " "}
              </MenuItem>
            ))}
          </TextField>
        </>
      )}
      name={name}
      control={control}
    />
  );
};

export default SelectInput;
