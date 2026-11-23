import './CourseCard.css'

function CourseCard({ course, onSelect }) {
  return (
    <article className="course-card">
      <span className="course-code">{course.code}</span>
      <h3>{course.name}</h3>
      <p>{course.students} students enrolled</p>
      <button type="button" onClick={() => onSelect(course)}>
        View Course
      </button>
    </article>
  )
}

export default CourseCard
