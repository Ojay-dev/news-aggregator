// import Tag from './Tag';
import Tag from './Tag';
import { Article } from '../types/article';

const HeadlineNewsCard: React.FC<Article> = ({ imageUrl, title, description, url, tags }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <div className="mb-5">
      <div className="overflow-hidden rounded-t-4xl">
        <img src={imageUrl} alt="news image" className="w-full" />
      </div>
      <h3 className="font-instrument-serif mt-3 mb-5 text-6xl">{title}</h3>
      {tags && (
        <div className="my-5 flex flex-wrap gap-[10px]">
          {tags.map((tag, index) => (
            <Tag key={index} label={tag} />
          ))}
        </div>
      )}
      <p className="font-inter text-xl">{description}</p>
    </div>
  </a>
);

export default HeadlineNewsCard;
