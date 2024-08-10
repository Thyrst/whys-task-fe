import { formatDateString } from '../utils';

interface ArticleProps {
  data: Article;
}

const Article = ({ data }: ArticleProps) => {
  return (
    <article className="m-auto bg-cardBg p-6 shadow-lg rounded-lg">
      <h2 className="text-lg font-bold mb-4 text-headline">{data.author}</h2>
      <p className="text-baseText mb-4">{data.text}</p>
      <p className="text-sm text-secondaryText">
        {formatDateString(data.date)}
      </p>
    </article>
  );
};

export default Article;
