'use client';

export interface OnThisPageLink {
  id: string;
  label: string;
}

interface OnThisPageProps {
  links: OnThisPageLink[];
  title?: string;
  className?: string;
}

/**
 * In-page navigation for SEO and UX: anchor links to major sections.
 * Renders only when there are 2+ links. Use descriptive labels for SEO.
 */
export default function OnThisPage({ links, title = 'On this page', className = '' }: OnThisPageProps) {
  if (!links?.length || links.length < 2) return null;

  return (
    <nav
      aria-label={title}
      className={`rounded-lg border border-gray-200 bg-gray-50/80 p-4 ${className}`}
    >
      <h3 className="text-sm font-semibold text-[#0A2540] mb-3">{title}</h3>
      <ol className="space-y-2 text-sm">
        {links.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="text-[#3A8DDE] hover:text-[#0A2540] hover:underline focus:outline-none focus:ring-2 focus:ring-[#3A8DDE] focus:ring-offset-1 rounded"
            >
              {label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
