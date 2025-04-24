type DynamicHeaderProps = {
  src: string;
  title: string;
  description: string;
};
export default function DynamicHeader({
  src,
  title,
  description,
}: DynamicHeaderProps) {
  return (
    <header
      style={{ backgroundImage: `url(/${src})` }}
      className={`bg-cover bg-center relative h-[50vh] flex justify-center items-center text-white flex-col text-center`}
    >
      <h1 className="text-4xl pb-5">{title}</h1>
      <p>{description}</p>
    </header>
  );
}
