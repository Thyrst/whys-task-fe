import fetchArticle from './api/fetchArticle';
import fetchComments from './api/fetchComments';
import Article from './components/Article';
import Button from './components/Button';
import CommentSection from './components/CommentSection';
import LoadingSpinner from './components/LoadingSpinner';
import { useCallback, useEffect, useState } from 'react';

const filterUniqueComments = (
  commentsA: Comment[],
  commentsB: Comment[]
): Comment[] => {
  const seenIds = new Set<number>();
  const uniqueComments: Comment[] = [];

  [...commentsA, ...commentsB].forEach((comment) => {
    if (!seenIds.has(comment.id)) {
      seenIds.add(comment.id);
      uniqueComments.push(comment);
    }
  });

  return uniqueComments;
};

const sortCommentsByDate = (comments: Comment[]): Comment[] => {
  return comments.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

function App() {
  const [error, setError] = useState<string | null>(null);
  const [article, setArticle] = useState<Article | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentsLoaded, setCommentsLoaded] = useState(false);
  const [loadingMoreComments, setLoadingMoreComments] = useState(false);

  useEffect(() => {
    fetchArticle()
      .then(setArticle)
      .catch((error) => setError(error.message));

    fetchComments().then((response) => {
      const sortedComments = sortCommentsByDate(response.comments);
      setComments(sortedComments);
      setCommentsLoaded(true);
    });
  }, []);

  const handleMoreCommentsClick = useCallback(() => {
    if (loadingMoreComments) {
      return;
    }
    setLoadingMoreComments(true);
    fetchComments({ fetchMore: true })
      .then((response) => {
        setComments((prevComments) => {
          const comments = filterUniqueComments(
            prevComments,
            response.comments
          );
          const sortedComments = sortCommentsByDate(comments);
          return sortedComments;
        });
      })
      .finally(() => {
        setLoadingMoreComments(false);
      });
  }, []);

  return (
    <main className="max-w-2xl p-10 align-center mx-auto">
      {error ? (
        <div className="text-red-600">{error}</div>
      ) : article ? (
        <>
          <Article data={article} />
          {commentsLoaded ? (
            <>
              <CommentSection comments={comments} />
              <Button
                className="w-48"
                loading={loadingMoreComments}
                onClick={handleMoreCommentsClick}
              >
                Load More Comments
              </Button>
            </>
          ) : (
            <div className="mt-6">
              <LoadingSpinner />
            </div>
          )}
        </>
      ) : (
        <LoadingSpinner />
      )}
    </main>
  );
}

export default App;
