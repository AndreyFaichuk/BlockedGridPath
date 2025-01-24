import { FC } from "react";

type BasePageProps = {
  children: React.ReactNode;
};

type BasePageTitleProps = {
  title: string;
};

const BasePageRoot: FC<BasePageProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-6 bg-amber-100 h-fit p-5 rounded-xl">
      {children}
    </div>
  );
};

const BasePageTitle: React.FC<BasePageTitleProps> = ({ title }) => {
  return <h5 className="text-gray-500 text-2xl font-bold">{title}</h5>;
};

const BasePageContent: React.FC<BasePageProps> = ({ children }) => {
  return <div className="flex justify-center">{children}</div>;
};

export const BasePage = {
  Root: BasePageRoot,
  Title: BasePageTitle,
  Content: BasePageContent,
};
