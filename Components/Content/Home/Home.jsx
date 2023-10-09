import React from "react";
import './Home.css'

export default function Home() {

  return (
    <div className="layout">

      <div>
        {/* total spent is a user input */}
        <h2 className="total-expenses">Your Monthly Expenses : $1000</h2>
        <ul className="expenses-details">
          <h3 className="list-header">Last month you spent : </h3>
          {/* list should be generated with user inputs */}
          <li className="list-item">$250 on rent/mortage</li>
          <li className="list-item">$250 on utilities</li>
          <li className="list-item">$250 on subscribtions</li>
          <li className="list-item">$250 on fun</li>
        </ul>
      </div>

      <div>
        graphs
        {/* graphs if I can use them */}
      </div>

    </div>
  )
}