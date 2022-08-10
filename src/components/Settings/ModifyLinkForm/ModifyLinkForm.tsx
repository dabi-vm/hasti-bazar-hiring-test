import { Grid, Select, MenuItem, TextField, Button } from "@mui/material";
import React, { FC, useRef } from "react";
import { ILinkItem } from "../../../models/links";
import { Icons } from "../../shared/Icons/Icons";
import { SocialNetworksList } from "../AddLink/AddlinkConstants";
interface IProps {
  handleSubmit(v: ILinkItem): void;
  handleCancel(): void;
  defaultValues?: ILinkItem;
}

export const ModifyLinkForm: FC<IProps> = ({
  handleSubmit,
  defaultValues,
  handleCancel,
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  const HandleCreateValues = (e: any) => {
    e.preventDefault();

    // make an object from values of form
    const target = e.target as typeof e.target & {
      title: { value: string };
      link: { value: string };
    };

    const values: ILinkItem = {
      id: defaultValues ? defaultValues.id : new Date().toString(),
      title: target.type.value,
      link: target.link.value,
    };

    handleSubmit(values);

    // reset form after submit
    if (formRef.current !== null) {
      formRef.current.reset();
    }
  };

  return (
    <Grid
      container
      component="form"
      ref={formRef}
      className="w-full"
      onSubmit={HandleCreateValues}
      spacing={1}
    >
      <Grid item xs={4}>
        <Select
          name="type"
          placeholder="نوع"
          fullWidth
          defaultValue={defaultValues?.title}
        >
          {SocialNetworksList.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              <Grid container alignItems="center">
                <Icons name={item.name} />
                &nbsp;
                {item.name}
              </Grid>
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={8}>
        <TextField
          name="link"
          placeholder="لینک"
          fullWidth
          defaultValue={defaultValues?.link}
        />
      </Grid>
      <Grid item xs={12} container justifyContent="flex-end" spacing={1}>
        <Grid item>
          <Button
            children="انصراف"
            size="small"
            variant="outlined"
            onClick={handleCancel}
          />
        </Grid>
        <Grid item>
          <Button
            type="submit"
            children="ثبت مسیر ارتباطی"
            size="small"
            variant="contained"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
