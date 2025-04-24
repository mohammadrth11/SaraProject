type ProjectProps = {
  src: string;
  title: string;
};
export default function Project({ src, title }: ProjectProps) {
  return (
    <div className="relative w-[350px] h-[350px] overflow-hidden shadow-lg group">
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(/${src})` }}
      ></div>
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
        <h3 className="text-white text-2xl">{title}</h3>
      </div>
    </div>
  );
}
