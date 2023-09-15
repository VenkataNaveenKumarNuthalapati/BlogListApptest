import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {description, publishedDate, title} = eachBlog
  return (
    <li className="each-blog">
      <div className="card-blog">
        <h1 className="title">{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
    </li>
  )
}

export default BlogItem
