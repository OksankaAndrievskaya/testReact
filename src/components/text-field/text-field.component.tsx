import * as React from "react";
import { TextFieldProps } from "./text-field.props";

class TextField extends React.Component<TextFieldProps> {
  /**
   * Field props
   */
  public static defaultProps = {
    type: "text",
    value: ""
  };
  /**
   * Renders TextField
   */
  public render() {
    const { styles, label, type, value } = this.props;

    return (
      <div className={styles("text-field")}>
        {label && <label>{label}</label>}
        <input type={type} value={value} />
      </div>
    );
  }
}

export { TextField };
