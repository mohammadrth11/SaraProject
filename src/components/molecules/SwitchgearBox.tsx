type SwitchgearBoxProps = {
  src: string;
  description: string;
};

export default function SwitchgearBox({
  src,
  description,
}: SwitchgearBoxProps) {
  return (
    <div className="SwitchgearBox">
      <img src={src} alt="Switchgear-pic" className="w-full" />
      <p className="pt-10">{description}</p>
    </div>
  );
}
