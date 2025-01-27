import { FC } from "react";
import { Cell } from "../CellItem/CellItem.types";

type RowProps = {
  cells: Cell[];
  rowIndex: number;
  renderCell: (cell: Cell, rowIndex: number, cellIndex: number) => JSX.Element;
};

export const RowItem: FC<RowProps> = ({ cells, rowIndex, renderCell }) => {
  return (
    <>{cells.map((cell, cellIndex) => renderCell(cell, rowIndex, cellIndex))}</>
  );
};
