export interface FetchCommentsResponse {
  comments: Comment[];
}

export interface FetchCommentsProps {
  fetchMore?: boolean;
}

const fetchComments = async ({
  fetchMore,
}: FetchCommentsProps = {}): Promise<FetchCommentsResponse> => {
  await new Promise((resolve) =>
    setTimeout(resolve, 1500 + Math.random() * 2000)
  );
  const comments = fetchMore ? document.__moreComments : document.__comments;
  return {
    comments: comments,
  };
};

export default fetchComments;
