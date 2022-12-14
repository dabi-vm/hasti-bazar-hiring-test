import { Grid, Button, Paper } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { ILinkItem } from "../../../models/links";
import { SocialNetworksList } from "../AddLink/AddlinkConstants";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextInput from "../../../utils/TextInput";
import SelectInput from "../../../utils/SelectInput";
import { useTranslation } from "next-i18next";

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
  const { t } = useTranslation("common");

  const schema = yup.object().shape({
    link: yup
      .string()
      .required(t("required"))
      .matches(
        /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
        t("EnterCorrectAddress")
      ),
    title: yup.string().required(t("required")),
  });

  const {
    control,
    handleSubmit: submit,
    formState: { errors },
  } = useForm<ILinkItem>({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues: {
      link: defaultValues?.link,
      title: defaultValues?.title,
    },
  });

  return (
    <Paper variant="black70">
      <Grid
        container
        spacing={1}
        justifyContent="flex-end"
        item
        xs={12}
        component="form"
        onSubmit={submit(handleSubmit)}
      >
        <Grid item xs={4}>
          <SelectInput
            name="title"
            placeholder={t("type")}
            options={SocialNetworksList}
            hasOptionsIcon
            fullWidth
            control={control}
            error={!!errors.title}
            helpText={errors?.title?.message}
          />
        </Grid>
        <Grid item xs={8}>
          <TextInput
            placeholder={t("link")}
            name="link"
            fullWidth
            control={control}
            error={!!errors.link}
            helpText={errors?.link?.message}
          />
        </Grid>
        <Grid item>
          <Button
            children={t("cancel")}
            size="small"
            variant="outlined"
            onClick={handleCancel}
          />
        </Grid>
        <Grid item>
          <Button
            type="submit"
            children={t("submit")}
            size="small"
            variant="contained"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
