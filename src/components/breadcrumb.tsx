export type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Brotkrumen" className="mb-5">
      <ol className="flex flex-wrap items-center gap-x-2 text-sm text-cream/55">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-x-2">
            {i > 0 ? <span aria-hidden>/</span> : null}
            {item.href ? (
              <a href={item.href} className="hover:text-cream">
                {item.label}
              </a>
            ) : (
              <span className="text-cream/80">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
