import { Breadcrumb, type Crumb } from "@/components/breadcrumb";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt = "",
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  image?: string;
  imageAlt?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy-mid pt-32 pb-16 text-cream md:pt-40 md:pb-24">
      {image ? (
        <>
          <img src={image} alt={imageAlt} className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-mid via-navy-mid/75 to-navy/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-mid/90 via-transparent to-navy-mid/40" />
        </>
      ) : (
        <span
          className="pointer-events-none absolute -right-8 -bottom-8 size-48 border-[12px] border-crimson/25"
          aria-hidden
        />
      )}
      <span
        className="pointer-events-none absolute right-8 bottom-8 hidden size-20 border-[7px] border-crimson md:block"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {crumbs ? <Breadcrumb items={crumbs} /> : null}
        {eyebrow ? <p className="text-sm font-bold text-navy-ice">{eyebrow}</p> : null}
        <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold tracking-tight md:text-7xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/80">{lead}</p>
        ) : null}
      </div>
    </section>
  );
}
