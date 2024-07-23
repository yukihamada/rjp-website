'use client'

import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { BookOpen, Video, Users, Award, Menu } from 'lucide-react';
import Image from 'next/image';

// ヘッダーコンポーネント
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className={`bg-white shadow-sm py-4 fixed w-full z-10 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-serif text-gray-800">Refined Jiu-Jitsu Program</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-sm font-light">
            <li><a href="#features" className="text-gray-600 hover:text-gray-800 transition-colors">特徴</a></li>
            <li><a href="#courses" className="text-gray-600 hover:text-gray-800 transition-colors">コース</a></li>
            <li><a href="#testimonials" className="text-gray-600 hover:text-gray-800 transition-colors">声</a></li>
            <li><a href="#faq" className="text-gray-600 hover:text-gray-800 transition-colors">FAQ</a></li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="text-gray-800" />
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white pt-4">
          <ul className="flex flex-col space-y-2 px-4">
            <li><a href="#features" className="text-gray-600 hover:text-gray-800 transition-colors">特徴</a></li>
            <li><a href="#courses" className="text-gray-600 hover:text-gray-800 transition-colors">コース</a></li>
            <li><a href="#testimonials" className="text-gray-600 hover:text-gray-800 transition-colors">声</a></li>
            <li><a href="#faq" className="text-gray-600 hover:text-gray-800 transition-colors">FAQ</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

// ヒーローセクションコンポーネント
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`pt-24 pb-16 bg-gray-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-serif font-light text-gray-800 mb-6">洗練された柔術の世界へ</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Refined Jiu-Jitsu Programで、あなたの技術と精神性を高める旅を始めましょう</p>
        <Button className="bg-gray-800 text-white hover:bg-gray-700 transition-colors">プログラムを体験する</Button>
      </div>
    </section>
  );
};

// 特徴セクションコンポーネント
const Features = () => {
  const features = [
    { title: "洗練されたカリキュラム", description: "体系的に構築された学習プログラム", icon: BookOpen },
    { title: "ハイクオリティな動画講座", description: "4K画質で細部まで学べる映像コンテンツ", icon: Video },
    { title: "エキスパートからのフィードバック", description: "経験豊富な指導者による個別指導", icon: Users },
    { title: "実績トラッキング", description: "データに基づく進捗管理システム", icon: Award },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-12 text-gray-800">プログラムの特徴</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 transition-transform duration-300">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-gray-800 mb-4" />
                <CardTitle className="font-serif">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// コースタブコンポーネント
const CourseTabs = () => {
  // ... コースタブの実装
}

// 声セクションコンポーネント
const Testimonials = () => {
  // ... 声セクションの実装
}

// FAQセクションコンポーネント
const FAQ = () => {
  // ... FAQセクションの実装
}

// CTAセクションコンポーネント
const CTASection = () => {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif mb-4">洗練された柔術の世界へ踏み出す</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Refined Jiu-Jitsu Programで、あなたの可能性を最大限に引き出しましょう</p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-100 transition-colors transform hover:scale-105 transition-transform duration-300">
            無料トライアルを開始
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-gray-700 transition-colors transform hover:scale-105 transition-transform duration-300">
            詳細を確認する
          </Button>
        </div>
      </div>
    </section>
  );
};

// フッターコンポーネント
const Footer = () => {
  // ... フッターの実装
}

// メインのホームページコンポーネント
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <CourseTabs />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}