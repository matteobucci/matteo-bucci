// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Statistics = () => {
  return (
    <div>
      <div class="card">
        <div class="stat-title">Skiing done so far</div>
        <div class="stat-value">453km</div>
      </div>
      <div class="card">
        <div class="stat-title">Total running so far</div>
        <div class="stat-value">1534km</div>
      </div>
      <div class="card">
        <div class="stat-title">Motorbike trips so far</div>
        <div class="stat-value">26023km</div>
      </div>
    </div>
  );
}

Statistics.Layout = Layout;

export const Head = () => <Seo title="Projects" />

export default Statistics


