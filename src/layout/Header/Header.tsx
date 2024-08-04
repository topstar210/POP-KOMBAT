import "./Header.css";
import { Button } from "@telegram-apps/telegram-ui";

interface headerProps {
  title: string;
}

const Header = ({ title }: headerProps) => {
  return (
    <div className="header-container">
      <Button>back</Button>
      <div>
        <h2>{title}</h2>
        <p>bot</p>
      </div>
      <Button>...</Button>
    </div>
  );
};

export default Header;
