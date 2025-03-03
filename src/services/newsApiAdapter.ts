import { Article, NewsApiResponse } from '../types/article';

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const fetchNewsAPI = async (): Promise<Article[]> => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${NEWS_API_KEY}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: NewsApiResponse = await response.json();

    return data.articles.map((article) => ({
      id: article.url,
      title: article.title,
      description: article.description,
      url: article.url,
      imageUrl: article.urlToImage || undefined,
      publishedAt: article.publishedAt,
      source: article.source.name,
      author: article.author || undefined,
      tags: [article.source.name || ''],
    }));
  } catch (error) {
    console.error('Error fetching data from NewsAPI:', error);
    return []; // Return an empty array in case of error
  }
};
