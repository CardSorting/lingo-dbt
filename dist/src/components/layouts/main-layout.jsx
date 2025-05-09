import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiBook, FiAward, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import { cn } from '../../utils/cn';
const MainLayout = ({ children }) => {
    const pathname = usePathname();
    const navigation = [
        { name: 'Dashboard', href: '/dashboard', icon: FiHome },
        { name: 'Learn', href: '/learn', icon: FiBook },
        { name: 'Achievements', href: '/achievements', icon: FiAward },
        { name: 'Profile', href: '/profile', icon: FiUser },
        { name: 'Settings', href: '/settings', icon: FiSettings },
    ];
    return (<div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 z-10 flex w-72 flex-col border-r border-gray-200 bg-white">
        {/* Logo */}
        <Link href="/dashboard" className="flex h-16 items-center px-6 border-b border-gray-200">
          <span className="text-2xl font-bold text-primary-600">Lingo-DBT</span>
        </Link>

        {/* Nav Links */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (pathname === null || pathname === void 0 ? void 0 : pathname.startsWith(`${item.href}/`));
            return (<Link key={item.name} href={item.href} className={cn('group flex items-center rounded-md px-3 py-2 text-sm font-medium', isActive
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-700 hover:bg-gray-50')}>
                <item.icon className={cn('mr-3 h-5 w-5 flex-shrink-0', isActive ? 'text-primary-600' : 'text-gray-400 group-hover:text-gray-500')} aria-hidden="true"/>
                {item.name}
              </Link>);
        })}
        </nav>

        {/* User and Logout */}
        <div className="flex items-center justify-between border-t border-gray-200 p-4">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">
              U
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">User Name</p>
              <p className="text-xs text-gray-500">Level 5</p>
            </div>
          </div>
          <button type="button" className="rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
            <FiLogOut className="h-5 w-5"/>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col pl-72">
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>);
};
export default MainLayout;
