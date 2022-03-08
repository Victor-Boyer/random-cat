export const DefaultBtn = (props) => (
  <button
    {...props}
    className={`border px-10 py-2 text-white py rounded-lg bg-blue max-w-fit ${props.className} hvr-grow`}
  >
    {props.text}
  </button>
);
