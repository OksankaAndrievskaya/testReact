import * as React from "react";
import * as classNames from "classnames";

type ComponentDecorator = <T>(Component: T) => T;

/**
 * Arguments acceptable by classNames
 */
type ClassName = { [x: string]: boolean } | string;

/**
 * Get class name
 */
const getStyleSelector = styles => (...names: ClassName[]) => {
  const parsed = names.map(item => {
    if (typeof item == "string") return styles[item];
    return Object.keys(item).reduce((result, key) => {
      result[styles[key]] = item[key];
      return result;
    }, {});
  });

  return classNames(...parsed);
};

/**
 * Return component with passed styles
 */
const styled = styles => {
  return ((Component: any) => {
    const result = props => (
      <Component {...props} styles={getStyleSelector(styles)} />
    );

    result.displayName = "Styled";

    return result;
  }) as ComponentDecorator;
};
/**
 * Component decorated with styles
 */
type StyledProps = {
  /**
   * Style getter
   */
  styles?: (...names: ClassName[]) => string;
};

export { StyledProps, styled };
