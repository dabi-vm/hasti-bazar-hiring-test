export interface IModalProps {
  title?: string;
  description?: string;
  body?: any;
  action?: any;
  open?: boolean;
  handleClose?(show: boolean): void;
  yes?: boolean;
  no?: boolean;
  exit?: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  dividers?: boolean;
}
