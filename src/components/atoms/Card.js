export const DefaultCard = ({ children, className }) => (
  <div
    className={`sm:shadow-default sm:rounded ${className} sm:dark:bg-dark-light dark:text-white`}
  >
    {children}
  </div>
);
