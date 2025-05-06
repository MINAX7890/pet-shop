
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">PetRescue</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-foreground/70 hover:text-foreground">
            Home
          </Link>
          <Link to="/pets" className="text-sm font-medium text-foreground/70 hover:text-foreground">
            Find a Pet
          </Link>
          <Link to="/about" className="text-sm font-medium text-foreground/70 hover:text-foreground">
            About Us
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild variant="outline">
            <Link to="/signin">Sign In</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
