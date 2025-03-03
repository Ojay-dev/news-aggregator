import CancelCircle from '../assets/svgs/cancel-circle.svg';

interface FilterPillProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterPill: React.FC<FilterPillProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`font-inter flex cursor-pointer gap-x-2 rounded-3xl px-4 py-2 text-base ${isActive ? 'bg-[#1E1E1E] text-white' : 'bg-[#F0F0F0]'}`}
      onClick={onClick}
    >
      {label}

      {isActive ? <img src={CancelCircle} alt="cancel icon" /> : null}
    </button>
  );
};

export default FilterPill;
