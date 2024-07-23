import { useEffect, useMemo, useState } from "react";
import { useRows } from ".";

const usePagination = (type) => {
  const [rows, setRows] = useState([]);
  const [allRows, setAllRows] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const fetchedRows = useRows(type);
  const [totalPages, setTotalPages] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [startIndex, setStartIndex] = useState(0);

  const hasNext = useMemo(() => {
    return (
      allRows.length / rowsPerPage > 0 &&
      currentPageNumber <= allRows.length / rowsPerPage - 1
    );
  }, [allRows, rowsPerPage, currentPageNumber]);

  const hasPrevious = useMemo(() => {
    return startIndex !== 0;
  }, [startIndex]);

  useEffect(() => {
    fetchedRows.then((rows) => {
      setAllRows(rows);
    });
  }, []);

  useEffect(() => {
    getRows(startIndex, startIndex + rowsPerPage);
    const totalPages = allRows.length / rowsPerPage;
    setTotalPages(Math.ceil(totalPages));
  }, [allRows]);

  const getRows = (startIndex, endIndex) => {
    const requiredRows = [...allRows.slice(startIndex, endIndex)];
    setRows(requiredRows);
  };

  const previousPage = () => {
    if (currentPageNumber === 1) return;
    getRows(startIndex - rowsPerPage, startIndex);
    setStartIndex((prev) => prev - rowsPerPage);
    setCurrentPageNumber((prev) => prev - 1);
  };

  const nextPage = () => {
    if (currentPageNumber === totalPages) return;
    getRows(startIndex + rowsPerPage, startIndex + rowsPerPage * 2);
    setStartIndex((prev) => prev + rowsPerPage);
    setCurrentPageNumber((prev) => prev + 1);
  };

  const handlePerPageChange = (value) => {
    const rowsPerPage = parseInt(value);
    setRowsPerPage(rowsPerPage);
    const totalPages = allRows.length / rowsPerPage;
    setTotalPages(Math.ceil(totalPages));
    const cpage = startIndex / totalPages + 1;
    setCurrentPageNumber(cpage);
    getRows(startIndex, startIndex + rowsPerPage);
  };

  return {
    rows,
    previousPage,
    nextPage,
    totalPages,
    currentPageNumber,
    handlePerPageChange,
    hasPrevious,
    hasNext,
  };
};

export { usePagination };
