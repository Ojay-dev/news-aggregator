import DefaultLayout from '../../layout';
import FilterPill from '../../components/FilterPill';
import HeadlineNewsCard from '../../components/HeadlineNewsCard';
import NewsCard from '../../components/NewsCard';
import Pagination from '../../components/Pagination';
import SearchInput from '../../components/SearchInput';
import { useEffect, useState } from 'react';
import { fetchNewsAPI } from '../../services/newsApiAdapter';
import { Article } from '../../types/article';
import { ClipLoader } from 'react-spinners';

const HomePage = () => {
  const [headlineNews, setHeadlineNews] = useState<Article>({
    id: '',
    title: '',
    description: '',
    url: '',
    imageUrl: '',
    publishedAt: '',
    source: '',
    category: '',
    author: '',
  });

  const [allNews, setAllNews] = useState<Article[]>([]); // State for all fetched articles
  const [currentPage, setCurrentPage] = useState(1); // Track the current page (starts at 1)
  const [totalResults, setTotalResults] = useState(0); // Track total number of articles
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [selectedSources, setSelectedSources] = useState<string[]>([]); // State for selected sources
  const itemsPerPage = 3; // Number of items to display per page

  const sources = [
    { label: 'BBC', value: 'bbc-news' },
    { label: 'CNN', value: 'cnn', icon: 'src/assets/svgs/cancel-circle.svg' },
    { label: 'FOX', value: 'fox-news' },
    { label: 'AL JAZEERA', value: 'al-jazeera-english' },
    { label: 'REUTERS', value: 'reuters', icon: 'src/assets/svgs/cancel-circle.svg' },
    { label: 'THE GUARDIAN', value: 'the-guardian-uk' },
  ];

  useEffect(() => {
    getNewsApi(currentPage, searchQuery, selectedSources);
  }, [currentPage, searchQuery, selectedSources]);

  const getNewsApi = async (page: number, query: string, sources: string[]) => {
    setIsLoading(true);
    try {
      const { articles, totalResults: apiTotalResults } = await fetchNewsAPI(page, query, sources);
      console.log(articles);

      if (articles.length > 0) {
        if (page === 1) {
          // Set the first article as the headline
          setHeadlineNews(articles[0]);
          setAllNews(articles.slice(1)); // Set the remaining articles
        } else {
          setAllNews((prevNews) => [...prevNews, ...articles]); // Append new articles
        }
        setTotalResults(apiTotalResults); // Update total results
      }
    } catch (error) {
      console.error('Error fetching data from NewsAPI:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle search input change
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to the first page when searching
  };

  // Handle source filter change
  const handleSourceFilter = (source: string) => {
    setSelectedSources(
      (prevSources) =>
        prevSources.includes(source)
          ? prevSources.filter((s) => s !== source) // Remove source if already selected
          : [...prevSources, source] // Add source if not selected
    );
    setCurrentPage(1); // Reset to the first page when filtering
  };

  // Calculate the subset of articles to display based on the current page
  const getVisibleArticles = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return allNews.slice(startIndex, startIndex + itemsPerPage);
  };

  // Handle next button click
  const handleNext = () => {
    const nextPageStartIndex = currentPage * itemsPerPage;

    if (nextPageStartIndex >= allNews.length && allNews.length < totalResults) {
      // Fetch the next page from the server if the current data is exhausted
      setCurrentPage(currentPage + 1);
    } else if (nextPageStartIndex < allNews.length) {
      // Use client-side pagination if there's enough data
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle previous button click
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Check if the end of the data is reached
  const isEndReached = allNews.length >= totalResults;

  return (
    <DefaultLayout>
      <>
        <div className="lg:grid lg:grid-cols-[1fr_3fr_1.5fr] lg:gap-x-5 xl:grid-cols-[1.3fr_2.5fr_2fr]">
          <div className="hidden lg:block">
            <SearchInput placeholder="Search" onSearch={handleSearch} />

            <div>
              <h3 className="font-inter mb-3 text-base font-bold">Sources</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {sources.map((source) => (
                  <FilterPill
                    key={source.value}
                    label={source.label}
                    isActive={selectedSources.includes(source.value)}
                    onClick={() => handleSourceFilter(source.value)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mb-7">
            {/* Always show the headline news */}
            {headlineNews.title ? (
              <HeadlineNewsCard {...headlineNews} />
            ) : (
              <div className="rounded-lg bg-gray-100 p-6 text-center">
                <p className="text-gray-600">No headline news available.</p>
              </div>
            )}
          </div>

          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-inter text-xl font-bold lg:text-2xl">Top Stories</h2>

              <Pagination
                currentPage={currentPage}
                totalItems={totalResults}
                itemsPerPage={itemsPerPage}
                onNext={handleNext}
                onPrevious={handlePrevious}
                isLoading={isLoading}
                isEndReached={isEndReached} // Pass isEndReached to Pagination
              />
            </div>

            {/* Display loading indicator while fetching data */}
            {isLoading ? (
              <div className="flex h-40 items-center justify-center">
                <ClipLoader color="#0307E4" size={40} />
              </div>
            ) : (
              <>
                {getVisibleArticles().length > 0 ? (
                  getVisibleArticles().map((article) => <NewsCard key={article.id} {...article} />)
                ) : (
                  <div className="rounded-lg bg-gray-100 p-6 text-center">
                    <p className="text-gray-600">No news available.</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </>
    </DefaultLayout>
  );
};

export default HomePage;
