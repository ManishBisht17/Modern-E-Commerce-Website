import { useNavigate } from "react-router-dom";

const ProductCard = ({
  onClick,
  img,
  title,
  category,
  id,
}: {
  onClick: () => void;
  img: string;
  title: string;
  category: string;
  id: string;
}) => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(`/item/product/${id}`);
    onClick();
  };

  return (
    <div onClick={handleRoute} className="relative h-[60vh] w-sm m-4 sm:m-1 group">
      <div className="relative h-full w-full overflow-hidden">
        <img
          className="w-full z-50 h-full object-contain group-hover:scale-105 transition-transform duration-300"
          src={img}
          alt="Shorts"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-700 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 w-full p-4">
          <h1 className="font-semibold text-lg text-white drop-shadow-lg">
            {title}
          </h1>
          <h1 className="text-white/90 drop-shadow-md">{category}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
