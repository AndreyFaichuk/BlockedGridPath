import { FC } from "react";
import { BasePage } from "../../app/BasePage";
import { PAGES_MAP } from "../../constants";

export const GridPage: FC = () => {
  return (
    <BasePage.Root>
      <BasePage.Title title={PAGES_MAP.grid} />
      <BasePage.Content>
        <div>content</div>
      </BasePage.Content>
    </BasePage.Root>
  );
};
