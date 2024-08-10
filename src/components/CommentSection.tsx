import Comment from './Comment';

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection = ({ comments }: CommentSectionProps) => {
  return (
    <div className="mt-6 w-full">
      <h2 className="text-xl font-semibold mb-2">Comments</h2>
      <hr className="border-gray-700 mb-4" />
      {comments.map((comment) => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  );
};

export default CommentSection;
