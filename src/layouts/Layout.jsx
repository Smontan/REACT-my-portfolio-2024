import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      <div className="px-4 lg:px-0 ">{children}</div>
    </main>
  );
};
export default Layout;
