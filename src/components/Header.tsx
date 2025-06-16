import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Works', path: '/Works' },
  { name: 'Team Project', path: '/teamproject' },
  { name: 'Career', path: '/career' },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="font-inter bg-main-bg text-black px-6 py-4 shadow-sm sticky top-0 z-50 ">
      <div className="max-w-1440 mx-auto flex items-center justify-between px-6 py-3">
        <div className="font-tway text-black text-xl font-bold">
          로고 제목 Shin
        </div>
    

        {/* 네비게이션 메뉴 */}
        <nav className="flex gap-6 font-engBody">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-black hover:text-main transition font-medium ${
                location.pathname === item.path
                  ? 'text-black-600 pb-1'
                  : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
 