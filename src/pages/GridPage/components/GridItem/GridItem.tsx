import { FC, useState } from "react";
import { CellItem } from "./components/CellItem";
import { checkIfStartCell, generateRows } from "./GridItem.utils";
import { Cell } from "./components/CellItem/CellItem.types";

type RowProps = {
  cells: Cell[];
  rowIndex: number;
  isFinishRow: boolean;
  handleToggleCell(rowIndex: number, cellIndex: number): void;
};

const RowItem: FC<RowProps> = ({
  cells,
  rowIndex,
  isFinishRow,
  handleToggleCell,
}) => {
  return (
    <>
      {cells.map((cell, cellIndex) => {
        const isBlocked = cell.isBlocked;
        const isStartCell = checkIfStartCell(rowIndex, cellIndex);
        const isFinishCell = isFinishRow && cells.length - 1 === cellIndex;

        const onCellClick = () => handleToggleCell(rowIndex, cellIndex);

        return (
          <CellItem
            key={cellIndex}
            isBlocked={isBlocked}
            isFinishCell={isFinishCell}
            isStartCell={isStartCell}
            onCellClick={onCellClick}
          />
        );
      })}
    </>
  );
};

export const GridItem: FC = () => {
  const [grid, setGrid] = useState(generateRows);

  const lastRowIndex = grid.length - 1;

  const handleToggleCell = (rowIndex: number, cellIndex: number) => {
    const isStartCell = checkIfStartCell(rowIndex, cellIndex);

    if (
      isStartCell ||
      (lastRowIndex === rowIndex && cellIndex === grid[rowIndex].length - 1)
    ) {
      return;
    }

    setGrid((prevState) => {
      return prevState.map((row, rIndex) =>
        rIndex === rowIndex
          ? row.map((cell, cIndex) =>
              cIndex === cellIndex
                ? { ...cell, isBlocked: !cell.isBlocked }
                : cell
            )
          : row
      );
    });
  };

  return (
    <div className="grid grid-cols-8 gap-2 p-3 h-full min-w-[70vw] min-h-[70vh] border border-black-500 rounded-sm">
      {grid.map((cells, i) => {
        const isFinishRow = i === lastRowIndex;

        return (
          <RowItem
            cells={cells}
            key={i}
            rowIndex={i}
            isFinishRow={isFinishRow}
            handleToggleCell={handleToggleCell}
          />
        );
      })}
    </div>
  );
};
