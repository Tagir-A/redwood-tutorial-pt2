import { Link, routes } from '@redwoodjs/router'

import CommentsCell from 'src/components/CommentsCell'

import CommentForm from '../CommentForm/CommentForm'

const Article = ({ article, variant = 'full' }) => {
  switch (variant) {
    case 'full':
      return (
        <article>
          <header>
            <h2 className="text-xl text-blue-700 font-semibold">
              <Link to={routes.article({ id: article.id })}>
                {article.title}
              </Link>
            </h2>
          </header>
          <div className="mt-2 text-gray-900 font-light">{article.body}</div>
          <div className="mt-12" />
          <CommentForm article={article} />
          <div className="mt-12" />
          <CommentsCell articleId={article.id} />
        </article>
      )
    case 'summary':
      return (
        <article>
          <header>
            <h2 className="text-xl text-blue-700 font-semibold">
              <Link to={routes.article({ id: article.id })}>
                {article.title}
              </Link>
            </h2>
          </header>
          <div className="mt-2 text-gray-900 font-light truncate">
            {article.body}
          </div>
          <div className="mt-12" />
        </article>
      )

    default:
      throw new Error('should not be reached')
  }
}

export default Article
