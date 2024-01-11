export const PRODUCT_CATEGORIES = [
    {
        label: "Instruments",
        value: "ui_kits" as const,
        featured: [
            {
                name: "Guitars",
                href: "#",
                imageSrc: "/nav/instruments/guitars.jpg"
            },
            {
                name: "Keys",
                href: "#",
                imageSrc: "/nav/instruments/keys.jpg"
            },
            {
                name: "Percussion",
                href: "#",
                imageSrc: "/nav/instruments/drums.jpg"
            },
            {
                name: "Accessories",
                href: "#",
                imageSrc: "/nav/instruments/pedal.jpg"
            }
        ]
    },
    {
        label: "Software",
        value: "software" as const,
        featured: [
            {
                name: "DAWs",
                href: "#",
                imageSrc: "/nav/software/daw.jpg"
            },
            {
                name: "Loops & Tracks",
                href: "#",
                imageSrc: "/nav/software/loops.jpg"
            },
            {
                name: "VST Plugins",
                href: "#",
                imageSrc: "/nav/software/vst.jpg"
            }
        ]
    }
]