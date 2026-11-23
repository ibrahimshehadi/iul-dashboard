import './App.css'
import Header from './component/Header'   // ⬅️ جبنا الـHeader

const courses = [
  { id: 1, code: 'CCE401', name: 'Client-Side Development', students: 28 },
  { id: 2, code: 'CCE402', name: 'Computer Networks', students: 32 },
  { id: 3, code: 'CCE403', name: 'Database Systems', students: 25 },
]

function App() {
  return (
    <div className="dashboard">

      {/* ⬅️ بدل <header className="topbar">...</header> */}
      <Header
        title="IUL Portal"
        semester="Fall 2026"
        instructor="CCE Department"
      />

      <aside className="sidebar">
        <h2>Navigation</h2>
        <nav>
          <a href="#overview">Overview</a>
          <a href="#courses">Courses</a>
          <a href="#announcements">Announcements</a>
        </nav>
      </aside>

      <main className="content" id="overview">
        <h2>Dashboard</h2>
        <p>Welcome to your academic workspace.</p>

        <section className="stats" aria-label="Summary">
          <article className="stat-card">
            <h3>Courses</h3>
            <strong>3</strong>
          </article>
          <article className="stat-card">
            <h3>Students</h3>
            <strong>85</strong>
          </article>
          <article className="stat-card">
            <h3>Assignments</h3>
            <strong>12</strong>
          </article>
        </section>

        <section id="courses" className="course-section">
          <div className="section-heading">
            <h2>My Courses</h2>
            <button type="button">Add Course</button>
          </div>

          <div className="course-grid">
            {courses.map((course) => (
              <article className="course-card" key={course.id}>
                <span className="course-code">{course.code}</span>
                <h3>{course.name}</h3>
                <p>{course.students} students enrolled</p>
                <button type="button">View Course</button>
              </article>
            ))}
          </div>
        </section>

        <section id="announcements" className="announcement">
          <h2>Announcement</h2>
          <p>Next week: React components and props.</p>
        </section>
      </main>

      <footer className="footer">IUL • CCE Client-Side Development</footer>
    </div>
  )
}

export default App