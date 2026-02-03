import type { ReactNode } from "react";

export interface LayoutGridProps<T> {
  renderItem: (item: T, index: number) => ReactNode;
  list: readonly T[];
  num: number;
}
const LayoutGrid = <T,>({
  renderItem,
  list,
  num,
}: LayoutGridProps<T>) => {
  const row = Math.ceil(list.length / num);

  return (
    <div>
      {Array.from({ length: row }).map((_, rowIndex) => {
        const rowItems = list.slice(rowIndex * num, rowIndex * num + num);

        return (
          <div key={rowIndex}>
            <div className="flex">
              {rowItems.map((item, colIndex) => (
                <div key={colIndex} className="flex-1 flex">
                  {renderItem(item, colIndex)}
                  {colIndex < rowItems.length - 1 && (
                    <div className="border-r border-[rgba(255,255,255,0.1)]"></div>
                  )}
                </div>
              ))}
            </div>
            {rowIndex < row - 1 && (
              <div className="border-b border-[rgba(255,255,255,0.1)]"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export { LayoutGrid };
