import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import skiingGif from '../assets/skiing.gif'
import runningGif from "../assets/running.gif";
import motorbikeGif from "../assets/motorbiking.gif";

import sportStats from "../../static/sports_stats.json"

const Statistics = () => {

  // Format values into km
  const formatDistance = (distance) => {
    return (distance).toFixed(2);
  }

  return (
    <div>
      <div class="card stats-card">
        <img class="stats-icon" alt="" src={skiingGif} />
        <div class="stat-title">Skiing done so far</div>
        <div class="stat-value">{formatDistance(sportStats.alpine_skiing.total_distance)} km</div>
      </div>
      <div class="card stats-card">
        <img class="stats-icon" alt="" src={runningGif} />
        <div class="stat-title">Total running so far</div>
        <div class="stat-value">{formatDistance(sportStats.running.total_distance)} km</div>
      </div>
      <div class="card stats-card">
        <img class="stats-icon" alt="" src={motorbikeGif} />
        <div class="stat-title">Cycling so far</div>
        <div class="stat-value">{formatDistance(sportStats.cycling.total_distance)} km</div>
      </div>
    </div>
  );
}

Statistics.Layout = Layout;

export const Head = () => <Seo title="Projects" />

export default Statistics


