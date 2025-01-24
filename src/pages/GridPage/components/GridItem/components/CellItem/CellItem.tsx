import { FC } from "react";
import classNames from "classnames";

import { Cell } from "./CellItem.types";

type CellItemProps = Cell & {
  isStartCell: boolean;
  isFinishCell: boolean;
  onCellClick: VoidFunction;
};

export const CellItem: FC<CellItemProps> = ({
  isBlocked,
  isFinishCell,
  isStartCell,
  onCellClick,
}) => {
  return (
    <div className="flex items-center justify-center">
      <div
        onClick={onCellClick}
        className={classNames(
          "shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-200 ease-in-out cursor-pointer w-30 h-30 flex items-center justify-center",
          {
            "bg-green-100": !isBlocked,
            "bg-red-100": isBlocked,
          }
        )}
      >
        {isStartCell && "Start"}
        {isFinishCell && "Finish"}
      </div>
    </div>
  );
};
