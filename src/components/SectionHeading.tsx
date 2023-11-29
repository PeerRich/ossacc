import clsx from 'clsx'

export function SectionHeading({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'h2'> & { number: string }) {
  return (
    <h2
      className={clsx(
        className,
        'inline-flex items-center rounded-full px-4 py-1 text-blue-600 ring-1 ring-inset ring-blue-600',
      )}
      {...props}
    >
      <span className="text-base font-medium tracking-tight">{children}</span>
    </h2>
  )
}
