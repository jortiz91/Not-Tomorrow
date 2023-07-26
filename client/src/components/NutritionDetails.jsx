import CommentForm from './CommentForm'

const NutritionDetails = ({ nutrition }) => {
  return (
    <div className="workout-details">
      <h4>{nutrition.title}</h4>
      <CommentForm id={nutrition._id} />
      {nutrition.comments.map((comment) => (
        <p key={comment._id}>{comment.content}</p>
      ))}
    </div>
  )
}
export default NutritionDetails
