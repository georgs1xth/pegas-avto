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
    { "@type": "AdministrativeArea", name: "Атырауская область" },
];
const CATALOG = [
    ["Оптовые поставки оборудования StarLine", "Оптовая поставка"],
    ["Розничная продажа оборудования StarLine", "Розничная продажа"],
    ["Установка охранных комплексов StarLine", "Установка"],
];
const DISTRIB =
    "Официальный дистрибьютор StarLine в Атырау и Атырауской области: оптовые и розничные " +
    "поставки оригинального охранного оборудования со склада в Атырау, установка " +
    "в собственных установочных центрах.";

// Головной узел сущности: подлежащее при слове «дистрибьютор» — «Пегас Авто А».
// Связь с Kristall-Auto вынесена в parentOrganization, а не в описание.
const ORGANIZATION = {
    "@type": "Organization",
    "@id": `${SITE}/#organization`,
    name: "Пегас Авто А",
    alternateName: ["СТО «Пегас Авто А» by Kristall Auto", "Пегас AVTO A"],
    legalName: "ИП «JASavto»",
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
        description: "Официальный дистрибьютор StarLine в Казахстане",
    },
    brand: [
        { "@type": "Brand", name: "StarLine", url: "https://www.starline.ru/" },
        { "@type": "Brand", name: "Neoline", url: "https://neoline.kz/" },
    ],
    subOrganization: POINTS.map((p) => ({ "@id": `${SITE}/#point-${p.id}` })),
    knowsAbout: [
        "StarLine",
        "Автосигнализации",
        "Автозапуск",
        "CAN/LIN",
        "Мягкая посадка",
        "Оптовые поставки охранного оборудования",
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Направления работы",
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
            url: SITE,
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
            "@id": `${SITE}/#website`,
            url: SITE,
            name: "СТО «Пегас Авто А»",
            inLanguage: "ru-KZ",
            publisher: { "@id": `${SITE}/#organization` },
        },
    ],
};

const HomeSchema = () => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
);

export default HomeSchema;
