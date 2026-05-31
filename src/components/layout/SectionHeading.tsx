interface SectionHeadingProps {
  id: string;
  title: string;
  description?: string;
}

export function SectionHeading({ id, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-16 text-center">
      <h2 id={id} className="mb-4 text-4xl font-bold text-gray-900">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto max-w-3xl text-xl text-gray-600">{description}</p>
      ) : null}
    </div>
  );
}
