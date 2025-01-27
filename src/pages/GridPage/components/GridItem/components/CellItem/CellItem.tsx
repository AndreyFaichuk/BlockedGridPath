import { FC } from "react";
import classNames from "classnames";

import { Cell } from "./CellItem.types";
import { getBgColor } from "./CellItem.utils";
import { ColorMotion } from "../../../../../../components/shared/ColorMotion";

type CellItemProps = Cell & {
  isStartCell: boolean;
  isFinishCell: boolean;
  onCellClick: VoidFunction;
};

export const CellItem: FC<CellItemProps> = ({
  isBlocked,
  isFinishCell,
  isStartCell,
  isPath,
  onCellClick,
}) => {
  const bgColorClass = getBgColor(isBlocked, isPath);

  return (
    <div className="flex items-center justify-center">
      <ColorMotion isPath={isPath}>
        <div
          onClick={onCellClick}
          className={classNames(
            "shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-200 ease-in-out cursor-pointer w-30 h-30 flex items-center justify-center",
            bgColorClass
          )}
        >
          {isStartCell && "Start"}
          {isFinishCell && "Finish"}
        </div>
      </ColorMotion>
    </div>
  );
};
