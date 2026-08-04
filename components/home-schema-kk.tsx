// JSON-LD для главной страницы. Данные совпадают со статичными SEO-страницами
// (источник — generator/build.py). Меняете там — поменяйте и здесь.

const SITE = "https://pegas.georgiy.bond";
const PHONE = "+7 702 392 32 22";
const IG = "https://www.instagram.com/pegas_avto_by_kristallauto";

const POINTS = [
    {
        id: "kurmangazy",
        street: "ул. Курмангазы, 70Б",
        lat: 47.114546,
        lng: 51.885867,
        opens: "09:00",
        closes: "19:00",
        sameAs: [
            "https://2gis.kz/atyrau/geo/70000001035317367",
            "https://share.google/APYcZQgqugB9dfK7N",
            "https://yandex.kz/profile/7749011020",
            IG,
        ],
    },
    {
        id: "aitzhanova",
        street: "ул. Бекена Айтжанова, 35",
        lat: 47.092672,
        lng: 51.84855,
        opens: "10:00",
        closes: "20:00",
        sameAs: ["https://2gis.kz/atyrau/geo/70000001115435394", IG],
    },
];

const graph = {
    "@context": "https://schema.org",
    "@graph": [
        ...POINTS.map((p) => ({
            "@type": "AutoRepair",
            "@id": `${SITE}/#point-${p.id}`,
            name: "СТО «Пегас Авто А» by Kristall Auto",
            legalName: "ИП «JASavto»",
            url: `${SITE}/kk`,
            telephone: PHONE,
            priceRange: "₸₸",
            foundingDate: "2011",
            paymentAccepted: "Cash, Kaspi, Card",
            areaServed: { "@type": "City", name: "Атырау" },
            address: {
                "@type": "PostalAddress",
                addressCountry: "KZ",
                addressLocality: "Атырау",
                streetAddress: p.street,
            },
            image: `${SITE}/img/business.webp`,
            geo: { "@type": "GeoCoordinates", latitude: p.lat, longitude: p.lng },
            openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                ],
                opens: p.opens,
                closes: p.closes,
            },
            sameAs: p.sameAs,
        })),
        {
            "@type": "WebSite",
            "@id": `${SITE}/#website-kk`,
            url: `${SITE}/kk`,
            name: "«Пегас Авто А» СТО",
            inLanguage: "kk-KZ",
            publisher: { "@id": `${SITE}/#point-kurmangazy` },
        },
    ],
};

const HomeSchemaKk = () => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
);

export default HomeSchemaKk;
