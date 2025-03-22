"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// Logo组件
const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="relative group">
        <div className="absolute -inset-1 bg-primary/20 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative">
          <Image src="/images/logo-icon.svg" alt="Logo" width={28} height={28} className="drop-shadow-md" />
        </div>
      </div>
      <span className="ml-2.5 text-white font-medium text-lg tracking-tight">RssTabs.com</span>
    </div>
  );
};

// 搜索框组件
const SearchBar: React.FC = () => {
  return (
    <div className="relative flex-1 max-w-md mx-6">
      <div className="flex items-center bg-dark-200 border border-dark-400 rounded-full px-4 py-2 transition-all duration-200 focus-within:border-primary/50 focus-within:shadow-sm focus-within:shadow-primary/20">
        <MagnifyingGlassIcon className="h-4 w-4 text-text-secondary mr-2" />
        <input
          type="text"
          placeholder="搜索内容"
          className="bg-transparent border-none outline-none w-full text-sm text-text-primary placeholder-text-muted"
        />
        <div className="flex items-center bg-dark-300 rounded-md px-1.5 py-0.5 ml-2">
          <span className="text-xs text-text-muted mr-1">⌘</span>
          <span className="text-xs text-text-muted">K</span>
        </div>
      </div>
    </div>
  );
};

// 语言选择器组件
const LanguageSelector: React.FC = () => {
  return (
    <div className="flex items-center mr-5">
      <div className="bg-dark-200 border border-dark-300 rounded-lg px-3 py-1.5 flex items-center hover:bg-dark-300 transition-colors duration-200 cursor-pointer">
        <div className="w-4 h-4 bg-cover bg-center rounded-sm mr-2.5"
          style={{ backgroundImage: "url('https://flagcdn.com/w20/cn.png')" }}></div>
        <span className="text-xs font-medium text-text-secondary">中文</span>
        <svg width="10" height="6" viewBox="0 0 10 6" className="ml-2 text-text-secondary" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 0.75L5 5.25L9.5 0.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};

// 用户头像组件
const UserAvatar: React.FC = () => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300"></div>
      <div className="relative w-9 h-9 rounded-full bg-dark-300 border-2 border-dark-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
        <div className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('https://i.pravatar.cc/100')" }}></div>
      </div>
    </div>
  );
};

// 登录按钮组件
const LoginButton: React.FC = () => {
  return (
    <Link
      href="/login"
      className="px-5 py-2 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white rounded-full text-sm font-medium transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
    >
      登录
    </Link>
  );
};

interface TopBarProps {
  isLoggedIn?: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ isLoggedIn = false }) => {
  return (
    <div className="flex justify-between items-center px-6 py-3 border-b border-dark-400 bg-dark-100 z-10 relative">
      <Logo />

      <SearchBar />

      <div className="flex items-center">
        <LanguageSelector />
        {isLoggedIn ? <UserAvatar /> : <LoginButton />}
      </div>
    </div>
  );
};

export default TopBar; 