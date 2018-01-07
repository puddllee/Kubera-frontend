import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from 'react-vis';
import colors from 'shared/colors';

export default class PriceChart extends React.Component {
  coinDataToXYCoords(data){
    return data.map((d) => {
      return {x: d.time, y: d.close}
    });
  }

  formatUTS(uts){
    return moment(uts*1000).format('DD/MM/YY');
  }


  render() {
    const {width, height, coins} = this.props;
    const XYP = styled(XYPlot)`margin: auto;`;
    return (
      <XYP
        margin={{left: 100, right: 100, bottom: 100}}
        style={{margin: 'auto'}}
        width={width}
        height={height}
      >
        <HorizontalGridLines style={{stroke: colors.lightSilver}}/>
        <VerticalGridLines style={{stroke: colors.lightSilver}}/>
        <XAxis title="3 Days"
               style={{
                line: {stroke: colors.silver},
                ticks: {stroke: colors.silver},
                text: {stroke: 'none', fill: colors.navy, fontWeight: 600}
              }}
               tickLabelAngle={-90}
               tickFormat={this.formatUTS.bind(this)}
        />
        <YAxis title="$USD"/>
        {Object.keys(coins).map((c, idx) => (
          <LineSeries key={idx}
                      data={this.coinDataToXYCoords.bind(this)(coins[c])}
                      style={{
                        strokeLinejoin: 'round',
                        strokeWidth: 4
                      }}
          />
        ))}
      </XYP>
    )
  }
}
