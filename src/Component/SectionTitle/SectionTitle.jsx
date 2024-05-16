const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center md:w-4/12 my-8 mx-auto">
      <h1 className="text-[#D99904] font-[20px] ">{heading}</h1>

      <h1 className="text-[40px] font-medium border-y-4 py-3">{subHeading}</h1>
    </div>
  );
};

export default SectionTitle;
