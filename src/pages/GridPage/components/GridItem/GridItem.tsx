import { FC } from "react";

import { CellItem } from "./components/CellItem";
import { checkIfStartCell } from "./GridItem.utils";
import { useGridManagement } from "./hooks/useGridManagement";
import { RowItem } from "./components/RowItem";
import { Button } from "../../../../components/shared/Button";

export const GridItem: FC = () => {
  const {
    grid,
    lastRowIndex,
    pathLength,
    handlers: {
      handleToggleCell,
      handleRandomizeCells,
      handleFindPath,
      handleResetGrid,
    },
  } = useGridManagement();

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-3">
        <Button
          text="Randomize"
          variant="info"
          onClick={handleRandomizeCells}
        />
        <Button text="Find Path" variant="action" onClick={handleFindPath} />
        <Button text="Reset" variant="danger" onClick={handleResetGrid} />

        {pathLength > 0 && (
          <h5 className="text-gray-500">Length of the path: {pathLength}</h5>
        )}
      </div>
      <div className="grid grid-cols-8 gap-1 p-2 h-full min-w-[45vw] min-h-[70vh] border border-black-500 rounded-sm">
        {grid.map((cells, rowIndex) => {
          const isFinishRow = rowIndex === lastRowIndex;

          return (
            <RowItem
              key={rowIndex}
              cells={cells}
              rowIndex={rowIndex}
              renderCell={(cell, rowIndex, cellIndex) => {
                const isStartCell = checkIfStartCell(rowIndex, cellIndex);
                const isFinishCell =
                  isFinishRow && cells.length - 1 === cellIndex;

                const onCellClick = () => handleToggleCell(rowIndex, cellIndex);

                return (
                  <CellItem
                    key={cellIndex}
                    isBlocked={cell.isBlocked}
                    isPath={cell.isPath}
                    isFinishCell={isFinishCell}
                    isStartCell={isStartCell}
                    onCellClick={onCellClick}
                  />
                );
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
