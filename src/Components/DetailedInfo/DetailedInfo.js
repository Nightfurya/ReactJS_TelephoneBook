import React, { Component } from "react";
import "./DetailedInfo.scss";

//Redux
import { connect } from "react-redux";
import * as appActions from "../../Store/app/app.actions";

class DetailedInfo extends Component {
  render() {
    const { cardDetail, clickCounter } = this.props;
    return (
      <div className="detailed-info-card">
        <div className="substrate__main">{cardDetail.general.firstName}</div>
        <div className="substrate__first" style={{ display: clickCounter >= 1 ? "block" : "none" }} />
        <div className="substrate__second" style={{ display: clickCounter >= 2 ? "block" : "none" }} />
        <div className="substrate__third" style={{ display: clickCounter >= 3 ? "block" : "none" }} />
      </div>
    );
  }
}

function mapStateToProps({ app }) {
  return {
    cardDetail: app.cardDetail,
    clickCounter: app.clickCounter
  };
}

export default connect(
  mapStateToProps,
  { ...appActions }
)(DetailedInfo);
