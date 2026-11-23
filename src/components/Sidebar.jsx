import './Sidebar.css'

function Sidebar({ title, links }) {
  return (
    <aside className="site-sidebar">
      <h2>{title}</h2>
      <nav>
        {links.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar