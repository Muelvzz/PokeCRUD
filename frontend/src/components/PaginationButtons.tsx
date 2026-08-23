import type { PagesProps } from "../types/paginationType"

// seperate file
type PaginationButtonsProps = Pick<
  PagesProps,
  "totalPages" | "currentPage" | "setCurrentPage"
>

// seperate file
function getVisiblePages(
  activePage: number,
  totalPages: number
): (number | "ellipsis")[] {
  const windowSize = 3
  const windowStart = Math.max(1, activePage - Math.floor(windowSize / 2))
  const windowEnd = Math.min(totalPages, windowStart + windowSize - 1)

  const pages: (number | "ellipsis")[] = []
  for (let page = windowStart; page <= windowEnd; page++) {
    pages.push(page)
  }

  if (windowEnd < totalPages) {
    if (windowEnd < totalPages - 1) {
      pages.push("ellipsis")
    }
    pages.push(totalPages)
  }

  return pages
}

// seperate file
function PaginationButtons({
  totalPages,
  currentPage,
  setCurrentPage,
}: PaginationButtonsProps) {
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  const visiblePages = getVisiblePages(currentPage, totalPages)

  return (
    <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 mt-14">
      <button
        type="button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent sm:h-9 sm:w-9"
      >
        &#8249;
      </button>

      {visiblePages.map((value, index) =>
        value === "ellipsis" ? (
          <span
            key={`ellipsis-${index}`}
            className="flex h-8 w-8 items-center justify-center text-sm text-neutral-500 sm:h-9 sm:w-9"
          >
            ...
          </span>
        ) : (
          <button
            key={value}
            type="button"
            onClick={() => handlePageChange(value)}
            aria-current={value === currentPage ? "page" : undefined}
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors sm:h-9 sm:w-9 ${
              value === currentPage
                ? "bg-neutral-200 font-medium text-neutral-900"
                : "text-neutral-700 hover:bg-neutral-100"
            }`}
          >
            {value}
          </button>
        )
      )}

      <button
        type="button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent sm:h-9 sm:w-9"
      >
        &#8250;
      </button>
    </div>
  )
}

export default PaginationButtons