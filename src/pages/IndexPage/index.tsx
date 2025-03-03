import DefaultLayout from '../../layout';
import FilterPill from '../../components/FilterPill';
import HeadlineNewsCard from '../../components/HeadlineNewsCard';
import NewsCard from '../../components/NewsCard';
import { useEffect, useState } from 'react';
import { fetchNewsAPI } from '../../services/newsApiAdapter';
import { Article } from '../../types/article';

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

  const [otherNews, setOtherNews] = useState<Article[]>([]); // State for the remaining articles

  const sources = [
    { label: 'BBC' },
    { label: 'CNN', icon: 'src/assets/svgs/cancel-circle.svg' },
    { label: 'FOX' },
    { label: 'AL JAZEERA' },
    { label: 'REUTERS', icon: 'src/assets/svgs/cancel-circle.svg' },
    { label: 'THE GUARDIAN' },
  ];

  useEffect(() => {
    getNewsApi();
  }, []);

  const getNewsApi = async () => {
    const response = await fetchNewsAPI();
    console.log(response);

    if (response.length > 0) {
      setHeadlineNews(response[0]); // Set the first article as the headline
      setOtherNews(response.slice(1)); // Set the remaining articles
    }
  };

  return (
    <DefaultLayout>
      <>
        <div className="lg:grid lg:grid-cols-[1fr_3fr_1.5fr] lg:gap-x-5 xl:grid-cols-[1.3fr_2.5fr_2fr]">
          <div className="hidden lg:block">
            <div className="relative mb-[30px]">
              <img
                src="src/assets/svgs/ai-search-02.svg"
                alt="search icon"
                className="absolute top-3 left-4"
              />
              <input
                className="w-full rounded-lg border-[1.5px] border-[#A6A6A6] px-4 py-3 pl-12"
                type="search"
                placeholder="Search"
              />
            </div>

            <div>
              <h3 className="font-inter mb-3 text-base font-bold">Sources</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {sources.map((source, index) => (
                  <FilterPill key={index} label={source.label} />
                ))}
              </div>
            </div>
          </div>

          <div className="mb-7">
            <HeadlineNewsCard {...headlineNews} />
          </div>

          <div>
            <div className="mb-6">
              <h2 className="font-inter text-xl font-bold lg:text-2xl">Top Stories</h2>
            </div>

            {otherNews.map((article, index) => (
              <NewsCard key={index} {...article} />
            ))}
          </div>
        </div>
      </>
    </DefaultLayout>
  );
};

export default HomePage;
