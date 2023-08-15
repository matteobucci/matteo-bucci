import * as React from 'react'
import Layout from './layout'
import Seo from './seo'
import skiingGif from '../assets/skiing.gif'
import runningGif from "../assets/running.gif";
import motorbikeGif from "../assets/motorbiking.gif";
import swimmingGif from "../assets/swimming.gif";

import sportStats from "../../static/sports_stats.json"

const StatsCard = ({ icon, title, sport }) => {
  // Format values into km
  const formatDistance = (distance) => {
    return (distance).toFixed(2);
  }

  return (
    <div className='stats-card'>
      <div className='stat-title-container'>
        <img className='stat-icon' alt='' src={icon} />
        <div className='stat-title'>{title}</div>
      </div>
      <div className='stat-metric-container'>
        <div>
        <div className='stat-value'>{formatDistance(sport.value)} km</div>
        <div className='stat-label'>Total distance</div>
      </div>
      <div>
        <div className='stat-value'>{sport.count}</div>
        <div className='stat-label'>Sessions</div>
      </div>
      </div>
      
    </div>
  );
}

export const Statistics = () => {
  return (
    <div className='stats-grid'>
      <StatsCard icon={runningGif} title='Running' sport={exportStat(sportStats.running)} />
      <StatsCard icon={skiingGif} title='Skiing' sport={exportStat(sportStats.alpine_skiing)} />
      <StatsCard icon={motorbikeGif} title='Cycling' sport={exportStat(sportStats.cycling)} />
      <StatsCard icon={swimmingGif} title='Swimming' sport={exportStat(sportStats.swimming)} />
    </div>
  );
}

function exportStat(sportStat) {
  return {
    value: sportStat.total_distance,
    count: sportStat.total_activities
  }
}

Statistics.Layout = Layout;

export const Head = () => <Seo title="Projects" />

export default Statistics


