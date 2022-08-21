import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const ChartPlaceHold = (obj) => {

    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={obj}
          margin={{
            top: 5,
            right: 5,
            left: 0,
            bottom: 5,
          }}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip /> 
          <Legend />
          <Line
            type="monotone"
            dataKey="followers"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="following" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
}

export default ChartPlaceHold

