import { Link } from 'react-router';
import Tag from './Tag';

interface HeadlineNewsCardProps {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const HeadlineNewsCard: React.FC<HeadlineNewsCardProps> = ({
  imageUrl,
  title,
  description,
  tags,
  link,
}) => (
  <Link to={link}>
    <div className="mb-5">
      <div className="overflow-hidden rounded-t-4xl">
        <img src={imageUrl} alt="news image" className="w-full" />
      </div>
      <h3 className="font-instrument-serif text-6xl">{title}</h3>
      <div className="my-5 flex flex-wrap gap-[10px]">
        {tags.map((tag, index) => (
          <Tag key={index} label={tag} />
        ))}
      </div>
      <p className="font-inter text-xl">{description}</p>
    </div>
  </Link>
);

export default HeadlineNewsCard;
