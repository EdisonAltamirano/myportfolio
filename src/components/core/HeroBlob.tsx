export function HeroBlob({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        fill="hsl(var(--primary))"
        d="M47.5,-57.2C59.8,-46.5,67.2,-30.5,71.8,-13.1C76.4,4.2,78.2,23,71.3,38.2C64.4,53.4,48.8,65,31.7,70.3C14.6,75.7,-4,74.7,-22.9,70C-41.8,65.3,-61,56.8,-69.8,41.8C-78.5,26.7,-76.8,5.1,-73.3,-16.3C-69.7,-37.8,-64.1,-59,-50.4,-69.5C-36.7,-80.1,-14.9,-80,-0.7,-79.1C13.6,-78.2,35.2,-67.9,47.5,-57.2Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
