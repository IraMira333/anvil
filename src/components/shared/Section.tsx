export const Section = ({
  children,
  className,
  id,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <section
      id={id}
      className={`px-4 tab:px-5 pc:px-60 max-w-[540px] tab:max-w-full pc:max-w-[1440px] mx-auto ${className}`}
      style={style}
    >
      {children}
    </section>
  );
};
