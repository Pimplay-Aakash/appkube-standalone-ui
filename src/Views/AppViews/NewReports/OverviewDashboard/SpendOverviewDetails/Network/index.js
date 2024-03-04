import React, { Component } from "react";
import TimeSpendComponent from "../../../Components/TimeSpendComponent";
import SpendingTable from "Views/AppViews/NewReports/OverviewDashboard/SpendOverviewDetails/Components/SpendingTable";
import { navigateRouter } from "Utils/Navigate/navigateRouter";

let timeSpendData = [
  {
    name: "Total EC2 Instances",
    value: "200",
    percentage: "5",
    subName: " vs Last Month",
  },
  {
    name: "Running Instances",
    value: "$70,000",
    percentage: "5",
    subName: " vs Last Month",
  },
  {
    name: "Stopped Instances",
    value: "$90,000",
    percentage: "5",
    subName: " vs Last Month",
  },
  {
    name: "Terminated Instances",
    value: "$90,000",
    percentage: "5",
    subName: " vs Last Month",
  },
];
let computeSpendingTable = [
  {
    tags: "dev-prod",
    InstanceID: "i-0c1234dc",
    type: "t2.2xlarge	",
    status: "Running",
    priceModel: "on Demand",
    availabilityZone: "us-east-1a",
    onDemandCostHr: "$0.0015",
    RICostHr: "Unavailable",
    usageHrs: "720hrs",
    addOns: "NA",
    totalSpend: "$120",
  },
  {
    tags: "dev-prod",
    InstanceID: "i-0c1234dc",
    type: "t2.2xlarge	",
    status: "Running",
    priceModel: "on Demand",
    availabilityZone: "us-east-1a",
    onDemandCostHr: "$0.0015",
    RICostHr: "Unavailable",
    usageHrs: "720hrs",
    addOns: "NA",
    totalSpend: "$120",
  },
  {
    tags: "dev-prod",
    InstanceID: "i-0c1234dc",
    type: "t2.2xlarge	",
    status: "Running",
    priceModel: "on Demand",
    availabilityZone: "us-east-1a",
    onDemandCostHr: "$0.0015",
    RICostHr: "Unavailable",
    usageHrs: "720hrs",
    addOns: "NA",
    totalSpend: "$120",
  },
  {
    tags: "dev-prod",
    InstanceID: "i-0c1234dc",
    type: "t2.2xlarge	",
    status: "Running",
    priceModel: "on Demand",
    availabilityZone: "us-east-1a",
    onDemandCostHr: "$0.0015",
    RICostHr: "Unavailable",
    usageHrs: "720hrs",
    addOns: "NA",
    totalSpend: "$120",
  },
  {
    tags: "dev-prod",
    InstanceID: "i-0c1234dc",
    type: "t2.2xlarge	",
    status: "Running",
    priceModel: "on Demand",
    availabilityZone: "us-east-1a",
    onDemandCostHr: "$0.0015",
    RICostHr: "Unavailable",
    usageHrs: "720hrs",
    addOns: "NA",
    totalSpend: "$120",
  },
  {
    tags: "dev-prod",
    InstanceID: "i-0c1234dc",
    type: "t2.2xlarge	",
    status: "Running",
    priceModel: "on Demand",
    availabilityZone: "us-east-1a",
    onDemandCostHr: "$0.0015",
    RICostHr: "Unavailable",
    usageHrs: "720hrs",
    addOns: "NA",
    totalSpend: "$120",
  },
  {
    tags: "dev-prod",
    InstanceID: "i-0c1234dc",
    type: "t2.2xlarge	",
    status: "Running",
    priceModel: "on Demand",
    availabilityZone: "us-east-1a",
    onDemandCostHr: "$0.0015",
    RICostHr: "Unavailable",
    usageHrs: "720hrs",
    addOns: "NA",
    totalSpend: "$120",
  },
  {
    tags: "dev-prod",
    InstanceID: "i-0c1234dc",
    type: "t2.2xlarge	",
    status: "Running",
    priceModel: "on Demand",
    availabilityZone: "us-east-1a",
    onDemandCostHr: "$0.0015",
    RICostHr: "Unavailable",
    usageHrs: "720hrs",
    addOns: "NA",
    totalSpend: "$120",
  },
  {
    tags: "dev-prod",
    InstanceID: "i-0c1234dc",
    type: "t2.2xlarge	",
    status: "Running",
    priceModel: "on Demand",
    availabilityZone: "us-east-1a",
    onDemandCostHr: "$0.0015",
    RICostHr: "Unavailable",
    usageHrs: "720hrs",
    addOns: "NA",
    totalSpend: "$120",
  },
  {
    tags: "dev-prod",
    InstanceID: "i-0c1234dc",
    type: "t2.2xlarge	",
    status: "Running",
    priceModel: "on Demand",
    availabilityZone: "us-east-1a",
    onDemandCostHr: "$0.0015",
    RICostHr: "Unavailable",
    usageHrs: "720hrs",
    addOns: "NA",
    totalSpend: "$120",
  },
  {
    tags: "dev-prod",
    InstanceID: "i-0c1234dc",
    type: "t2.2xlarge	",
    status: "Running",
    priceModel: "on Demand",
    availabilityZone: "us-east-1a",
    onDemandCostHr: "$0.0015",
    RICostHr: "Unavailable",
    usageHrs: "720hrs",
    addOns: "NA",
    totalSpend: "$120",
  },
  {
    tags: "dev-prod",
    InstanceID: "i-0c1234dc",
    type: "t2.2xlarge	",
    status: "Running",
    priceModel: "on Demand",
    availabilityZone: "us-east-1a",
    onDemandCostHr: "$0.0015",
    RICostHr: "Unavailable",
    usageHrs: "720hrs",
    addOns: "NA",
    totalSpend: "$120",
  },
  {
    tags: "dev-prod",
    InstanceID: "i-0c1234dc",
    type: "t2.2xlarge	",
    status: "Running",
    priceModel: "on Demand",
    availabilityZone: "us-east-1a",
    onDemandCostHr: "$0.0015",
    RICostHr: "Unavailable",
    usageHrs: "720hrs",
    addOns: "NA",
    totalSpend: "$120",
  },
  {
    tags: "dev-prod",
    InstanceID: "i-0c1234dc",
    type: "t2.2xlarge	",
    status: "Running",
    priceModel: "on Demand",
    availabilityZone: "us-east-1a",
    onDemandCostHr: "$0.0015",
    RICostHr: "Unavailable",
    usageHrs: "720hrs",
    addOns: "NA",
    totalSpend: "$120",
  },
  {
    tags: "dev-prod",
    InstanceID: "i-0c1234dc",
    type: "t2.2xlarge	",
    status: "Running",
    priceModel: "on Demand",
    availabilityZone: "us-east-1a",
    onDemandCostHr: "$0.0015",
    RICostHr: "Unavailable",
    usageHrs: "720hrs",
    addOns: "NA",
    totalSpend: "$120",
  },
];

class Network extends Component {
  /** Get url details. */
  getUrlDetails() {
    const name = this.props.params.name;
    return { name };
  }
  render() {
    const { name } = this.getUrlDetails();
    return (
      <>
        {" "}
        <TimeSpendComponent data={timeSpendData} />
        <h3 className="m-t-3">{name} SPENDINGS</h3>
        <h4>Cost consumption of {name}</h4>
        <SpendingTable data={computeSpendingTable} />
      </>
    );
  }
}
export default navigateRouter(Network);

