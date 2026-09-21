// /sanity/schemaTypes/product.ts

import { defineType, defineField } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "images",
      title: "Product Images",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) => Rule.min(1),
    }),

    defineField({
      name: "materials",
      title: "Materials",
      type: "array",
      of: [{ type: "reference", to: [{ type: "material" }] }],
    }),

    defineField({
      name: "finishes",
      title: "Finishes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "finish" }] }],
    }),

    defineField({
      name: "dimensions",
      title: "Dimensions",
      type: "object",
      fields: [
        { name: "width", title: "Width", type: "string" },
        { name: "height", title: "Height", type: "string" },
        { name: "depth", title: "Depth", type: "string" },
      ],
    }),

    defineField({
      name: "price",
      title: "Price",
      type: "number",
      description: "Optional — leave blank if pricing is handled externally.",
    }),

    defineField({
      name: "featured",
      title: "Featured Product",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
