export default function NavMenuCharacters({ page, setPage }) {
  return (
    <nav className="nav-bar">
      <h2>Page: {page}</h2>
      <div className="nav-bar_buttons">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </nav>
  );
}
