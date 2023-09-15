import './index.css'

const UserInfo = () => {
  console.log('UserInfo')
  return (
    <div className="card">
      <img
        className="profile-image"
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
      />
      <h1>Wade Warren</h1>
      <p>Software Developer at UK</p>
    </div>
  )
}

export default UserInfo
