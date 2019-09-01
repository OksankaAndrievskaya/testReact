import {RouteComponentProps} from "react-router";

type HeaderProps = RouteComponentProps & {
    /**
     * History
     */
    statusIndicator?: any;
    finishStep?: boolean;

    setStatusIndicator?: any;
};

export { HeaderProps };
