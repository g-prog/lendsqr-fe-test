import detailsStyles from "../userdetails.module.scss";

interface InfoItem {
  label: string;
  value: string;
}

interface SectionProps {
  title: string;
  items: InfoItem[];
  show: boolean;
}

const DetailsSection = ({ title, items, show = true }: SectionProps) => {
  return (
    <div className={detailsStyles.section}>
      <h4 className={detailsStyles.sectionTitle}>{title}</h4>

      <div className={detailsStyles.grid}>
        {items?.map((item, index) => (
          <div key={index} className={detailsStyles.item}>
            <p className={detailsStyles.label}>{item.label}</p>
            <p className={detailsStyles.value}>{item.value}</p>
          </div>
        ))}
      </div>

      {show ? <div className={detailsStyles.divider} /> : null}
    </div>
  );
};

export default DetailsSection;
