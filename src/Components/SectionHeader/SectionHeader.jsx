import "./sectionHeader.css";

const SectionHeader = ({title}) => {
  return (
    <header className="section flex">
          <h2>{ title}</h2>
      <a href="#" className="currency">
        View All
      </a>
    </header>
  );
};

export default SectionHeader;
