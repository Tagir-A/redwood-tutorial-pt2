import {
  Form,
  Label,
  TextField,
  TextAreaField,
  FormError,
  Submit,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

import { QUERY as CommentsQuery } from 'src/components/CommentsCell'

const CREATE = gql`
  mutation CreateCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
      name
      body
      createdAt
    }
  }
`
const CommentForm = ({ article }) => {
  const [createComment, { loading, error }] = useMutation(CREATE, {
    refetchQueries: [{ query: CommentsQuery }],
  })

  const onSubmit = (input) => {
    createComment({ variables: { input: { postId: article.id, ...input } } })
  }
  return (
    <div>
      <h3 className="font-light text-lg text-gray-600">Leave a Comment</h3>
      <Form className="mt-4 w-full" onSubmit={onSubmit}>
        <FormError
          error={error}
          titleClassName="font-semibold"
          wrapperClassName="bg-red-100 text-red-900 text-sm p-3 rounded"
        />
        <Label name="name" className="block text-sm text-gray-600 uppercase">
          Name
        </Label>
        <TextField
          name="name"
          className="block w-full p-1 border rounded text-xs "
          validation={{ required: true }}
        />

        <Label
          name="body"
          className="block mt-4 text-sm text-gray-600 uppercase"
        >
          Comment
        </Label>
        <TextAreaField
          name="body"
          className="block w-full p-1 border rounded h-24 text-xs"
          validation={{ required: true }}
        />

        <Submit
          className="block mt-4 bg-blue-500 text-white text-xs font-semibold uppercase tracking-wide rounded px-3 py-2 disabled:opacity-50"
          disabled={loading}
        >
          Submit
        </Submit>
      </Form>
    </div>
  )
}

export default CommentForm
