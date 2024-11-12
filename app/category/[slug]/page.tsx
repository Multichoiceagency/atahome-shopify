import { gql } from '@apollo/client';
import client from '@/utils/apollo-client';

const GET_CATEGORY_PRODUCTS = gql`
  query GetCategoryProducts($slug: ID!) {
    productCategory(id: $slug, idType: SLUG) {
      name
      products(first: 10) {
        nodes {
          id
          name
          slug
          image {
            sourceUrl
          }
          price
        }
      }
    }
  }
`;

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  const { data } = await client.query({
    query: GET_CATEGORY_PRODUCTS,
    variables: { slug: params.slug },
  });

  const category = data.productCategory;

  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">{category.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.products.nodes.map((product: any) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <img src={product.image?.sourceUrl} alt={product.name} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-blue-600 font-bold mt-2">€{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryPage;
