// pages/StockMarket/Intraday.tsx
import { useEffect, useState } from "react";

const Intraday: React.FC = () => {
  const [data, setData] = useState<[string, any][]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=U0QUU86I3A6WEUSN"
      );
      const result = await response.json();
      setData(Object.entries(result["Time Series (5min)"])); // Convert data to array of [timestamp, value]
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Intraday Stock Data (Default)</h1>
      <ul>
        {data.map(([timestamp, values]) => (
          <li key={timestamp}>
            {timestamp}: Open - {values["1. open"]}, Close -{" "}
            {values["4. close"]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Intraday;
