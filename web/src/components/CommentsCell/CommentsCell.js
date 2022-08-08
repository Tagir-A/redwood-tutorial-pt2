import Comment from '../Comment/Comment'

export const QUERY = gql`
  query CommentsQuery($articleId: Int!) {
    comments(postId: $articleId) {
      id
      name
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div className="text-center text-gray-500">No comments yet</div>
)

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ comments }) => {
  return (
    <ul className="space-y-8">
      <>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </>
    </ul>
  )
}
