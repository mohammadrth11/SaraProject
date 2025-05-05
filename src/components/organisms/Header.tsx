import MainBtn from "../atoms/Buttoms";

type HeaderProps = {
  title: string;
  description: string;
  image: string;
};
export default function Header({ title, description, image }: HeaderProps) {
  return (
    <header className="container h-screen flex justify-between  items-center flex-col md:flex-row gap-x-10   pt-33 md:pt-0">
      <div className="header-content text-white w-full md:w-1/2">
        <h1 className="text-4xl font-boldstext-4xl pb-5">{title}</h1>
        <p>{description}</p>
        <div className="flex gap-x-10 my-10">
          <MainBtn title="View More" link="#" color="red" />
          <MainBtn title="Our Projects" link="#" />
        </div>
      </div>
      <div className="header-image hidden md:block">
        <img
          src={image}
          alt="header-image"
          className=" w-90 md:w-full  max-w-md"
        />
      </div>
    </header>
  );
}
// test
