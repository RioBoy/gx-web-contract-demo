import Link from 'next/link';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link href="/" className="navbar-brand">
            <img
              src="/images/logo/logo_default_black.png"
              alt="GlobalXtreme"
              className="gx-header-logo"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
