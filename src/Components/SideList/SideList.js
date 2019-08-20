import React, { Component } from "react";
import "./SideList.scss";
import { Input, Image, Header } from "semantic-ui-react";

//Redux
import { connect } from "react-redux";
import * as appActions from "../../Store/app/app.actions";

class SideList extends Component {
  state = {
    allPersonsList: this.props.allPersonsList
  };

  render() {
    return (
      <>
        <div className="search__container">
          <Input className="search-input" icon="users" iconPosition="left" placeholder="Search users..." />
        </div>
        <div className="side-list__container">
          {this.state.allPersonsList.map((item, i) => {
            return (
              <>
                <div key={item.general.firstName} className="card-container">
                  <div className="avatar-container">
                    <Image avatar floated="left" src={item.general.avatar} size="mini" />
                  </div>
                  <div className="info-container">
                    <Header as="h3">
                      {item.general.firstName} {item.general.lastName}
                    </Header>
                    <Header color="grey" as="h5">
                      {item.job.title}
                    </Header>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

function mapStateToProps({ app }) {
  return {
    allPersonsList: app.allPersonsList
  };
}

export default connect(
  mapStateToProps,
  { ...appActions }
)(SideList);
