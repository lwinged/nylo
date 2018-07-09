import React, { Component, Fragment } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Sidebar />
        <main>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
