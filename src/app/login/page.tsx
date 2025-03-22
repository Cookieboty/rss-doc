"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EyeIcon, EyeSlashIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-dark-200 to-dark-100 p-6 relative">
      {/* 背景装饰 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -mr-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48"></div>
      <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl"></div>

      <div className="w-full max-w-md relative z-10">
        {/* 返回链接 */}
        <Link href="/" className="inline-flex items-center text-text-muted mb-8 hover:text-text-secondary transition-colors duration-200 group">
          <div className="p-2 rounded-full bg-dark-300/60 border border-dark-400/60 mr-2 group-hover:bg-dark-400 transition-colors duration-200">
            <ArrowLeftIcon className="h-4 w-4" />
          </div>
          <span>返回首页</span>
        </Link>

        {/* 登录卡片 */}
        <div className="bg-dark-200/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-dark-300/80 relative overflow-hidden">
          {/* 卡片装饰 */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

          <div className="relative z-10">
            {/* 品牌Logo */}
            <div className="flex justify-center mb-6">
              <div className="relative p-3 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full">
                <div className="absolute inset-0 rounded-full blur-md bg-primary/10"></div>
                <div className="relative">
                  <Image src="/images/logo-icon.svg" alt="RssTabs Logo" width={48} height={48} className="drop-shadow-lg" />
                </div>
              </div>
            </div>

            {/* 标题 */}
            <h1 className="text-2xl font-bold text-center text-text-primary mb-2 tracking-tight">欢迎回到 RssTabs</h1>
            <p className="text-text-muted text-center mb-8">登录后即可获取个性化推荐内容</p>

            {/* 登录表单 */}
            <form className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="account" className="block text-sm font-medium text-text-secondary mb-1">账号</label>
                <div className="relative">
                  <input
                    id="account"
                    name="account"
                    type="text"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-dark-300/60 border border-dark-400/60 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-text-primary placeholder-text-muted/70 transition-all duration-200"
                    placeholder="手机号/邮箱"
                  />
                  {account && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="password" className="block text-sm font-medium text-text-secondary mb-1">密码</label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-dark-300/60 border border-dark-400/60 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-text-primary placeholder-text-muted/70 transition-all duration-200"
                    placeholder="请输入密码"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-muted hover:text-text-secondary"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="relative">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-primary focus:ring-primary border-dark-400 rounded bg-dark-300 appearance-none"
                    />
                    <div className="absolute h-4 w-4 top-0 left-0 bg-dark-300 border border-dark-400 rounded flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary">
                      <svg className="h-3 w-3 text-white invisible peer-checked:visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-text-secondary">
                    记住我
                  </label>
                </div>

                <a href="#" className="text-sm text-primary hover:text-primary/80 transition-colors duration-200">
                  忘记密码?
                </a>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-medium text-white bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5"
              >
                登录
              </button>
            </form>

            {/* 分隔线 */}
            <div className="my-6 flex items-center">
              <div className="flex-grow border-t border-dark-400/60"></div>
              <span className="px-4 text-sm text-text-muted">第三方账号登录</span>
              <div className="flex-grow border-t border-dark-400/60"></div>
            </div>

            {/* 社交登录按钮 */}
            <div className="grid grid-cols-4 gap-3">
              <button className="relative flex items-center justify-center p-3 rounded-lg shadow-sm bg-dark-300/60 hover:bg-dark-400/60 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md group">
                <div className="absolute inset-0 rounded-lg bg-[#4285F4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </button>

              <button className="relative flex items-center justify-center p-3 rounded-lg shadow-sm bg-dark-300/60 hover:bg-dark-400/60 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md group">
                <div className="absolute inset-0 rounded-lg bg-[#68A3D6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <svg className="h-5 w-5" viewBox="0 0 1024 1024" fill="#68A3D6">
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm198 600c0 4.4-3.6 8-8 8h-60c-4.4 0-8-3.6-8-8v-54H383v54c0 4.4-3.6 8-8 8h-60c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h420c4.4 0 8 3.6 8 8v304zm-419-58h224v-54H291v54zm0-114h224v-54H291v54zm280-148H291v54h280v-54z" />
                </svg>
              </button>

              <button className="relative flex items-center justify-center p-3 rounded-lg shadow-sm bg-dark-300/60 hover:bg-dark-400/60 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md group">
                <div className="absolute inset-0 rounded-lg bg-[#07C160]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#07C160">
                  <path d="M2.19995 9.99998C2.19995 5.8295 5.36832 2.19998 10.2 2.19998C14.3281 2.19998 18 5.32577 18 9.99998C18 14.6742 14.3281 17.8 10.2 17.8C8.89201 17.8 7.45416 17.3073 6.57076 16.7661L2.99995 17.8L4.06259 14.382C2.84478 13.2958 2.19995 11.6907 2.19995 9.99998Z" />
                  <path d="M13.8649 8.09165C18.0244 10.6747 19.3746 14.7153 19.76 15.5601C21.8406 12.1451 21.4566 8.21224 21.3298 7.20007C21.1727 4.89035 18.4431 2.29729 16.2139 2.29729C13.9847 2.29729 12.276 3.34415 11.6947 3.75071C11.3598 3.9935 11.2244 4.09846 11.1762 4.14082C11.1632 4.09732 11.1144 3.92547 11.044 3.66967C10.9978 3.5044 10.9606 3.37896 10.9387 3.32274C11.9387 8.32274 13.8649 8.09165 13.8649 8.09165Z" />
                  <path d="M17.6001 21.2L19.2001 16.4C17.6001 16 16.0001 15.2 14.8001 14C17.6001 16.8 14.0001 21.2 14.0001 21.2C14.0001 21.2 16.0001 21.6 17.6001 21.2Z" />
                </svg>
              </button>

              <button className="relative flex items-center justify-center p-3 rounded-lg shadow-sm bg-dark-300/60 hover:bg-dark-400/60 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md group">
                <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5 0-.23 0-.86-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </button>
            </div>

            {/* 注册链接 */}
            <p className="mt-8 text-center text-sm text-text-secondary">
              还没有账号? {' '}
              <a href="#" className="font-medium text-primary hover:text-primary/80 transition-colors duration-200 border-b border-primary/30 hover:border-primary/60 pb-0.5">
                立即注册
              </a>
            </p>
          </div>
        </div>

        {/* 底部信息 */}
        <div className="mt-8 text-center">
          <p className="text-xs text-text-muted">
            © 2023 RssTabs. 保留所有权利.
          </p>
        </div>
      </div>
    </div>
  );
} 