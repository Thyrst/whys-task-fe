const fetchArticle = async (): Promise<Article> => {
  await new Promise((resolve) =>
    setTimeout(resolve, 1000 + Math.random() * 1000)
  );
  return document.__article;
};

export default fetchArticle;
