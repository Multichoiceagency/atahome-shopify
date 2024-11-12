/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from '@apollo/client';
import client from '@/utils/apollo-client';
import Link from 'next/link';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      nodes {
        id
        slug
        name
        image {
          sourceUrl
        }
        price
      }
    }
  }
`;

const ProductsPage = async () => {
  const { data } = await client.query({ query: GET_PRODUCTS });

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.products.nodes.map((product: any) => ( 
        <Link key={product.id} href={`/products/${product.slug}`}>
          <div className="border p-4 shadow-md hover:shadow-lg">
            <img src={product.image?.sourceUrl} alt={product.name} />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-blue-600 font-bold">€{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductsPage;
