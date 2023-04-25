export const DefaultCard = ({ children, className }) => (
  <div
    className={`shadow-default sm:rounded ${className} dark:bg-dark-light dark:text-white`}
  >
    {children}
  </div>
);
