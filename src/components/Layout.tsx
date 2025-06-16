import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="max-w-1920 mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
