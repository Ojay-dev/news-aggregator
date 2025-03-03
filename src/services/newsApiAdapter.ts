import { Article, NewsApiResponse } from '../types/article';

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const fetchNewsAPI = async (
  page: number = 1,
  query: string = '',
  sources: string[] = [] // Accept an array of sources
): Promise<{ articles: Article[]; totalResults: number }> => {
  try {
    // Build the API URL with query and source parameters
    let url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&page=${page}&apiKey=${NEWS_API_KEY}`;
    if (query) {
      url += `&q=${encodeURIComponent(query)}`;
    }
    if (sources.length > 0) {
      url += `&sources=${sources.join(',')}`; // Join multiple sources with a comma
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: NewsApiResponse = await response.json();

    const articles = data.articles.map((article) => ({
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

    return { articles, totalResults: data.totalResults };
  } catch (error) {
    console.error('Error fetching data from NewsAPI:', error);
    return { articles: [], totalResults: 0 }; // Return empty data in case of error
  }
};
