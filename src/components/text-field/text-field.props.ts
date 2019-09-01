import { StyledProps } from "@shared";

type TextFieldProps = StyledProps &
  Partial<Pick<React.InputHTMLAttributes<HTMLInputElement>, "type">> & {
    /**
     * Text field value
     */
    value?: number | string;
    /**
     * Field label
     */
    label?: string;
  };

export { TextFieldProps };
