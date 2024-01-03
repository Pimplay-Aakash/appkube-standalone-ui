import Box from "@mui/material/Box";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import React, { Component } from "react";
import AccordionView from "../../../Components/AccordionView";
import { connect } from "react-redux";
import status from "Redux/Constants/CommonDS";
import Loader from "Components/Loader";
import {
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#16161E",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#16161E",
    maxWidth: 250,
    fontSize: theme.typography.pxToRem(11),
  },
}));

class Allowed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      pg: 0,
      rpg: 5,
    };
  }
  componentDidMount = () => {
    this.setRowsStateOrReturn();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      this.props.groupDetailsById.status !== prevProps.groupDetailsById.status
    ) {
      if (this.props.groupDetailsById.status === status.SUCCESS) {
        this.setRowsStateOrReturn();
      }
    }
  };

  setRowsStateOrReturn = (isStateSet = 1) => {
    let groupDetails = this.props.groupDetailsById.data || {};
    if (groupDetails.allowedPermissions) {
      if (isStateSet) {
        this.setState({ rows: groupDetails.allowedPermissions });
      } else {
        return groupDetails.allowedPermissions;
      }
    }
  };
  // Render Loder
  renderLoder() {
    return (
      <Box className="d-block text-center w-100 h-100 m-r-auto m-l-auto ">
        <Loader className="align-item-center justify-center w-100 h-100 p-t-20 p-b-20" />
      </Box>
    );
  }

  // Render table container
  renderTableContainer = () => {
    const { status: groupStatus } = this.props.groupDetailsById;

    if (groupStatus === status.IN_PROGRESS) {
      return this.renderLoder();
    } else {
      return (
        <TableContainer component={Paper} className="access-control-table">
          <Table
            sx={{ minWidth: 900 }}
            aria-label="custom pagination table"
            className="table"
          >
            {this.renderTableHead()}
            {this.renderTableBody()}
          </Table>
        </TableContainer>
      );
    }
  };
  // Render header of table
  renderTableHead = () => {
    const { rows, selectedRoles } = this.state;
    return (
      <TableHead>
        <TableRow>
          <TableCell>Permission set</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
    );
  };

  // Render body of table
  renderTableBody = () => {
    const { rows, pg, rpg } = this.state;
    return (
      <TableBody>
        {rows?.length ? (
          rows.slice(pg * rpg, pg * rpg + rpg).map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={12}>
              <Box className="d-blck text-center w-100 h-100 ">
                <Box className="environment-loader  align-item-center justify-center p-t-20 p-b-20 ">
                  <h5 className="m-t-0 m-b-0">There are no data available.</h5>
                </Box>
              </Box>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    );
  };
  handleChangePage = (event, newpage) => {
    this.setState({ pg: newpage });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rpg: parseInt(event.target.value, 10) });
  };
  renderComponentTablePagination = () => {
    const { rows, pg, rpg } = this.state;
    return rows?.length ? (
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rpg}
        page={pg}
        className="access-control-pagination"
        onPageChange={this.handleChangePage}
        onRowsPerPageChange={this.handleChangeRowsPerPage}
      />
    ) : (
      <></>
    );
  };
  render() {
    const { status: groupStatus } = this.props.groupDetailsById;
    return (
      <>
        {/* <Box className="allowed-disallowed-permission-table">
          {groupStatus === status.IN_PROGRESS ? (
            this.renderLoder()
          ) : (
            <>
              {this.renderTableContainer()}{" "}
              {this.renderComponentTablePagination()}
            </>
          )}
          <AccordionView
              data={accessPolicyData}
              headers={[{ name: "Permission set" }, { name: "Status" }]}
            /> 
        </Box> */}
        {this.renderTableContainer()}
        {this.renderComponentTablePagination()}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { groupDetailsById } = state.settings;
  return { groupDetailsById };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Allowed);
