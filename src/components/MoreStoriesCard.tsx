import { Link } from 'react-router';
import Tag from './Tag';

interface MoreStoriesCardProps {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const MoreStoriesCard: React.FC<MoreStoriesCardProps> = ({
  imageUrl,
  title,
  description,
  tags,
  link,
}) => {
  return (
    <Link to={link} className="gap-x-3 xl:mb-7 xl:items-center">
      <div className="mb-4 h-[170px] w-full overflow-hidden rounded-2xl">
        <img src={imageUrl} alt="new image" className="h-full w-full object-cover" />
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

        <p className="font-inter line-clamp-3 overflow-hidden text-sm text-ellipsis">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default MoreStoriesCard;
