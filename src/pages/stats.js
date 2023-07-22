import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import skiingGif from '../assets/skiing.gif'
import runningGif from "../assets/running.gif";
import motorbikeGif from "../assets/motorbiking.gif";

const Statistics = () => {
  return (
    <div>
      <div class="card stats-card">
        <img class="stats-icon" alt="" src={skiingGif} />
        <div class="stat-title">Skiing done so far</div>
        <div class="stat-value">453km</div>
      </div>
      <div class="card stats-card">
        <img class="stats-icon" alt="" src={runningGif} />
        <div class="stat-title">Total running so far</div>
        <div class="stat-value">1534km</div>
      </div>
      <div class="card stats-card">
        <img class="stats-icon" alt="" src={motorbikeGif} />
        <div class="stat-title">Motorbike trips so far</div>
        <div class="stat-value">26023km</div>
      </div>
    </div>
  );
}

Statistics.Layout = Layout;

export const Head = () => <Seo title="Projects" />

export default Statistics


