import React, { Component } from "react";
import "./SideList.scss";
import { Input, Image, Header } from "semantic-ui-react";

//Redux
import { connect } from "react-redux";
import * as appActions from "../../Store/app/app.actions";

class SideList extends Component {
  state = {
    allPersonsList: this.props.allPersonsList,
    clickCounter: 0
  };

  findPerson = name => {
    const person = this.state.allPersonsList.find(item => item.general.firstName === name);
    const indexPerson = this.state.allPersonsList.findIndex(item => item.general.firstName === name);
    const clickCounter = this.state.clickCounter + 1;
    this.setState({
      clickCounter: clickCounter
    });
    this.props.successSetCardDetail(person);
    this.props.successSetCardIndex(indexPerson);
    this.props.successSetClickCounter(this.state.clickCounter);
  };

  searchViaInput = event => {
    const value = event.target.value.toLowerCase().toString();
    const newArray = this.props.allPersonsList;
    const result = this.filterByAll(newArray, value);
    if (result.length !== 0) {
      const currentUserWithActivePos = result[0];
      this.props.successSetCardIndex(0);
      this.props.successSetCardDetail(currentUserWithActivePos);
    } else {
      this.props.successSetCardIndex(0);
      this.props.successSetCardDetail(result);
    }

    this.setState({
      allPersonsList: result
    });
  };

  filterByAll(arr, searchKey) {
    return arr.filter(o => {
      try {
        return JSON.stringify(o)
          .toLowerCase()
          .includes(searchKey.toString());
      } catch (err) {
        return false;
      }
    });
  }

  render() {
    return (
      <>
        <div className="search__container">
          <Input
            className="search-input"
            icon="users"
            iconPosition="left"
            placeholder="Search users..."
            defaultValue=""
            onChange={this.searchViaInput}
          />
        </div>
        <div className="side-list__container">
          {this.state.allPersonsList.map((item, i) => {
            return (
              <>
                <div
                  key={item.general.firstName}
                  className={this.props.activePersonPos === i ? "card-container active" : "card-container"}
                  onClick={() => this.findPerson(item.general.firstName)}
                >
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
    allPersonsList: app.allPersonsList,
    cardDetail: app.cardDetail,
    activePersonPos: app.activePersonPos,
    clickCounter: app.clickCounter
  };
}

export default connect(
  mapStateToProps,
  { ...appActions }
)(SideList);
