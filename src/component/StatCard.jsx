import './StatCard.css'

function StatCard({ label, value, unit = '' }) {
  return (
    <article className="stat-card">
      <h3>{label}</h3>
      <strong>
        {value}
        {unit && <span className="stat-unit"> {unit}</span>}
      </strong>
    </article>
  )
}

export default StatCard
