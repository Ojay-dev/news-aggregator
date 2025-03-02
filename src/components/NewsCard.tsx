import { Link } from 'react-router';
import Tag from './Tag';

interface NewsCardProps {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ imageUrl, title, description, tags, link }) => (
  <Link
    to={link}
    className="mb-9 grid grid-cols-[1fr_2.5fr] gap-x-3 lg:grid-cols-1 xl:mb-7 xl:grid-cols-[1fr_2.5fr] xl:items-center"
  >
    <div className="h-full w-full overflow-hidden rounded-2xl lg:mb-5 lg:h-[170px] lg:w-full xl:mb-0 xl:w-[154px]">
      <img src={imageUrl} alt="news image" className="h-full w-full object-cover" />
    </div>
    <div>
      <div className="flex flex-nowrap gap-[10px] overflow-x-auto">
        {tags.map((tag, index) => (
          <Tag key={index} label={tag} className="px-2.5 py-1.5 text-[10px]" />
        ))}
      </div>
      <h3 className="font-instrument-serif my-2 line-clamp-2 overflow-hidden text-2xl text-ellipsis">
        {title}
      </h3>
      <p className="font-inter line-clamp-2 overflow-hidden text-sm text-ellipsis">{description}</p>
    </div>
  </Link>
);

export default NewsCard;
