import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data01 = [];
const data02 = [{ name: "A1", value: 92 }];

export default class PieChartPlaceHold extends PureComponent {
  render() {
    return (
      <ResponsiveContainer height="100%">
        <PieChart width={100} height={100}>
          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
