'use client';

import { useState } from 'react';
import { Article } from './components/ArticleCard';
import Hero from './components/Hero';
import MainBody from './components/MainBody';


interface Props {
  initialArticles: Article[];
}

export default function HomeClient({ initialArticles }: Props) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [articles,] = useState<Article[]>(initialArticles);

  return (
    <div>
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <MainBody searchTerm={searchTerm} articles={articles} />
    </div>
  );
}