import { Cell } from "./pages/GridPage/components/GridItem/components/CellItem/CellItem.types";

export const PAGES_MAP = {
  grid: "Blocked Grid Path",
} as const;

export const DEFAULT_ROWS_AND_CELLS_VALUES: Record<
  "rows" | "cells" | "randomCellsNumber",
  number
> = {
  rows: 8,
  cells: 8,
  randomCellsNumber: 5,
} as const;

export const DEFAULT_CELL: Cell = { isBlocked: false, isPath: false };

export const DIRECTIONS = [
  [1, 0], // Down
  [0, 1], // Right
  [0, -1], // Left
  [-1, 0], // Up
] as const;
