import {styled} from "@shared";
import {AccountModal as Component} from "./form-account.component";
import {withFormik} from "formik";
import {AccountModel} from "../../../models/accountModel";
import {FormAccountProps} from "./form-account.props";
import {any} from "prop-types";

const AccountModal: typeof Component = withFormik<FormAccountProps, AccountModel>({
    mapPropsToValues: ({
                           initialValue: {name = '', index = null} = {}
                       }) => ({
        name,
        index,
    }),
    enableReinitialize: true,
    handleSubmit: (values, {props: {onSubmit}}) => onSubmit(values),
})(styled(require("./form-account.scss"))(Component) as any) as any;

export {AccountModal};
