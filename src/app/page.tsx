import Layout from '../components/Layout';
import LeftSidebar from '../components/LeftSidebar';
import ArticleList from '../components/ArticleList';
import Link from 'next/link';
import { ArrowRightCircleIcon, FireIcon, LightBulbIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function Home() {
  // 这里在实际应用中应该从服务器端或前端存储获取登录状态
  const isLoggedIn = false;

  return (
    <Layout isLoggedIn={isLoggedIn}>
      <div className="flex flex-1 overflow-hidden">
        <LeftSidebar />

        <div className="flex-1 flex flex-col">
          <div className="bg-gradient-to-r from-dark-200 to-dark-300 p-6 border-b border-dark-300 relative overflow-hidden">
            {/* 装饰元素 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl -ml-20 -mb-20"></div>

            <div className="relative z-10">
              <h1 className="text-2xl font-bold text-text-primary tracking-tight">探索您的信息世界(Cookieboty)</h1>
              <p className="text-text-muted mt-2 max-w-lg text-base">
                发现、收集和整理您感兴趣的内容，打造个性化的阅读体验
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <Link
                  href="/feed/recommend"
                  className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white rounded-full transition-all duration-300 font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                >
                  <FireIcon className="h-5 w-5 mr-2" />
                  查看推荐内容
                  <ArrowRightCircleIcon className="h-5 w-5 ml-1.5 opacity-70" />
                </Link>

                <Link
                  href="/feed/latest"
                  className="inline-flex items-center px-5 py-2.5 bg-dark-300 hover:bg-dark-400 text-text-primary border border-dark-400 rounded-full transition-all duration-300 hover:shadow-md"
                >
                  <ClockIcon className="h-5 w-5 mr-2 text-blue-400" />
                  最新更新
                </Link>

                <Link
                  href="/explore"
                  className="inline-flex items-center px-5 py-2.5 bg-dark-300 hover:bg-dark-400 text-text-primary border border-dark-400 rounded-full transition-all duration-300 hover:shadow-md"
                >
                  <LightBulbIcon className="h-5 w-5 mr-2 text-amber-400" />
                  探索发现
                </Link>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-auto">
            <ArticleList />
          </div>
        </div>
      </div>
    </Layout>
  );
} 