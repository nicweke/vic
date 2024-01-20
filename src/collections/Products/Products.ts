import { PRODUCT_CATEGORIES } from "../../config";
import { CollectionConfig } from "payload/types";

export const Products: CollectionConfig = {
    slug: "products",
    admin: {
        useAsTitle: "name"
    },
    access: {},
    fields: [
        {
            name: "user",
            type: "relationship",
            relationTo: "users",
            required: true,
            hasMany: false,
            admin: {
                condition: () => false
            }
        },
        {
            name: "name",
            label: "Name",
            type: "text",
            required: true,
        },
        {
            name: "description",
            label: "Product Description",
            type: "textarea",
            required: true,
        },
        {
            name: "price",
            label: "Price in KShs",
            type: "number",
            min: 0,
            max: 10000000,
            required: true,
        },
        {
            name: "category",
            label: "Product Category",
            type: "select",
            options: PRODUCT_CATEGORIES.map(({ label, value }) => ({ label, value })),
            required: true,

        },
        {
            name: 'product_files',
            label: 'Product file(s)',
            type: 'relationship',
            required: true,
            relationTo: 'product_files',
            hasMany: false,
        },
        {
            name: "approvedForSale",
            label: "Product Status",
            type: "select",
            defaultValue: "pending",
            access: {
                create: ({ req }) => req.user.role === "admin",
                read: ({ req }) => req.user.role === "admin",
                update: ({ req }) => req.user.role === "admin",
            },
            options: [
                {
                    label: "Pending Verification",
                    value: "pending"
                },
                {
                    label: "Approved",
                    value: "approved"
                },
                {
                    label: "Rejected",
                    value: "rejected"
                }
            ]

        },
        {
            name: "priceId",
            access: {
                create: () => false,
                read: () => false,
                update: () => false,

            },
            type: "text",
            admin: {
                hidden: true
            }
        },
        {
            name: "mpesaId",
            access: {
                create: () => false,
                read: () => false,
                update: () => false,

            },
            type: "text",
            admin: {
                hidden: true
            }
        },
        {
            name: "images",
            label: "Product Thumbnails",
            type: "array",
            minRows: 1,
            maxRows: 5,
            required: true,
            labels: {
                singular: "Image",
                plural: "Images",
            },
            fields: [
                {
                    name: "image",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                }
            ]

        }

    ]
}