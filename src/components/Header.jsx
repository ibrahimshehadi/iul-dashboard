import './Header.css'

function Header({ title, semester, instructor }) {
  return (
    <header className="site-header">
      <div>
        <h1>{title}</h1>
        <p>Instructor: {instructor}</p>
      </div>
      <span className="semester-badge">{semester}</span>
    </header>
  )
}

export default Header