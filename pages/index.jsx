import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function index() {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await fetch("/api/tables");
      const data = await res.json();
      setTables(data);
    })();
  }, []);

  return (
    <ul>
      {tables.map((table) => {
        const value = Object.values(table)[0];
        return (
          <li key={value}>
            <Link href={`/query?name=${value}`}>{value}</Link>
          </li>
        );
      })}
    </ul>
  );
}
