import {StyledProps} from "@shared";
import {FormikProps} from "formik";

type FormAccountProps = StyledProps & Partial<FormikProps<any>> & {
  initialValue?: {
      name?: string;
      index?: number;
  };

  onSubmit?: any;
  onDelete?: any;
  handleClose?: any;
};

export { FormAccountProps };
