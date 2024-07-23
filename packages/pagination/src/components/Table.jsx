import { useColumns, usePagination } from "../hooks";

const Table = ({ header, type, hasPagination }) => {
  const columns = useColumns(type);
  const {
    rows,
    currentPageNumber,
    totalPages,
    handlePerPageChange,
    previousPage,
    nextPage,
    hasPrevious,
    hasNext,
  } = usePagination(type);

  return (
    <div className="w-3/4">
      <div className={`overflow-y-scroll`} style={{ height: "400px" }}>
        <table className="">
          <tr>
            {columns.map((column) => (
              <th>{column}</th>
            ))}
          </tr>
          {rows.map((row) => (
            <tr>
              {Object.values(row).map((v) => (
                <td>{v}</td>
              ))}
            </tr>
          ))}
        </table>
      </div>
      {hasPagination && (
        <div className="flex justify-between">
          <button onClick={previousPage} disabled={!hasPrevious}>
            Previous
          </button>
          <div className="flex flex-col">
            <div>
              <label for="rows per page">Rows per page:</label>
              <select
                name="rows per page"
                onChange={(e) => handlePerPageChange(e.target.value)}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
            </div>
            <div>
              <label for="page number">Page No:</label>
              <span name="page number">
                {currentPageNumber} of {totalPages}
              </span>
            </div>
          </div>
          <button onClick={nextPage} disabled={!hasNext}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
