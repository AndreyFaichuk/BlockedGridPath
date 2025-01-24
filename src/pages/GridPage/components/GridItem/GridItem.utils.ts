import { DEFAULT_ROWS_AND_CELLS_VALUES } from "../../../../constants";
import { Cell } from "./components/CellItem/CellItem.types";

const generateCells = (cells: number): Cell[] =>
  Array.from({ length: cells }, () => ({ isBlocked: false }));

export const generateRows = (): Cell[][] =>
  Array.from({ length: DEFAULT_ROWS_AND_CELLS_VALUES.rows }, () =>
    generateCells(DEFAULT_ROWS_AND_CELLS_VALUES.cells)
  );

export const checkIfStartCell = (
  rowIndex: number,
  cellIndex: number
): boolean => rowIndex === 0 && cellIndex === 0;
