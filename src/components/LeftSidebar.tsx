"use client";

import React, { ReactNode, useState } from 'react';
import { HomeIcon, FireIcon, StarIcon, BookmarkIcon, BookOpenIcon, CogIcon, PlusIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// 菜单项组件
interface MenuItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  active?: boolean;
  hasDropdown?: boolean;
  children?: ReactNode;
  href?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, active = false, hasDropdown = false, children = null, href }) => {
  const Icon = icon;
  const content = (
    <div className={`flex items-center justify-between px-3 py-2.5 rounded-2xl mb-1.5 cursor-pointer transition-all duration-200 ${active
        ? 'bg-gradient-to-r from-primary/80 to-primary/40 border border-primary/50 shadow-md shadow-primary/10'
        : 'hover:bg-dark-200 hover:shadow-sm'
      }`}>
      <div className="flex items-center">
        <Icon className={`h-4 w-4 mr-2.5 ${active ? 'text-white' : 'text-text-secondary'}`} />
        <span className={`text-xs font-medium ${active ? 'text-white' : 'text-text-secondary'}`}>{text}</span>
      </div>
      {hasDropdown && (
        <ChevronDownIcon className={`h-3 w-3 ${active ? 'text-white' : 'text-text-secondary'} transition-transform duration-200`} />
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
};

// 订阅项组件
interface FeedItemProps {
  text: string;
  color?: string;
  letter?: string;
}

const FeedItem: React.FC<FeedItemProps> = ({ text, color = "#1D1E2B", letter = "G" }) => {
  return (
    <div className="flex items-center justify-between px-3 py-2 rounded-2xl mb-1.5 cursor-pointer hover:bg-opacity-90 transition-all duration-200 hover:shadow-sm" style={{ backgroundColor: color }}>
      <div className="flex items-center">
        <div className="w-5 h-5 rounded-full bg-white/10 mr-2.5 flex items-center justify-center backdrop-blur-sm" style={{ backgroundColor: `${color}99` }}>
          <span className="text-[10px] font-medium text-white">{letter}</span>
        </div>
        <span className="text-xs font-medium text-white/90">{text}</span>
      </div>
    </div>
  );
};

// 文件夹组件
interface FolderItemProps {
  text: string;
  count: number;
  expanded?: boolean;
  onToggle?: () => void;
}

const FolderItem: React.FC<FolderItemProps> = ({ text, count, expanded = false, onToggle }) => {
  return (
    <div className="mb-2">
      <div
        className="flex items-center justify-between px-3 py-2.5 rounded-2xl cursor-pointer bg-dark-200 border border-dark-300 hover:bg-dark-300 transition-all duration-200"
        onClick={onToggle}
      >
        <div className="flex items-center">
          <ChevronDownIcon className={`h-3.5 w-3.5 mr-2.5 text-text-secondary transition-transform duration-300 ${expanded ? 'transform rotate-0' : 'transform -rotate-90'}`} />
          <span className="text-xs font-medium text-text-secondary">{text} <span className="opacity-60">({count})</span></span>
        </div>
      </div>
      <div className={`pl-2 mt-1.5 space-y-1 overflow-hidden transition-all duration-300 ${expanded ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <FeedItem letter="知" text="知乎热门" color="#FC6D26" />
        <FeedItem letter="掘" text="掘金前端" color="#0061FF" />
        <FeedItem letter="科" text="科技头条" color="#231E1B" />
      </div>
    </div>
  );
};

// 定义文件夹状态类型
type FolderKey = 'tech' | 'lifestyle' | 'finance';

// 主导航菜单组件
const MainNavigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="px-3 mb-6">
      <MenuItem icon={HomeIcon} text="全部" active={pathname === '/'} href="/" />
      <MenuItem icon={FireIcon} text="推荐" active={pathname === '/feed/recommend'} href="/feed/recommend" />
      <MenuItem icon={StarIcon} text="收藏" />
    </div>
  );
};

// 我的订阅组件
const MyFeedsSection: React.FC = () => {
  const [expandedFolders, setExpandedFolders] = useState({
    tech: true,
    lifestyle: false,
    finance: false
  });

  const toggleFolder = (key: FolderKey) => {
    setExpandedFolders(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="px-3 mb-6">
      <div className="flex items-center justify-between px-3 py-2 mb-3">
        <span className="text-xs font-medium text-text-secondary">我的源 <span className="text-text-muted">(6)</span></span>
        <button className="p-1 rounded-full hover:bg-dark-300 transition-colors duration-200">
          <CogIcon className="h-4 w-4 text-text-secondary" />
        </button>
      </div>

      <div className="bg-gradient-to-r from-primary/90 to-primary/70 px-3.5 py-2.5 rounded-2xl mb-4 flex items-center justify-between hover:shadow-md hover:shadow-primary/10 transition-all duration-200 cursor-pointer">
        <div className="flex items-center">
          <div className="p-1 bg-white/10 rounded-full mr-2.5">
            <PlusIcon className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="text-xs font-medium text-white">添加源</span>
        </div>
      </div>

      <FolderItem
        text="技术资讯"
        count={3}
        expanded={expandedFolders.tech}
        onToggle={() => toggleFolder('tech')}
      />
      <FolderItem
        text="生活休闲"
        count={2}
        expanded={expandedFolders.lifestyle}
        onToggle={() => toggleFolder('lifestyle')}
      />
      <FolderItem
        text="财经新闻"
        count={1}
        expanded={expandedFolders.finance}
        onToggle={() => toggleFolder('finance')}
      />
    </div>
  );
};

// 底部菜单组件
const BottomNavigation: React.FC = () => {
  return (
    <div className="px-3 mt-auto">
      <MenuItem icon={BookmarkIcon} text="书签" />
      <MenuItem icon={BookOpenIcon} text="帮助与文档" />
      <MenuItem icon={CogIcon} text="设置" />
    </div>
  );
};

const LeftSidebar: React.FC = () => {
  return (
    <div className="w-60 h-screen border-r border-dark-400 py-4 flex flex-col justify-between bg-dark-100">
      <div className="overflow-y-auto pr-1 scrollbar-thin">
        <MainNavigation />
        <MyFeedsSection />
      </div>
      <BottomNavigation />
    </div>
  );
};

export default LeftSidebar; 