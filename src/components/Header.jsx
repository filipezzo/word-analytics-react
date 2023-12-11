import Bg from "./Bg";

function Header() {
  return (
    <header>
      <Bg />
      <h1 className="first-heading">
        Word<span className="first-heading--thin">Analytics</span>
      </h1>
    </header>
  );
}

export default Header;
