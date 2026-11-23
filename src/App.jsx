import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
const courses = [
  { id: 1, code: 'CCE401', name: 'Client-Side Development', students: 28 },
  { id: 2, code: 'CCE402', name: 'Computer Networks', students: 32 },
  { id: 3, code: 'CCE403', name: 'Database Systems', students: 25 },
]
const navLinks = [
  { href: '#overview', label: 'Overview' },
  { href: '#courses', label: 'Courses' },
  { href: '#announcements', label: 'Announcements' },
]
function App() {
  return (


    <div className="dashboard">
      <Header
  title="IUL Portal"
  semester="Fall 2026"
  instructor="CCE Department"
/>



     <Sidebar title="Navigation" links={navLinks} />




      <main className="content">
      
        <h2>Dashboard Content </h2>
          <section className="stats" >
            <article className="stat">
              <h3>Courses</h3>
              <p>5</p>
            </article>
            <article className="stat">
              <h3>Announcements</h3>
              <p>12</p>
              </article>
            <article className="stat">
              <h3>Students</h3>
              <p>85</p>
            </article>           
          </section>

        <div className="courses-grid" >
          {courses.map((course) => (
            <article  className="course-card" key={course.id}>
              <h3>{course.name}</h3>
              <p>Code: {course.code}</p>
              <p>{course.students} students enrolled</p>
            </article>
          ))}
        </div>

      </main>



      <Footer university="IUL" year={2026} />
    </div>
  )
}
export default App;