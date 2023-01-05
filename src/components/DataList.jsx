import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const fetchData = () => {
  console.log("👋 isFetching...");
  return axios.get("/data/dummy.json");
};

const DataList = () => {
  const { isLoading, data } = useQuery(["data"], fetchData, {
    staleTime: 60 * 1000, // 5초 동안 fresh 상태
    refetchOnWindowFocus: false, // 포커스 toggle 시 refetch
    refetchOnMount: false, // 컴포넌트 리랜더링시 refetch
  });

  return (
    <>
      <ul>
        {isLoading
          ? "Loading..."
          : data.data.map((d, i) => <li key={i}>{d.text}</li>)}
      </ul>
    </>
  );
};

export default DataList;
