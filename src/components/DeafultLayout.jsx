import Navbar from "./Navbar.jsx";

function DefaultLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default DefaultLayout;