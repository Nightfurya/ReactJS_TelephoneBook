import React, { Component } from "react";
import "./DetailedInfo.scss";
import { Card, Icon, Image, Accordion } from "semantic-ui-react";

//Redux
import { connect } from "react-redux";
import * as appActions from "../../Store/app/app.actions";

class DetailedInfo extends Component {
  render() {
    const { cardDetail, clickCounter } = this.props;

    if (cardDetail.length !== 0) {
      const level1Panels = [
        { key: "panel-1a", title: "Name", content: cardDetail.general.firstName },
        { key: "panel-ba", title: "Surname", content: cardDetail.general.lastName }
      ];
      const level2Panels = [
        { key: "panel-2a", title: "Company", content: cardDetail.job.company },
        { key: "panel-2b", title: "Title", content: cardDetail.job.title }
      ];
      const level3Panels = [
        { key: "panel-1a", title: "E-mail", content: cardDetail.contact.email },
        { key: "panel-ba", title: "phone", content: cardDetail.contact.phone }
      ];
      const level4Panels = [
        { key: "panel-2a", title: "Country", content: cardDetail.address.country },
        { key: "panel-2b", title: "City", content: cardDetail.address.city },
        { key: "panel-2c", title: "Street", content: cardDetail.address.street },
        { key: "panel-2d", title: "zipCode", content: cardDetail.address.zipCode }
      ];
      const Level1Content = (
        <div>
          Personal information
          <Accordion.Accordion panels={level1Panels} />
        </div>
      );
      const Level2Content = (
        <div>
          Job
          <Accordion.Accordion panels={level2Panels} />
        </div>
      );
      const Level3Content = (
        <div>
          Contacts
          <Accordion.Accordion panels={level3Panels} />
        </div>
      );
      const Level4Content = (
        <div>
          Address
          <Accordion.Accordion panels={level4Panels} />
        </div>
      );
      const rootPanels = [
        { key: "panel-1", title: "Main", content: { content: Level1Content } },
        { key: "panel-2", title: "Job", content: { content: Level2Content } },
        { key: "panel-3", title: "Contact information", content: { content: Level3Content } },
        { key: "panel-4", title: "Location", content: { content: Level4Content } }
      ];
      return (
        <div className="detailed-info-card">
          <div className="substrate__main">
            <Card className="card__height">
              <Image src={cardDetail.general.avatar} wrapped ui={false} />
              <Card.Content>
                <Card.Header>
                  {cardDetail.general.firstName} {cardDetail.general.lastName}
                </Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2019.</span>
                </Card.Meta>
                <Card.Description>
                  {cardDetail.general.firstName} is a {cardDetail.job.title} living in {cardDetail.address.city}.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <p>
                  <Icon name="user" />
                  {cardDetail.address.zipCode.slice(0, 3)} Friends
                </p>
              </Card.Content>
            </Card>
            <div>
              <Accordion defaultActiveIndex={0} panels={rootPanels} styled style={{ width: "300px" }} />
            </div>
          </div>
          <div className="substrate__first" style={{ display: clickCounter >= 1 ? "block" : "none" }} />
          <div className="substrate__second" style={{ display: clickCounter >= 2 ? "block" : "none" }} />
          <div className="substrate__third" style={{ display: clickCounter >= 3 ? "block" : "none" }} />
        </div>
      );
    } else {
      return (
        <div className="detailed-info-card">
          <div className="substrate__main">Nothing found for your request! Try again!</div>
        </div>
      );
    }
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
