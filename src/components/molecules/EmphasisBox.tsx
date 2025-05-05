type EmphasisProps = {
  src: string;
  title: string;
  description: string;
};

export default function Emphasis({ src, title, description }: EmphasisProps) {
  return (
    <div
      data-aos="fade-left"
      className="Emphasi flex items-center justify-start gap-x-5 pb-5 "
    >
      <div className="image">
        <img src={src} alt="Emphasi-image" className="w-40 h-25" />
      </div>
      <div className="content ">
        <h2 className="font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
