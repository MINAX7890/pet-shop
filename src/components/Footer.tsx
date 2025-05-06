
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">PetRescue</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Helping pets find their forever homes since 2023.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pets" className="text-sm text-muted-foreground hover:text-primary">
                  Find a Pet
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-2 space-y-2">
              <li className="text-sm text-muted-foreground">
                123 Rescue Lane, Pet City
              </li>
              <li className="text-sm text-muted-foreground">
                contact@petrescue.example
              </li>
              <li className="text-sm text-muted-foreground">(555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-4">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} PetRescue. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
