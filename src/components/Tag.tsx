interface TagProps {
  label: string;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ label, className }) => (
  <span className={`font-inter rounded-3xl bg-[#F0F0F0] px-4 py-2 text-sm ${className}`}>
    {label}
  </span>
);

export default Tag;
