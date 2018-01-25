import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import {
  FlexibleWidthXYPlot,
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
    coin.data = coin.data ? coin.data : [];
    return coin.data.map((d) => {
      return {x: d.ts, y: d.price}
    });
  }

  formatUTS(uts){
    return moment(uts*1000).format('DD/MM/YY');
  }


  render() {
    const {height, coins, loading} = this.props;
    const XYP = styled(FlexibleWidthXYPlot)`margin: auto;`;

    if (loading){
      return 'Loading Coin History';
    }

    const legendEntries = coins.map((c)=>({title: c.symbol}));

    return (
      <XYP
        margin={{left: 50, right: 10, bottom: 100}}
        height={height}
      >
        <HorizontalGridLines style={{stroke: colors.lightSilver}}/>
        <VerticalGridLines style={{stroke: colors.lightSilver}}/>
        <XAxis title="30 Days"
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
                        strokeWidth: 1
                      }}
          />
        ))}
      </XYP>
    )
  }
}
