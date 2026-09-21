// /sanity/schemaTypes/inspiration.ts

import { defineType, defineField } from "sanity";

export default defineType({
  name: "inspiration",
  title: "Inspiration",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "images",
      title: "Gallery Images",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) => Rule.min(1),
    }),

    defineField({
      name: "products",
      title: "Referenced Products",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
      description: "Products featured or related to this inspiration set.",
    }),

    defineField({
      name: "materials",
      title: "Materials Used",
      type: "array",
      of: [{ type: "reference", to: [{ type: "material" }] }],
    }),

    defineField({
      name: "finishes",
      title: "Finishes Used",
      type: "array",
      of: [{ type: "reference", to: [{ type: "finish" }] }],
    }),

    defineField({
      name: "featured",
      title: "Featured Inspiration",
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
2