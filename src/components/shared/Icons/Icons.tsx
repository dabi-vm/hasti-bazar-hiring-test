import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";
import { FC } from "react";

interface IProps {
  name: string;
}

export const Icons: FC<IProps> = ({ name }) => {
  switch (name) {
    case "Twitter":
      return <TwitterIcon fontSize="small" />;
    case "Instagram":
      return <InstagramIcon fontSize="small" />;
    case "Facebook":
      return <FacebookIcon fontSize="small" />;
    case "Telegram":
      return <TelegramIcon fontSize="small" />;
    case "LinkedIn":
      return <LinkedInIcon fontSize="small" />;
    case "Website":
      return <PublicIcon fontSize="small" />;

    default:
      return <div />;
  }
};
