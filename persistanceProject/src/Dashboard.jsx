import React, { useEffect } from "react";

import supabase from "./supabase-client.js";
function Dashboard() {
  useEffect(() => {
    async function fetchMetrics() {
      const response = await supabase
        .from("sales_deals")
        .select(
          `
        name,
        value
        `,
        )
        .order("value", { ascending: false })
        .limit(1);

      console.log(response.data);
    }

    fetchMetrics();
  }, []);

  return (
    <div className="dashboard-wrapper">
      <div className="chart-container">
        <h2>Total Sales This Quarter ($)</h2>
      </div>
    </div>
  );
}

export default Dashboard;
