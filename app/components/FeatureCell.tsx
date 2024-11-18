import homeRedesign from "assets/screenshots/homeRedesign.svg";

interface Props {
  place: string;
  title: string;
  color: string;
  details: string;
  img?: string;
  alt?: string;
}
export const FeatureCell = ({
  place,
  title,
  color = "#24956A",
  details,
  img,
  alt,
}: Props) => {
  return (
    <div
      style={{ background: `linear-gradient(#000 25%, ${color})` }}
      className={`flex flex-col overflow-hidden justify-between gap-4 rounded-lg bg-gradient-to-t to-60%  to-black h-full w-full`}
    >
      <div className="flex flex-col gap-2 px-4 pt-4">
        <p style={{ color }}> @{place} </p>
        <h3 className="text-white text-[20px]"> {title} </h3>
        <p className="text-white text-[14px] opacity-70">{details}</p>
      </div>
      {img && <img src={img} alt={alt} />}
    </div>
  );
  s;
};
