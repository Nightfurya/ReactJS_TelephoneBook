import React, { Component } from "react";
import "./DetailedInfo.scss";

//Redux
import { connect } from "react-redux";
import * as appActions from "../../Store/app/app.actions";

class DetailedInfo extends Component {
  render() {
    const { cardDetail } = this.props;
    return (
      <>
        <p>
          <b>Email:</b> {cardDetail.contact.email}
        </p>
        <p>
          <b>Phone:</b> {cardDetail.contact.phone}
        </p>
      </>
    );
  }
}

function mapStateToProps({ app }) {
  return {
    cardDetail: app.cardDetail
  };
}

export default connect(
  mapStateToProps,
  { ...appActions }
)(DetailedInfo);
