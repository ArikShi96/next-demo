import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { Table } from "antd";

export default function query(props) {
  const router = useRouter();
  const [data, setData] = useState([]);

  const asyncQueryData = async function (name) {
    const res = await fetch(`/api/query?name=${name}`);
    const json = await res.json();
    setData(json);
  };

  useEffect(() => {
    const { name } = router.query;
    if (name) {
      asyncQueryData(name);
    }
  }, [router.query]);

  const columns = useMemo(() => {
    if (data.length) {
      const columns = Object.keys(data[0]).map((key) => {
        return {
          title: key,
          dataIndex: key,
          key,
          // fixed: key === "id",
        };
      });
      return columns;
    }
    return [];
  }, [data]);

  return <Table dataSource={data} columns={columns} scroll={{ x: 1500 }} />;
}
