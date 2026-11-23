import './Footer.css'

function Footer({ university, year }) {
  return (
    <footer className="site-footer">
      © {year} {university} — CCE
    </footer>
  )
}

export default Footer
