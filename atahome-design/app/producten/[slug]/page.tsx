import { gql } from '@apollo/client';
import client from '@/utils/apollo-client';

const GET_PRODUCT_BY_SLUG = gql`
  query GetProductBySlug($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      name
      description
      image {
        sourceUrl
      }
      price
    }
  }
`;

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const { data } = await client.query({
    query: GET_PRODUCT_BY_SLUG,
    variables: { slug: params.slug },
  });

  const product = data.product;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <img src={product.image?.sourceUrl} alt={product.name} className="my-4" />
      <p className="text-lg">{product.description}</p>
      <p className="text-2xl font-bold text-blue-600 mt-4">€{product.price}</p>
    </div>
  );
};

export default ProductPage;
