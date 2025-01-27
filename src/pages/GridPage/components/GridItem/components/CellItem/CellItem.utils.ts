export const getBgColor = (isBlocked: boolean, isPath: boolean) => {
  if (isBlocked) return "bg-red-100";
  if (isPath) return "bg-purple-300";

  return "bg-green-100";
};
