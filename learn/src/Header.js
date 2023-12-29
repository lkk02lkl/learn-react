const Header = ({title}) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaulProps = {
  title: "Default Title"
};

export default Header;
