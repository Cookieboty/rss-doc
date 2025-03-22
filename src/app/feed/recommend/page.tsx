import { Suspense } from 'react';
import Layout from '../../../components/Layout';
import LoginRequired from '../../../components/LoginRequired';
import ArticleList from '../../../components/ArticleList';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function RecommendPage() {
  const isLoggedIn = false; // 模拟用户未登录状态，实际应从会话或API中获取

  return (
    <Layout isLoggedIn={isLoggedIn}>
      <div className="flex flex-1 overflow-hidden">
        {isLoggedIn ? (
          <div className="flex-1 flex flex-col">
            <div className="bg-dark-200 p-4 border-b border-dark-300 flex items-center">
              <Link href="/" className="mr-4 p-1 rounded-full hover:bg-dark-300">
                <ArrowLeftIcon className="h-5 w-5 text-text-secondary" />
              </Link>
              <h1 className="text-xl font-semibold text-text-primary">推荐内容</h1>
            </div>

            <Suspense fallback={<div className="flex-1 flex items-center justify-center">加载中...</div>}>
              <ArticleList />
            </Suspense>
          </div>
        ) : (
          <LoginRequired />
        )}
      </div>
    </Layout>
  );
} 