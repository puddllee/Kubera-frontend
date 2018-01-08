import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  DiscreteColorLegend,
} from 'react-vis';
import colors from 'shared/colors';

export default class PriceChart extends React.Component {
  coinDataToXYCoords(coins, idx){
    const coin = coins[idx];
    return coin.data.map((d) => {
      return {x: d.time, y: d.close}
    });
  }

  formatUTS(uts){
    return moment(uts*1000).format('DD/MM/YY');
  }


  render() {
    const {width, height, coins} = this.props;
    const XYP = styled(XYPlot)`margin: auto;`;

    const legendEntries = coins.map((c)=>({title: c.symbol}));
    return (
      <XYP
        margin={{left: 60, right: 60, bottom: 60}}
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
        <DiscreteColorLegend items={legendEntries} orientation={'horizontal'}/>
        {Object.keys(coins).map((c, idx) => (
          <LineSeries key={idx}
                      data={this.coinDataToXYCoords.bind(this)(coins, idx)}
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
