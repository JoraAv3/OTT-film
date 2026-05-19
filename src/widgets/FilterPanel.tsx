import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import { cn } from '@/shared/lib/utils';

interface FilterPanelProps {
  onFilter: (filters: any) => void;
}

export const FilterPanel = ({ onFilter }: FilterPanelProps) => {
  const [activeFilters, setActiveFilters] = useState({
    genre: '',
    year: '',
    rating: ''
  });

  const genres = ['Action', 'Sci-Fi', 'Thriller', 'Drama', 'Fantasy', 'Comedy', 'Horror', 'Documentary'];
  const years = ['2024', '2023', '2022'];
  const ratings = ['9.0', '8.0', '7.0'];

  const handleSelect = (key: string, value: string) => {
    const newVal = activeFilters[key as keyof typeof activeFilters] === value ? '' : value;
    const newFilters = { ...activeFilters, [key]: newVal };
    setActiveFilters(newFilters);
    onFilter(newFilters);
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <FilterDropdown
        label="Genre"
        options={genres}
        value={activeFilters.genre}
        onSelect={(val) => handleSelect('genre', val)}
      />
      <FilterDropdown
        label="Year"
        options={years}
        value={activeFilters.year}
        onSelect={(val) => handleSelect('year', val)}
      />
      <FilterDropdown
        label="Rating"
        options={ratings}
        value={activeFilters.rating}
        onSelect={(val) => handleSelect('rating', val)}
        format={(v) => `${v}+`}
      />
    </div>
  );
};

interface FilterDropdownProps {
  label: string;
  options: string[];
  value: string;
  onSelect: (val: string) => void;
  format?: (val: string) => string;
}

const FilterDropdown = ({ label, options, value, onSelect, format }: FilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all",
          value
            ? "bg-accent border-accent text-white"
            : "bg-white dark:bg-[#1C1C24] border-black/10 dark:border-white/10 hover:border-accent"
        )}
      >
        {value ? (format ? format(value) : value) : label}
        <ChevronDown size={14} className={cn("transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-[#1C1C24] rounded-xl shadow-2xl border border-black/5 dark:border-white/5 z-50 py-2 max-h-60 overflow-y-auto no-scrollbar">
            {options.map(opt => (
              <button
                key={opt}
                onClick={() => {
                  onSelect(opt);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full text-left px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors",
                  value === opt && "text-accent font-bold"
                )}
              >
                {format ? format(opt) : opt}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
