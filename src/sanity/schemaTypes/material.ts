// /sanity/schemaTypes/material.ts

import { defineType, defineField } from "sanity";

export default defineType({
  name: "material",
  title: "Material",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Material Name",
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
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "image",
      title: "Material Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "finishOptions",
      title: "Compatible Finishes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "finish" }] }],
    }),

    defineField({
      name: "featured",
      title: "Featured Material",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
