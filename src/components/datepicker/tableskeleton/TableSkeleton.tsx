import tableStyles from "./tableskeleton.module.scss";

interface Props {
  rows?: number;
}

const TableSkeleton = ({ rows = 5 }: Props) => {
  return (
    <div className={tableStyles.skeletonWrapper}>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className={tableStyles.skeletonRow}>
          {Array.from({ length: 6 }).map((_, colIndex) => (
            <div key={colIndex} className={tableStyles.skeletonCell}>
              <div className={tableStyles.skeleton} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableSkeleton;