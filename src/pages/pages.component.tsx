import * as React from "react";
import {Router, Route} from "react-router-dom";
import { PagesProps } from "./pages.props";
import {ListPage} from "./list-page"
import {EmptyPage} from "./empty-page";
import {HeaderPage} from "./header";

class Pages extends React.Component<PagesProps> {
  /**
   * Render root routing
   */
  public render() {
    const { history } = this.props;

    return (
      <Router history={history}>
        <div id="router-outlet" className='bot-registration'>
            <HeaderPage/>
            <Route path="/" exact component={ListPage} />
            <Route path="/empty" exact component={EmptyPage} />
        </div>
      </Router>
    );
  }
}

export { Pages };
