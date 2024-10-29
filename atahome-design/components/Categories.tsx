'use client';

import { useEffect, useState } from 'react';
import { gql } from '@apollo/client';
import client from '@/utils/apollo-client';
import { useRouter } from 'next/navigation';

const GET_CATEGORIES = gql`
  query GetCategories {
    productCategories(first: 5) {
      nodes {
        id
        name
        slug
        image {
          sourceUrl
        }
      }
    }
  }
`;

interface Category {
  id: string;
  name: string;
  slug: string;
  image: {
    sourceUrl: string;
  };
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const router = useRouter();

  useEffect(() => {
    client.query({ query: GET_CATEGORIES }).then((response) => {
      setCategories(response.data.productCategories.nodes);
    });
  }, []);

  return (
    <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <div
          key={category.id}
          onClick={() => router.push(`/category/${category.slug}`)}
          className="relative rounded-[20px] overflow-hidden cursor-pointer transition-transform hover:scale-105 shadow-md"
        >
          <img src={category.image?.sourceUrl || '/images/default-category.jpg'} alt={category.name} className="w-full h-60 object-cover" />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
            <h3 className="text-lg font-semibold">{category.name}</h3>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Categories;
