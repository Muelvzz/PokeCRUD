export interface PagesProps {
  totalPages: number
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}