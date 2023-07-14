export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div>
        <p>&copy; {currentYear} Visos teisės saugomos</p>
      </div>
    </footer>
  );
};
