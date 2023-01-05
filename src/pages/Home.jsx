import { useQueryClient } from "@tanstack/react-query";
import DataList from "../components/DataList";
import styles from "./Home.module.scss";

const Home = () => {
  // 리액트 쿼리 클라이언트 인스턴스 가져오기
  const RQClient = useQueryClient();
  // 리액트 쿼리 refetch 이벤트
  // RQClient.invalidateQueries(쿼리키);
  const onClickReFetch = () => RQClient.invalidateQueries(["data"]);

  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <DataList />
      <DataList />
      <button onClick={onClickReFetch}>refetch</button>
    </div>
  );
};

export default Home;
