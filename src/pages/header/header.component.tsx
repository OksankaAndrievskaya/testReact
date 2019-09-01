import * as React from "react";
import {HeaderProps} from "./header.props";
import {Link, NavLink} from "react-router-dom";

class HeaderPage extends React.Component<HeaderProps> {

    public statusIndicator = [
        {
            name: "List page",
            url: "/",
            link: ""
        },
        {
            name: "Empty",
            url: "/empty",
            link: "empty"
        }
    ];

    componentDidMount() {
        let {
            setStatusIndicator
        } = this.props;
        setStatusIndicator(this.statusIndicator)

    };

    render() {
        // this.updateStatusIndicatorInformation();
        let {
            statusIndicator,
        } = this;

        let linkInformation = location.pathname.slice(1);

        return <div id="progress-line" className="progress-line">
            {(linkInformation === '' ||  linkInformation === 'empty') &&
            statusIndicator  &&
            statusIndicator.map((status, index) => {
                return (
                    <div className={status.link === linkInformation ?  " active-element indicator" : "indicator"} key={index}>
                        <NavLink to={status.url} key={index}>
                            <p className="indicator-name">
                                {status.name}
                            </p>
                        </NavLink>
                    </div>
                )
            })}

        </div>
    }

}


export {HeaderPage};
