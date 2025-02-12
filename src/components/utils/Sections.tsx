interface SectionsProps {
  title: string;
  children?: React.ReactNode;
}

const Sections = ({ title, children }: SectionsProps) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Sections;
