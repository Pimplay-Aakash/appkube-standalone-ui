import React, { Component } from "react";
import { Box, Button, List, ListItem, IconButton } from "@mui/material";
import Compute from "./Compute";
import Storage from "./Storage";
import Database from "./Database";
import Network from "./Network";
import Other from "./Other";
import { Link } from "react-router-dom";
import { navigateRouter } from "Utils/Navigate/navigateRouter";
import { GRANULARITY_TYPE } from "CommonData";

class SpendOverviewDetails extends Component {
  tabMapping = [
    {
      name: "Compute",
      dataKey: "compute",
      index: 0,
    },
    {
      name: "Storage",
      dataKey: "storage",
      index: 1,
    },
    {
      name: "Database",
      dataKey: "database",
      index: 2,
    },
    {
      name: "Network",
      dataKey: "network",
      index: 3,
    },
    {
      name: "Other",
      dataKey: "other",
      index: 4,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      selectedGranularity: GRANULARITY_TYPE.QUARTERLY.toLowerCase(),
    };
  }
  setActiveTab = (activeTab) => {
    this.setState({ activeTab });
  };
  // Render tabs
  renderTabMenu = () => {
    const { activeTab } = this.state;
    return (
      <List className="tabs-menu">
        {this.tabMapping.map((tabData, index) => {
          return (
            <ListItem
              key={`ops-tab-${index}`}
              className={index === activeTab ? "active" : ""}
              onClick={() => this.setActiveTab(index)}
            >
              {tabData.name}
            </ListItem>
          );
        })}
      </List>
    );
  };

  // Render active tab component
  renderActiveTabOfComponent = () => {
    const { activeTab,selectedGranularity } = this.state;
    return (
      <Box className="tabs-content">
        {activeTab === 0 ? (
          <Compute selectedGranularity={selectedGranularity} />
        ) : activeTab === 1 ? (
          <Storage selectedGranularity={selectedGranularity} />
        ) : activeTab === 2 ? (
          <Database selectedGranularity={selectedGranularity} />
        ) : activeTab === 3 ? (
          <Network selectedGranularity={selectedGranularity} />
        ) : activeTab === 4 ? (
          <Other selectedGranularity={selectedGranularity} />
        ) : (
          <></>
        )}
      </Box>
    );
  };

  /** Get url details. */
  getUrlDetails = () => {
    const name = this.props.params.name;
    return { name };
  };
  render() {
    let { name } = this.getUrlDetails();

    return (
      <Box className="new-reports-container spend-overview-container">
        <Box className="list-heading">
          <h3> {name} Spending</h3>
          <Box className="breadcrumbs">
            <ul>
              <li
                onClick={() =>
                  this.props.navigate("/app/new-reports/over-view-dashboard")
                }
              >
                Overview Dashboard
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li
                onClick={() =>
                  this.props.navigate(
                    "/app/new-reports/over-view-dashboard/spend-overview"
                  )
                }
              >
                Spend Overview
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li className="active">Spend Overview Details</li>
            </ul>
          </Box>
        </Box>
        <Box className="reports-tab-section">
          <Box className="tabs">
            {this.renderTabMenu()}
            <Box className="d-flex ">
              <Button className="light-btn p-l-15 p-r-15 m-r-3">
                <i className="fas fa-filter m-r-2"></i> Filter
              </Button>
              <Box className="fliter-button">
                <Button className="light-btn p-l-15 p-r-15">
                  <i className="fas fa-calendar-minus m-r-2"></i> Last Quarter
                </Button>
              </Box>
            </Box>
          </Box>
          {this.renderActiveTabOfComponent()}
        </Box>
      </Box>
    );
  }
}

export default navigateRouter(SpendOverviewDetails);
