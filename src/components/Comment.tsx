import { formatDateString } from '../utils';

interface CommentProps {
  data: {
    author: string;
    text: string;
    date: string;
  };
}

const Comment = ({ data }: CommentProps) => {
  return (
    <div className="bg-cardBg rounded-lg mb-6 shadow hover:shadow-md transition-shadow duration-300 p-4">
      <h3 className="text-secondaryText text-sm font-medium border-b border-gray-700">
        {data.author}
      </h3>
      <p className="text-baseText mt-2 mb-2">{data.text}</p>
      <p className="text-secondaryText text-xs mt-1">
        {formatDateString(data.date)}
      </p>
    </div>
  );
};

export default Comment;
