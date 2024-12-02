import React from "react";

function Dashboard() {
  return (
    <>
      {/* Recent Transactions and News */}
      <div className="grid grid-cols-3 gap-6 mt-6 bg-[#f3f3ff]">
        <div className="bg-[white] p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
          {/* Transactions Placeholder */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Stoneblack</span>
              <span className="text-green-500">+1.20 ETH</span>
            </div>
            <div className="flex justify-between">
              <span>WorldCoin</span>
              <span className="text-green-500">+5.20 LTC</span>
            </div>
            <div className="flex justify-between">
              <span>CloudC</span>
              <span className="text-green-500">+0.80 BTC</span>
            </div>
          </div>
        </div>
        <div className="bg-[white] p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">AI Recommendations</h2>
          {/* Recommendations Placeholder */}
          <p>
            Follow news and market analysis to understand what events may affect
            asset prices.
          </p>
        </div>
        <div className="bg-[white] p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">News</h2>
          {/* News Placeholder */}
          <p>What will happen to bitcoin in the coming week.</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
