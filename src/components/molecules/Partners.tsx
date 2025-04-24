type PartnersProps = {
  background: string;
  logo: string;
  title: string;
  description: string;
};
export default function Partners({
  background,
  logo,
  title,
  description,
}: PartnersProps) {
  return (
    <div
      className={` Partners bg-cover bg-center text-white text-center p-8   w-[46.5%] h-[300px] flex justify-center items-center flex-col flex-wrap gap-y-3`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <img src={logo} alt="Logo Partner" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="hidden md:block">{description}</p>
    </div>
  );
}
