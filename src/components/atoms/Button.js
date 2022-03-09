export const DefaultBtn = (props) => (
  <button
    {...props}
    className={`px-10 py-2 text-white py rounded-lg bg-blue dark:bg-purple max-w-fit ${props.className} hvr-shrink`}
  >
    {props.text}
  </button>
);

export const RedBtn = (props) => (
  <button
    {...props}
    className={`px-4 py-2 text-white py rounded-lg bg-red max-w-fit ${props.className} hvr-shrink`}
  >
    {props.text}
  </button>
);
