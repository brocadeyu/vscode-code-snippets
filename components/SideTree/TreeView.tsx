"use client";

import { useEffect } from "react";

function List(props: { data: string[]; onClick: (args: string) => void }) {
  return (
    <>
      {props.data.map((_, index) => (
        <div key={index} onClick={() => props.onClick(_)}>
          {_}
        </div>
      ))}
    </>
  );
}

export default function TreeView() {
  // 获取菜单数据
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/sn");
        if (!response.ok) {
          throw new Error("Failed to fetch menu data");
        }
        const data = await response.json();
        console.log("data", data);
        // setMenuData(data.menuItems);
      } catch (err) {
        console.log(err);
        // setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        // setLoading(false);
      }
    };
    fetchMenuData();
  }, []);
  return (
    <div>
      <List
        data={["1"]}
        onClick={(_: string) => {
          console.log(_);
        }}
      />
      <List
        data={["1"]}
        onClick={(_: string) => {
          console.log(_);
        }}
      />
    </div>
  );
}
