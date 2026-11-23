import './Sidebar.css'

function Sidebar({ items, selectedPage }) {
  return (
    <aside className="site-sidebar">
      <h2>Navigation</h2>
      <nav>
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={selectedPage === item.id ? 'nav-link active' : 'nav-link'}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar