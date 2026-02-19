import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-light text-dark">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
