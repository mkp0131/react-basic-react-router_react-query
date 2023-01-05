import { useParams } from "react-router-dom";

const NewsId = () => {
  const { newsId } = useParams();

  return <div>✅ newsId: {newsId}</div>;
};

export default NewsId;
