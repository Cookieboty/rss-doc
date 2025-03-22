"use client";

import React, { useState } from 'react';
import { EllipsisHorizontalIcon, ShareIcon, BookmarkIcon, LinkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Squares2X2Icon, ListBulletIcon, BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

interface ArticleProps {
  title: string;
  summary: string;
  author: string;
  time: string;
  image?: string;
  read?: boolean;
  selected?: boolean;
}

const ArticleActions: React.FC = () => {
  const [saved, setSaved] = useState(false);

  return (
    <div className="flex space-x-2">
      <button className="w-8 h-8 rounded-full bg-dark-200/80 hover:bg-dark-300 shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110">
        <ShareIcon className="h-4 w-4 text-white" />
      </button>
      <button
        className={`w-8 h-8 rounded-full ${saved ? 'bg-primary/20' : 'bg-dark-200/80 hover:bg-dark-300'} shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110`}
        onClick={() => setSaved(!saved)}
      >
        {saved ? (
          <BookmarkSolidIcon className="h-4 w-4 text-primary" />
        ) : (
          <BookmarkIcon className="h-4 w-4 text-white" />
        )}
      </button>
      <button className="w-8 h-8 rounded-full bg-dark-200/80 hover:bg-dark-300 shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110">
        <LinkIcon className="h-4 w-4 text-white" />
      </button>
    </div>
  );
};

const ArticleCard: React.FC<ArticleProps> = ({ title, summary, author, time, image, read = false, selected = false }) => {
  const [hovered, setHovered] = useState(false);
  const [showActions, setShowActions] = useState(selected);

  return (
    <div
      className={`mb-4 relative ${selected ? 'ring-2 ring-primary/70 shadow-xl shadow-primary/10' : ''} 
      rounded-xl transition-all duration-300 hover:shadow-lg ${hovered ? 'transform-gpu scale-[1.01]' : ''}`}
      onMouseEnter={() => { setHovered(true); setShowActions(true) }}
      onMouseLeave={() => { setHovered(false); setShowActions(selected) }}
    >
      <div className={`p-5 rounded-xl border ${read
        ? 'opacity-60 bg-primary/10 border-primary/30 hover:opacity-80'
        : selected
          ? 'bg-gradient-to-br from-[#1c2c6b] to-[#1E2A5E] border-primary/70'
          : hovered
            ? 'bg-gradient-to-br from-dark-200 to-dark-300 border-dark-400'
            : 'bg-secondary border-dark-300'
        }`}>
        <div className="flex">
          <div className="flex-1 pr-4">
            <h3 className="text-base font-semibold text-white mb-2 line-clamp-2 group-hover:text-blue-300">{title}</h3>
            <p className="text-sm text-text-muted mb-4 line-clamp-3">{summary}</p>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-primary flex items-center justify-center mr-2 shadow-inner">
                  <span className="text-[10px] font-bold text-white">{author.charAt(0).toUpperCase()}</span>
                </div>
                <span className="text-xs text-text-secondary mr-2 font-medium">{author}</span>
                <div className="w-1 h-1 rounded-full bg-dark-400 mx-1.5"></div>
                <span className="text-xs text-text-subtle">{time}</span>
              </div>
              {showActions ? (
                <ArticleActions />
              ) : (
                <button
                  className="w-8 h-8 rounded-full hover:bg-dark-300 flex items-center justify-center transition-colors duration-200"
                  onClick={() => setShowActions(true)}
                >
                  <EllipsisHorizontalIcon className="h-5 w-5 text-text-primary" />
                </button>
              )}
            </div>
          </div>

          {image && (
            <div className="w-32 h-32 relative flex-shrink-0 rounded-lg overflow-hidden shadow-md">
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
              />
              {read && (
                <div className="absolute inset-0 bg-dark-200/50 flex items-center justify-center">
                  <span className="text-xs text-white bg-primary/70 px-2 py-1 rounded-md">已读</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ArticleListHeader: React.FC = () => {
  const [currentView, setCurrentView] = useState<'list' | 'grid'>('list');

  return (
    <div className="flex justify-between items-center mb-6 border-b border-dark-300 pb-4">
      <div className="flex items-center">
        <button className="flex items-center bg-dark-300 border border-dark-400 rounded-lg px-3.5 py-2 text-sm text-text-secondary hover:bg-dark-400 transition-all duration-200 shadow-sm hover:shadow">
          <span className="mr-2 font-medium">全部内容</span>
          <ChevronDownIcon className="h-4 w-4" />
        </button>

        <div className="h-5 w-px bg-dark-400 mx-4"></div>

        <div className="flex space-x-3">
          <button className="px-3 py-1 rounded-full text-xs text-blue-300 border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-200">
            全部
          </button>
          <button className="px-3 py-1 rounded-full text-xs text-text-muted hover:text-text-secondary hover:bg-dark-300 transition-colors duration-200">
            未读
          </button>
          <button className="px-3 py-1 rounded-full text-xs text-text-muted hover:text-text-secondary hover:bg-dark-300 transition-colors duration-200">
            已读
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <div className="bg-dark-200 rounded-lg overflow-hidden flex">
          <button
            className={`p-2 transition-colors duration-200 ${currentView === 'list' ? 'bg-dark-300 border border-dark-400' : 'hover:bg-dark-300'}`}
            onClick={() => setCurrentView('list')}
          >
            <ListBulletIcon className={`h-4 w-4 ${currentView === 'list' ? 'text-primary' : 'text-text-secondary'}`} />
          </button>
          <button
            className={`p-2 transition-colors duration-200 ${currentView === 'grid' ? 'bg-dark-300 border border-dark-400' : 'hover:bg-dark-300'}`}
            onClick={() => setCurrentView('grid')}
          >
            <Squares2X2Icon className={`h-4 w-4 ${currentView === 'grid' ? 'text-primary' : 'text-text-muted'}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

const LoadingIndicator: React.FC = () => {
  return (
    <div className="flex justify-center py-6">
      <div className="relative">
        <div className="absolute -inset-1 bg-primary/20 rounded-full blur-md opacity-70 animate-pulse"></div>
        <svg className="animate-spin h-7 w-7 text-primary relative" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    </div>
  );
};

const ArticleList: React.FC = () => {
  // 模拟文章数据
  const articles = [
    {
      id: 1,
      title: '微信播一播回归：小米增程 SUV「昆仑」谍照曝光',
      summary: '小米首款增程 SUV 新谍照曝光：尺寸庞大，代号「昆仑」！3 月 21 日消息，网上今日流传出了多张 SUV 车型的谍照，博主 @ 极速拍档 Speedsters 称，这是小米代号为昆仑的全新增程 SUV 谍照，据规划全新车型将于明年第二季度上市。',
      author: '雷科技',
      time: '4 小时前',
      image: 'https://picsum.photos/200/200?random=1',
      read: false,
      selected: true
    },
    {
      id: 2,
      title: 'IGN中国「主机战争」终于结束了吗?',
      summary: '本文由IGN中国编译自IGNUS相关内容，原作者SabAstley，编译Tony，少数派经授权转载。仅对文章格式作调整，译文挂接PlayStation还是Xbox? 这是现代电游玩家了很长多年的经典话题。',
      author: 'IGN中国',
      time: '2 小时前',
      read: false,
      selected: false
    },
    {
      id: 3,
      title: 'Mac技巧之把英文视频自动转化成中文配音视频',
      summary: '注意，EasyVideoTrans 不是给英文视频添加中文字幕，而是把英文视频转化成中文的视频，此前通过 AI 声音和文的进展，现在视频转换出来的结果非常棒，实现方式也很合理。直接去 EasyVideoTrans 看详细介绍，在线应用很效果吧 https://easyvidiotrans.com/。',
      author: 'bmwmengwei',
      time: '6 小时前',
      read: false,
      selected: false
    },
    {
      id: 4,
      title: '38.98 万元！腾势 N9 正式发售，问界 M9 迎来最强对手',
      summary: '数字 9 显然已经成为了中国车企旗舰车型共同的符号：比如理想 L9、问界 M9、蔚来 S9、理想 FT9 等等有腾势 D9、Z9、今晚，腾势迎来了他们的第三个"9"——腾势 N9。版型不多，一共就两个版本：',
      author: '李华',
      time: '4 小时前',
      image: 'https://picsum.photos/200/200?random=2',
      read: true,
      selected: false
    },
    {
      id: 5,
      title: '35000 元的富士「电子穷台」：好玩，但我可能不会长期使用它',
      summary: '明明大家只是出风头，怎么富士偏要出风格。加上充满期即可直接经典质感的股片输出，让X100VI 沦为机圈注水机型。一度有了「电子穷台」的说法 ...',
      author: '周笑言',
      time: '5 小时前',
      read: false,
      selected: false
    },
    {
      id: 6,
      title: '华为「闹折叠」手机 Pura X 正式发布/小米工厂参观',
      summary: '明日酒菜：01. 华为「闹折叠」手机 Pura X 正式发布 02. 百度回应「请广东女儿开盒」事件 03. 蔚来雷克萨斯四月上市 04. 小米工厂参观路线被吸烟 05. 富士中画幅相机 GFX100 RF...',
      author: '何晓涵',
      time: '5 小时前',
      read: false,
      selected: false
    },
    {
      id: 7,
      title: 'Google Cloud 为 Spanner 数据库引入 HDD 层，将大幅降低存储成本',
      summary: 'Google has recently introduced tiered storage for Spanner, its distributed SQL database on Google Cloud. This tiered storage is based on a new HDD storage option that is 80% cheaper than the existing SSD storage.',
      author: 'Renato Losio',
      time: '7 小时前',
      read: false,
      selected: false
    },
    {
      id: 8,
      title: '谷歌表示它可能不小心删除了您的 Google 地图时间轴数据',
      summary: 'Credit: Rita El Khoury / Android Authority Google apparently sent an email to some users saying that it accidentally deleted Google Maps Timeline data. The email was only sent out to affected users.',
      author: 'Hadlee Simons',
      time: '4 小时前',
      image: 'https://picsum.photos/200/200?random=3',
      read: false,
      selected: false
    }
  ];

  return (
    <div className="flex-1 p-6 overflow-y-auto bg-gradient-to-b from-dark-100 to-dark-200">
      <ArticleListHeader />

      <div className="grid grid-cols-1 gap-5 fade-in">
        {articles.map(article => (
          <ArticleCard
            key={article.id}
            title={article.title}
            summary={article.summary}
            author={article.author}
            time={article.time}
            image={article.image}
            read={article.read}
            selected={article.selected}
          />
        ))}
      </div>

      <LoadingIndicator />
    </div>
  );
};

export default ArticleList; 