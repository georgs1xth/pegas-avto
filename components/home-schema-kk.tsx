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


const KRISTALL = "https://kristall-auto.kz";
const AREA = [
    { "@type": "City", name: "Атырау" },
    { "@type": "AdministrativeArea", name: "Атырау облысы" },
];
const CATALOG = [
    ["StarLine жабдығын көтерме жеткізу", "Көтерме жеткізу"],
    ["StarLine жабдығын бөлшектеп сату", "Бөлшек сауда"],
    ["StarLine күзет кешендерін орнату", "Орнату"],
];
const DISTRIB =
    "Атырау қаласы мен Атырау облысындағы StarLine ресми дистрибьюторы: түпнұсқа күзет " +
    "жабдығын Атыраудағы қоймадан көтерме және бөлшектеп жеткізу, өз орнату " +
    "орталықтарында орнату.";

// Головной узел сущности: подлежащее при слове «дистрибьютор» — «Пегас Авто А».
// Связь с Kristall-Auto вынесена в parentOrganization, а не в описание.
const ORGANIZATION = {
    "@type": "Organization",
    "@id": `${SITE}/#organization`,
    name: "Пегас Авто А",
    alternateName: ["СТО «Пегас Авто А» by Kristall Auto", "Пегас AVTO A"],
    legalName: "«JASavto» ЖК",
    description: DISTRIB,
    url: SITE,
    image: `${SITE}/img/business.webp`,
    telephone: PHONE,
    foundingDate: "2011",
    areaServed: AREA,
    address: {
        "@type": "PostalAddress",
        addressCountry: "KZ",
        addressLocality: "Атырау",
        streetAddress: "ул. Курмангазы, 70Б",
    },
    parentOrganization: {
        "@type": "Organization",
        name: "Kristall-Auto",
        url: KRISTALL,
        description: "Қазақстандағы StarLine ресми дистрибьюторы",
    },
    brand: [
        { "@type": "Brand", name: "StarLine", url: "https://www.starline.ru/" },
        { "@type": "Brand", name: "Neoline", url: "https://neoline.kz/" },
    ],
    subOrganization: POINTS.map((p) => ({ "@id": `${SITE}/#point-${p.id}` })),
    knowsAbout: [
        "StarLine",
        "Автосигнализациялар",
        "Автоқосу",
        "CAN/LIN шиналары",
        "Жұмсақ отырғызу",
        "Күзет жабдығын көтерме жеткізу",
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Жұмыс бағыттары",
        itemListElement: CATALOG.map(([name, serviceType]) => ({
            "@type": "Offer",
            itemOffered: {
                "@type": "Service",
                name,
                serviceType,
                provider: { "@id": `${SITE}/#organization` },
                areaServed: AREA,
            },
        })),
    },
    sameAs: POINTS[0].sameAs,
};

const graph = {
    "@context": "https://schema.org",
    "@graph": [
        ORGANIZATION,
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
            description: DISTRIB,
            parentOrganization: { "@id": `${SITE}/#organization` },
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
            publisher: { "@id": `${SITE}/#organization` },
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
