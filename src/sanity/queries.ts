import { client } from "./client";

export const getProductBySlug = async (slug: string) => {
  return client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      slug,
      description,
      dimensions,
      images,
      category->{
        name,
        slug
      },
      materials[]->{
        name,
        slug,
        image
      },
      finishes[]->{
        name,
        slug,
        image
      }
    }`,
    { slug }
  );
};
