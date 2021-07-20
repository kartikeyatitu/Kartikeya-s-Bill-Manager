import React from 'react'
// import { Redirect } from 'react-router-dom'
// import { AppContext } from '../../context'
import Header from '../../Components/Header'
import BillChart from '../../Components/BillChart'
import BillList from '../../Components/BillList'
import BillCards from '../../Components/BillCards'
import AddBiller from '../../Components/AddBiller'
import MonthlyCycle from '../../Components/MonthlyCycle/Monthlycycle'
import './shell.css'

const AppShell = () => {

  let template = (
    <div className="app-shell">
        <Header />
        <div className="dashboard">
          <AddBiller />
          <BillCards />
          <BillList />
          <MonthlyCycle />
        </div>
    </div>
  )

  return (
      <>
        {template}
      </>
  )
}

export default AppShell