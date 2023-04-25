export const DefaultBtn = (props) => (
  <button
    {...props}
    className={`px-6 py-2 text-white rounded-lg bg-blue dark:bg-[#7AA5D2] max-w-fit ${props.className}`}
  >
    {props.children}
  </button>
);

export const RedBtn = (props) => (
  <button
    {...props}
    className={`px-4 py-2 text-white py rounded-lg bg-red max-w-fit ${props.className}`}
  >
    {props.children}
  </button>
);

export const MenuButton = (props) => (
  <button
    {...props}
    className={`flex items-center gap-2 w-full text-left py-2 ${props.className}`}
  >
    {props.children}
  </button>
);
