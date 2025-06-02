export const DecorGrid = ({ notFound }: { notFound?: boolean }) => {
  return (
    <>
      <div
        className={`absolute inset-x-0 top-0 ${notFound ? "bottom-0" : "bottom-[58px]"} grid grid-cols-2 grid-rows-2 pointer-events-none z-0`}
      >
        <div className="border-r  border-title20" />
        <div />
        <div className="border-t border-r border-title20" />
        <div className="border-t border-title20" />
      </div>
      <div
        className={`absolute left-1/2 ${notFound ? "top-[50%]" : "top-[calc(50%-29px)]"} -translate-x-1/2 -translate-y-1/2 w-8 h-8 grid grid-cols-2 grid-rows-2 pointer-events-none`}
      >
        <div
          className={`border-r ${notFound ? "border-accent" : "border-title"} `}
        />
        <div />
        <div
          className={`border-t border-r ${notFound ? "border-accent" : "border-title"}`}
        />
        <div
          className={`border-t ${notFound ? "border-accent" : "border-title"}`}
        />
      </div>
      <div className="absolute border-t border-l border-title20 w-4 h-4 tab:w-5 tab:h-5 pc:w-9 pc:h-9 top-9 left-4 tab:top-[56px] tab:left-5 pc:top-[60px] pc:left-[60px]" />
      <div className="absolute border-t border-r border-title20 w-4 h-4 tab:w-5 tab:h-5 pc:w-9 pc:h-9 top-9 right-4 tab:top-[56px] tab:right-5 pc:top-[60px] pc:right-[60px]" />
      <div
        className={`absolute border-b border-l border-title20 w-4 h-4 tab:w-5 tab:h-5 pc:w-9 pc:h-9 ${notFound ? "bottom-7 tab:bottom-[45px]" : "bottom-[90px] tab:bottom-[110px] "} left-4 tab:left-5  pc:left-[60px]`}
      />
      <div
        className={`absolute border-b border-r border-title20 w-4 h-4 tab:w-5 tab:h-5 pc:w-9 pc:h-9 ${notFound ? "bottom-7 tab:bottom-[45px]" : "bottom-[90px] tab:bottom-[110px] "} right-4 tab:right-5 pc:right-[60px]`}
      />
    </>
  );
};
