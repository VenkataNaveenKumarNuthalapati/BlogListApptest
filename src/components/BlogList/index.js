import BlogItem from '../BlogItem/index'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  //   console.log(blogsList)
  return (
    <ul className="blog-container">
      {blogsList.map(eachBlog => (
        <BlogItem eachBlog={eachBlog} key={eachBlog.id} />
      ))}
    </ul>
  )
}

export default BlogList
