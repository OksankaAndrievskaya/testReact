import * as React from "react";
import {EmptyPageProps} from "./empty-page.props";
import {NavLink} from "react-router-dom";
import {FaTelegramPlane, FaCaretLeft} from "react-icons/fa";
import { Preloader, Placeholder } from 'react-preloading-screen';
import Spinner from 'react-spinner-material';

class EmptyPage extends React.Component<EmptyPageProps> {
    render() {
         return <div className="container">
        </div>

    }


}

export {EmptyPage}
