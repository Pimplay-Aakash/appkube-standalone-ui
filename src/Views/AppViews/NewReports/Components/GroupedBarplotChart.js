import React, { Component } from "react";
import * as d3 from "d3";
import { Box } from "@mui/material";

let margin = { top: 0, right: 0, bottom: 0, left: 0 },
  width = 1200 - margin.left - margin.right,
  height = 300 - margin.top - margin.bottom;

class GroupedBarplotChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.ref = React.createRef();
  }

  componentDidMount = () => {
    if (Array.isArray(this.props.data) && this.props.data.length > 0) {
      this.renderChart();
    }
  };
  
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.data !== this.props.data &&
      Array.isArray(this.props.data) &&
      this.props.data.length > 0
    ) {
      d3.select(this.ref.current).selectAll("*").remove();
      this.renderChart();
    }
  }

  randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + n.slice(0, 6);
  };

  renderChart = () => {
    let { data } = this.props;

    const restKey = Object.keys(data[0]).filter((e) => e !== "name");

    const margin = { top: 20, right: 0, bottom: 20, left: 60 };
    const width = this.ref.current.parentElement.clientWidth; // Dynamically get parent container width
    const height = 300;
    const barPadding = 0.5;
    const axisTicks = { qty: 5, outerSize: 0, dateFormat: "%m-%d" };

    const svg = d3
      .select(this.ref.current)
      .append("svg")
      .attr("width", "100%")
      .attr("height", height + margin.top + margin.bottom)
      .attr("viewBox", `0 0 ${width} ${height + margin.top + margin.bottom}`)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var xScale0 = d3
      .scaleBand()
      .range([0, width - margin.left - margin.right])
      .padding(barPadding);
    var xScale1 = d3.scaleBand();
    var yScale = d3
      .scaleLinear()
      .range([height - margin.top - margin.bottom, 0]);

    var xAxis = d3.axisBottom(xScale0).tickSizeOuter(axisTicks.outerSize);
    var yAxis = d3
      .axisLeft(yScale)
      .ticks(axisTicks.qty)
      .tickSizeOuter(axisTicks.outerSize);

    xScale0.domain(data.map((d) => d.name));
    xScale1.domain(restKey).range([0, xScale0.bandwidth()]);
    yScale.domain([
      0,
      d3.max(data, (d) => {
        return Math.max(...restKey.map((e) => d[e]));
      }),
    ]);

    var name = svg
      .selectAll(".name")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "name")
      .attr("transform", (d) => {
        return `translate(${xScale0(d.name)},0)`;
      });

    /* Add all bars from key */
    restKey.forEach((barItem, index) => {
      name
        .selectAll(`.bar.${barItem}`)
        .data((d) => [d])
        .enter()
        .append("rect")
        .attr("class", `bar ${barItem}`)
        .style(
          "fill",
          ["#8676FF", "#FF2D2E", ...this.randomHexColorCode()][index]
        )
        .attr("x", (d) => xScale1(barItem) + 4)
        .attr("y", (d) => {
          return yScale(d[barItem]);
        })
        .attr("width", xScale1.bandwidth())
        .attr("rx", 3)
        .attr("ry", 3)
        .attr("height", (d) => {
          return height - margin.top - margin.bottom - yScale(d[barItem]);
        });
    });

    // Add the X Axis
    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
      .call(xAxis);

    // Add the Y Axis
    svg.append("g").attr("class", "y axis").call(yAxis);
  };

  render() {
    return (
      <Box className="grouped-barplot-chart">
        <svg
          ref={this.ref}
          viewBox={`0 0 ${width} ${
            height + margin.top + margin.bottom + margin.right + 0
          }`}
        />
      </Box>
    );
  }
}

export default GroupedBarplotChart;
