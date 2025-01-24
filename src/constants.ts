export const PAGES_MAP = {
  grid: "Blocked Grid Path",
} as const;

export const DEFAULT_ROWS_AND_CELLS_VALUES: Record<"rows" | "cells", number> = {
  rows: 8,
  cells: 8,
} as const;
