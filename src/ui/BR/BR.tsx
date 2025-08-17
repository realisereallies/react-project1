export function BR({ at }: { at: 'sm'|'sm-md'|'md'|'lg'|'all' }) {
  return <br className={`br-${at}`} aria-hidden="true" />;
}
