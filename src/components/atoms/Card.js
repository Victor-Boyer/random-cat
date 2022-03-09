export const DefaultCard = ({ children, className }) => (
  <div
    className={`shadow-default p-6 rounded ${className} dark:bg-dark-light dark:text-white`}
  >
    {children}
  </div>
);
