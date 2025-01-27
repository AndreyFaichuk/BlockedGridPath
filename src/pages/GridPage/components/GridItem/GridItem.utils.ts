import {
  DEFAULT_CELL,
  DEFAULT_ROWS_AND_CELLS_VALUES,
} from "../../../../constants";
import { Cell } from "./components/CellItem/CellItem.types";

type CheckIfCellInGridProps = {
  rowIndex: number;
  cellIndex: number;
  rows: number;
  cols: number;
};

type CheckIfCellPartOfPath = {
  rowIndex: number;
  cellIndex: number;
  path: [number, number][];
};

const getRandomIndex = <T>(array: T[]): number =>
  Math.floor(Math.random() * array.length);

const generateCells = (cells: number): Cell[] =>
  Array.from({ length: cells }, () => DEFAULT_CELL);

export const generateRows = (): Cell[][] =>
  Array.from({ length: DEFAULT_ROWS_AND_CELLS_VALUES.rows }, () =>
    generateCells(DEFAULT_ROWS_AND_CELLS_VALUES.cells)
  );

export const checkIfStartCell = (
  rowIndex: number,
  cellIndex: number
): boolean => rowIndex === 0 && cellIndex === 0;

export const getRandomCells = (array: Cell[][]) => {
  const randomRowIndex = getRandomIndex(array);
  const randomCellIndex = getRandomIndex(array[randomRowIndex]);

  return {
    randomRowIndex,
    randomCellIndex,
  };
};

export const getVisitedCells = () =>
  Array.from({ length: DEFAULT_ROWS_AND_CELLS_VALUES.rows }, () =>
    Array.from({ length: DEFAULT_ROWS_AND_CELLS_VALUES.cells }, () => false)
  );

export const checkIfCellInGrid = ({
  rowIndex,
  cellIndex,
  rows,
  cols,
}: CheckIfCellInGridProps) =>
  cellIndex >= 0 && rowIndex >= 0 && cellIndex < cols && rowIndex < rows;

export const checkIfCellPartOfPath = ({
  rowIndex,
  cellIndex,
  path,
}: CheckIfCellPartOfPath) => {
  return path.some(
    ([pathRowIndex, pathCellIndex]) =>
      pathRowIndex === rowIndex && pathCellIndex === cellIndex
  );
};
