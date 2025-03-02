import DefaultLayout from '../../layout';
import FilterPill from '../../components/FilterPill';
import HeadlineNewsCard from '../../components/HeadlineNewsCard';
import NewsCard from '../../components/NewsCard';

const HomePage = () => {
  const sources = [
    { label: 'BBC' },
    { label: 'CNN', icon: 'src/assets/svgs/cancel-circle.svg' },
    { label: 'FOX' },
    { label: 'AL JAZEERA' },
    { label: 'REUTERS', icon: 'src/assets/svgs/cancel-circle.svg' },
    { label: 'THE GUARDIAN' },
  ];

  const mainArticle = {
    imageUrl: 'https://placehold.co/1280x720',
    title: 'Apple Unveils AI-Powered iPhone at Global Event',
    description:
      'Apple has announced its latest iPhone model featuring AI-powered tools and a revamped camera system to enhance user experience.',
    tags: ['5m read', '1h ago', 'Technology', 'From TechCrunch'],
    link: '/article/123',
  };

  const topStories = Array.from({ length: 3 }).map(() => ({
    imageUrl: 'https://placehold.co/1700x1540',
    title: 'Tesla’s Stock Surges 12% After Record Sales Announcement',
    description:
      'Apple has announced its latest iPhone model featuring AI-powered tools and a revamped camera system to enhance user experience.',
    tags: ['Technology', 'From TechCrunch'],
    link: '/article/123',
  }));

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
            <HeadlineNewsCard {...mainArticle} />
          </div>

          <div>
            <div className="mb-6">
              <h2 className="font-inter text-xl font-bold lg:text-2xl">Top Stories</h2>
            </div>

            {topStories.map((story, index) => (
              <NewsCard key={index} {...story} />
            ))}
          </div>
        </div>
      </>
    </DefaultLayout>
  );
};

export default HomePage;
