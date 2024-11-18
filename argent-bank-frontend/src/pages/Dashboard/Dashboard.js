import React from 'react'

import DashboardAccount from '../../components/DashboardAccount/DashboardAccount'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'


import '../Dashboard/Dashboard.css'

/**
 * Component React which displays the account's info of the user
 * @component
 */

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Header />
      <DashboardAccount />
      <Footer />
    </div>
  )
}

export default Dashboard