import { get } from "lodash";

export interface LayoutGridProps {
  renderItem: (item: any, index: number) => React.ReactNode;
  list: any[];
  num: number;
}
const LayoutGrid: React.FC<LayoutGridProps> = ({ renderItem, list, num }) => {
  const row = Math.ceil(list.length / num);

  return (
    <div>
      {Array.from({ length: row }).map((_, rowIndex) => {
        return (
          <div key={rowIndex}>
            <div className="flex">
              {Array.from({ length: num * row })
                .slice(rowIndex * num, (rowIndex + 1) * num)
                .map((item, colIndex) => {
                  return (
                    <div key={colIndex} className="flex-1 flex">
                      {renderItem(
                        get(list, rowIndex * num + colIndex, {}),
                        colIndex
                      )}
                      {colIndex < num - 1 && (
                        <div className="border-r border-[rgba(255,255,255,0.1)]"></div>
                      )}
                    </div>
                  );
                })}
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
