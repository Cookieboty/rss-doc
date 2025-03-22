"use client";

import React, { ReactNode } from 'react';
import TopBar from './TopBar';

interface LayoutProps {
  children: ReactNode;
  isLoggedIn?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, isLoggedIn = false }) => {
  return (
    <div className="min-h-screen bg-dark-100 text-white flex flex-col">
      <TopBar isLoggedIn={isLoggedIn} />
      <main className="flex flex-1 overflow-hidden">
        {children}
      </main>
    </div>
  );
};

export default Layout; 