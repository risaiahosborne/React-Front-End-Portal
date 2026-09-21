// /sanity/schemaTypes/finish.ts

import { defineType, defineField } from "sanity";

export default defineType({
  name: "finish",
  title: "Finish",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Finish Name",
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
      title: "Finish Image",
      type: "image",
      options: { hotspot: true },
      description: "Upload a close-up texture or finish sample.",
    }),

    defineField({
      name: "material",
      title: "Base Material",
      type: "reference",
      to: [{ type: "material" }],
      description: "Optional — link this finish to a specific material.",
    }),

    defineField({
      name: "featured",
      title: "Featured Finish",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
