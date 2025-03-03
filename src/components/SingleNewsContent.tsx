import Tag from '../components/Tag';

interface SingleNewsContentProps {
  title: string;
  tags: string[];
  imageUrl: string;
  content: string;
}

const SingleNewsContent: React.FC<SingleNewsContentProps> = ({
  title,
  tags,
  imageUrl,
  content,
}) => (
  <div className="mx-auto mb-28 max-w-3xl">
    <h3 className="font-instrument-serif text-6xl">{title}</h3>

    <div className="my-5 flex flex-wrap gap-[10px]">
      {tags.map((tag, index) => (
        <Tag key={index} label={tag} />
      ))}
    </div>

    <div className="mb-5 overflow-hidden">
      <img src={imageUrl} alt="news image" className="w-full" />
    </div>

    <p className="font-inter text-xl" dangerouslySetInnerHTML={{ __html: content }} />
  </div>
);

export default SingleNewsContent;
