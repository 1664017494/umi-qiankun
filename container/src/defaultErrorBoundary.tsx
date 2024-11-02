// defaultErrorBoundary.tsx
export default function (error: Error) {
  console.log("error", 123);
  return <div>{error?.message}</div>;
}