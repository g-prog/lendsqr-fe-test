

const HamburgerIcon = ({ width = 24, height = 24, color = "#213F7D" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="4" width="24" height="2" rx="1" fill={color} />
    <rect y="11" width="24" height="2" rx="1" fill={color} />
    <rect y="18" width="24" height="2" rx="1" fill={color} />
  </svg>
);

export default HamburgerIcon;