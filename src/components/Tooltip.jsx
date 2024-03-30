const Tooltip = ({ title }) => {
  return (
    <div className="absolute -bottom-14 right-0 z-10 scale-0  whitespace-nowrap rounded-lg border-[2px] border-solid border-indigo-300  bg-indigo-100 px-4 py-2 text-[16px] tracking-tight text-indigo-500 shadow-lg  transition-all group-hover:scale-100 md:hidden">
      {title}
    </div>
  );
};
export default Tooltip;
