import supabase from "./supabase-client";
import { useEffect, useState } from "react";

function Dashboard() {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    fetchMetrics();
  }, []);

  async function fetchMetrics() {
    try {
      const { data, error } = await supabase.from("sales_deals").select(
        `
          name,
          value.sum()
          `,
      );
      if (error) {
        throw error;
      }
      setMetrics(data);
    } catch (error) {
      console.error("Error fetching metrics:", error);
    }
  }

  return (
    <div className="dashboard-wrapper">
      <div className="chart-container">
        <h2>Total Sales This Quarter ($)</h2>
      </div>
    </div>
  );
}

export default Dashboard;
