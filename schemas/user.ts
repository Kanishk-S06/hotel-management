import { defineField } from "sanity";

const user={
    name:'user',
    title: 'user',
    type: 'document',
    fields: [
        defineField({
            name: "isAdmin",
            title: "isAdmin",
            type: "boolean",
            description:'Check if the user is Admin',
            initialValue: false,
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "name",
            title: "name",
            type: "string",
            description:'Name of the user',
            validation: Rule => Rule.required(),
            readOnly: true,
        }),
        defineField({
            name: 'image',
            title: "Image",
            type: 'url',
        }),
        defineField({
            name: "password",
            type: "string",
            hidden: true,
        }),
        defineField({
            name: "about",
            title: "About",
            type: "text",
            description: "A brief description about user"
        })
    ]
}


export default user
;