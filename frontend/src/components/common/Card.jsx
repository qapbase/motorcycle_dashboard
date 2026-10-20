/** Standard dashboard card with a title / description header and optional tag. */
export default function Card({ title, desc, tag, className = "", style, children }) {
  return (
    <article className={`card ${className}`.trim()} style={style}>
      {(title || tag) && (
        <div className="card-header">
          <div>
            <h3>{title}</h3>
            {desc && <p className="desc">{desc}</p>}
          </div>
          {tag && <span className="tag">{tag}</span>}
        </div>
      )}
      {children}
    </article>
  );
}
