export interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}