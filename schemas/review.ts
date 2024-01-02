import { defineField } from "sanity";

const review = {
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    defineField({
      name: "user",
      title: "User",
      type: "reference",
      to: [{ type: "user" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "hotelRoom",
      title: "Hotel Room",
      type: "reference",
      to: [{ type: "hotelRoom" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "text",
      title: "Review Text",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "userrating",
      title: "User Rating",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(5).error("not a valid rating"),
    }),
  ],
};

export default review;
