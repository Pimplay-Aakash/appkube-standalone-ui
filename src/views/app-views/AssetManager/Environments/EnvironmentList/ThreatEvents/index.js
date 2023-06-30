import React, { Component } from "react";
import { Box, Grid, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, List, ListItem } from "@mui/material";
import CommonFilterViewSearch from "views/app-views/AssetManager/Environments/EnvironmentList/CommonFilterViewSearch";

class ThreatEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSelectFilter: false,
      showServiceViewFilter: false,
      showRecentFilter: false,
    };
  }

  toggleColumnSelect = (drdName) => {
    let current = this.state[drdName];
    this.setState({
      [drdName]: !current,
    });
  };

  setLocalRecentService = (account) => {
    let recentEnv = JSON.parse(localStorage.getItem("recentEnv"));
    recentEnv.map((item, index) => {
      if (item.accountId === account.accountId) {
        arrayMove(recentEnv, index, 0);
      }
    });

    function arrayMove(arr, fromIndex, toIndex) {
      var element = arr[fromIndex];
      arr.splice(fromIndex, 1);
      arr.splice(toIndex, 0, element);
      localStorage.setItem("recentEnv", JSON.stringify(arr));
    }
  };
  
  filterVpcsData = (search)=>{}
  
  render() {
    return (
      <div className="discovered-assets">
        <Box className="discovered-assets-head">
          <CommonFilterViewSearch
            data={{ vpcsDetails: this.state.vpcsDetails }}
            handleSearch={(string) => {
              this.filterVpcsData(string);
            }}
            updateAccountId={(accountId) => {
              this.setState({ accountId });
              this.props.updateCloudName(
                new URLSearchParams(document.location.search).get("cloudName"), accountId
              );
            }}
            accountList={this.props.accountList}
          />
        </Box>
        <Box className="environment-table-section">
          <TableContainer className="table">
            <Table className="overview">
              <TableHead>
                <TableRow>
                  <TableCell align="left">
                    <i className="m-r-1 fas fa-sort-down"></i>
                    <strong>Severity</strong>
                  </TableCell>
                  <TableCell align="center">Created Time</TableCell>
                  <TableCell align="center">Sources</TableCell>
                  <TableCell align="center">Title</TableCell>
                  <TableCell align="center">Assignee</TableCell>
                  <TableCell align="center">Category</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center" colSpan={6}></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    );
  }
}

export default ThreatEvents;
