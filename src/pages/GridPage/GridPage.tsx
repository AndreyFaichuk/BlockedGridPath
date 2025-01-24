import { FC } from "react";
import { BasePage } from "../../app/BasePage";
import { PAGES_MAP } from "../../constants";
import { GridItem } from "./components/GridItem";

export const GridPage: FC = () => {
  return (
    <BasePage.Root>
      <BasePage.Title title={PAGES_MAP.grid} />
      <BasePage.Content>
        <GridItem />
      </BasePage.Content>
    </BasePage.Root>
  );
};
