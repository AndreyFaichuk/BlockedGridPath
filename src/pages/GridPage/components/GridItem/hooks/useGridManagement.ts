import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  checkIfCellInGrid,
  checkIfCellPartOfPath,
  checkIfStartCell,
  generateRows,
  getRandomCells,
  getVisitedCells,
} from "../GridItem.utils";
import {
  DEFAULT_ROWS_AND_CELLS_VALUES,
  DIRECTIONS,
} from "../../../../../constants";
import { Cell } from "../components/CellItem/CellItem.types";

export const useGridManagement = () => {
  const [grid, setGrid] = useState<Cell[][]>(generateRows);
  const [pathLength, setPathLenth] = useState<number>(0);

  const [shouldCalculatePath, setShouldCalculatePath] =
    useState<boolean>(false);

  useEffect(() => {
    if (shouldCalculatePath) {
      handleFindPath();
      setShouldCalculatePath(false);
    }
  }, [shouldCalculatePath]);

  const lastRowIndex = grid.length - 1;

  const clearPathHighlight = () => {
    setGrid((prevGrid) =>
      prevGrid.map((row) =>
        row.map((cell) => ({
          ...cell,
          isPath: false,
        }))
      )
    );
  };

  const updateGridWithPath = (path: [number, number][]) => {
    setPathLenth(path.length);

    setGrid((prevGrid) =>
      prevGrid.map((row, rowIndex) =>
        row.map((cell, cellIndex) => {
          return {
            ...cell,
            isPath: checkIfCellPartOfPath({ rowIndex, cellIndex, path }),
          };
        })
      )
    );
  };

  const handleFindPath = () => {
    const rows = grid.length;
    const cols = grid[0].length;

    const isCellAccessible = (rowIndex: number, cellIndex: number): boolean => {
      const isCellInGrid = checkIfCellInGrid({
        rowIndex,
        cellIndex,
        rows,
        cols,
      });

      return (
        isCellInGrid &&
        !grid[rowIndex][cellIndex].isBlocked &&
        !visitedCells[rowIndex][cellIndex]
      );
    };

    // Array for tracking visited cells
    const visitedCells = getVisitedCells();

    const pathQueue: [number, number, [number, number][]][] = [
      [0, 0, [[0, 0]]], // Start cell
    ];

    visitedCells[0][0] = true; // Mark the starting cell as visited

    while (pathQueue.length > 0) {
      // Take the first cell from the queue
      const firstElementInPath = pathQueue.shift();

      if (!firstElementInPath) return;

      const [rowIndex, cellIndex, path] = firstElementInPath;

      // Check if we've reached the last cell
      if (rowIndex === rows - 1 && cellIndex === cols - 1) {
        updateGridWithPath(path);
        return;
      }

      // Process neighboring cells (up, down, left, right)
      for (const [rowOffset, colOffset] of DIRECTIONS) {
        const nextRowIndex = rowIndex + rowOffset;
        const nextCellIndex = cellIndex + colOffset;

        // Check if we can access the neighboring cell
        if (isCellAccessible(nextRowIndex, nextCellIndex)) {
          visitedCells[nextRowIndex][nextCellIndex] = true; // Mark the cell as visited

          // Add the neighboring cell to the queue with the updated path
          pathQueue.push([
            nextRowIndex,
            nextCellIndex,
            [...path, [nextRowIndex, nextCellIndex]],
          ]);
        }
      }
    }

    clearPathHighlight();
    setPathLenth(0);
    toast.error("There is no path!");
  };

  const handleToggleCell = (rowIndex: number, cellIndex: number) => {
    const isStartCell = checkIfStartCell(rowIndex, cellIndex);

    if (
      isStartCell ||
      (lastRowIndex === rowIndex && cellIndex === grid[rowIndex].length - 1)
    ) {
      return;
    }

    setGrid((prevGrid) =>
      prevGrid.map((row, rIndex) =>
        rIndex === rowIndex
          ? row.map((cell, cIndex) =>
              cIndex === cellIndex
                ? { ...cell, isBlocked: !cell.isBlocked }
                : cell
            )
          : row
      )
    );
  };

  const handleRandomizeCells = () => {
    let counter = 0;

    while (counter < DEFAULT_ROWS_AND_CELLS_VALUES.randomCellsNumber) {
      const { randomRowIndex, randomCellIndex } = getRandomCells(grid);

      handleToggleCell(randomRowIndex, randomCellIndex);

      counter++;
    }

    setShouldCalculatePath(true);
  };

  const handleResetGrid = () => {
    setGrid(generateRows());
    setPathLenth(0);
  };

  return {
    grid,
    lastRowIndex,
    pathLength,
    handlers: {
      handleToggleCell,
      handleRandomizeCells,
      handleFindPath,
      handleResetGrid,
    },
  };
};
