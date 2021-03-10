import * as React from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

type Props = {
  article: IArticle;
  removeArticle: (article: IArticle) => void;
};

export const Article: React.FC<Props> = ({ article, removeArticle }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch: Dispatch<any> = useDispatch();

  const deleteArticle = React.useCallback(
    (art: IArticle) => dispatch(removeArticle(art)),
    [dispatch, removeArticle]
  );

  return (
    <div className="Article">
      <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </div>
      <button type="button" onClick={() => deleteArticle(article)}>
        Delete
      </button>
    </div>
  );
};
