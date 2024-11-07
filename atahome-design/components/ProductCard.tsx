'use client';

interface ProductCardProps {
  imageUrl: string;
  name: string;
  description: string;
  price: string;
  inStock: boolean;
  promotionLabel?: string;
  promotionPrice?: string;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  name,
  description,
  price,
  inStock,
  promotionLabel,
  promotionPrice,
  onClick,
}) => {
  return (
    <div className="max-w-xs p-4 border rounded-lg shadow-md hover:shadow-lg relative bg-white">
      {/* Promotie Label */}
      {promotionLabel && promotionPrice && (
        <div className="absolute top-2 right-2 bg-yellow-400 text-red-600 font-semibold rounded-full text-sm px-3 py-1 shadow">
          {promotionLabel}
          <br />
          <span className="text-lg font-bold">€ {promotionPrice}</span>
          <span className="text-xs"> per m²</span>
        </div>
      )}

      {/* Afbeelding */}
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-56 object-cover rounded-md"
      />

      {/* Productinformatie */}
      <div className="mt-4">
        {/* Categorie of ander label (optioneel) */}
        <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
          PRIME
        </p>

        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>

        {/* Voorraadstatus */}
        <p className={`mt-2 text-sm font-semibold ${inStock ? 'text-green-600' : 'text-red-600'}`}>
          {inStock ? 'op voorraad' : 'niet op voorraad'}
        </p>

        {/* Prijs */}
        <p className="text-xl font-bold text-gray-900 mt-2">€ {price}</p>

        {/* Bekijk Knop */}
        <button
          onClick={onClick}
          className="mt-4 w-full py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
        >
          Bekijken
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
