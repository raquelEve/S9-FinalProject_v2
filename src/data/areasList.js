const areasList = [
    {
        area: "British",
        flat: "https://www.themealdb.com/images/icons/flags/big/32/gb.png",
        countryName: "United Kingdom",
        id: 'bg',
        src: 'https://images.unsplash.com/photo-1470608756445-2c9906b0680f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        area: 'American',
        flat: 'https://www.themealdb.com/images/icons/flags/big/32/us.png',
        countryName: 'United States of America (USA)',
        id: 'us',
        src: 'https://images.unsplash.com/photo-1492217072584-7ff26c10eb75?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        area: 'French',
        flat: 'https://www.themealdb.com/images/icons/flags/big/32/fr.png',
        countryName: 'France',
        id: 'fr',
        src: 'https://images.unsplash.com/photo-1500039436846-25ae2f11882e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        area: 'Canadian',
        flat: 'https://www.themealdb.com/images/icons/flags/big/32/ca.png',
        countryName: 'Canada',
        id: 'ca',
        src: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        area: 'Jamaican',
        flat: 'https://www.themealdb.com/images/icons/flags/big/32/jm.png',
        countryName: 'Jamaica',
        id: 'jm',
        src: "https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        area: 'Chinese',
        flat: 'https://www.themealdb.com/images/icons/flags/big/32/cn.png',
        countryName: 'China',
        id: 'cn',
        src: 'https://images.unsplash.com/photo-1547150492-da7ff1742941?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        area: 'Egyptian',
        flat: 'https://www.themealdb.com/images/icons/flags/big/32/eg.png',
        countryName: 'Egypt',
        id: 'eg',
        src: 'https://images.unsplash.com/photo-1608546043931-6c9678ea9feb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        area: 'Greek',
        flat: 'https://www.themealdb.com/images/icons/flags/big/32/gr.png',
        countryName: 'Greece',
        id: 'gr',
        src: 'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        area: 'Indian',
        flat: 'https://www.themealdb.com/images/icons/flags/big/32/in.png',
        countryName: 'India',
        id: 'in',
        src: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        area: 'Italian',
        flat: 'https://www.themealdb.com/images/icons/flags/big/32/it.png',
        countryName: 'Italy',
        id: 'it',
        src: 'https://images.unsplash.com/photo-1514896856000-91cb6de818e0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        area: 'Japanese',
        flat: 'https://www.themealdb.com/images/icons/flags/big/32/jp.png',
        countryName: 'Japan',
        id: 'jp',
        src: 'https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        area: 'Mexican',
        flat: 'https://www.themealdb.com/images/icons/flags/big/32/mx.png',
        countryName: 'Mexico',
        id: 'mx',
        src: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        area: 'Portuguese',
        flat: 'https://www.themealdb.com/images/icons/flags/big/32/pt.png',
        countryName: 'Portugal',
        id: 'pt',
        src: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        area: 'Russian',
        flat: 'https://www.themealdb.com/images/icons/flags/big/32/ru.png',
        countryName: 'Russia',
        id: 'ru',
        src: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        area: 'Spanish',
        flat: 'https://www.themealdb.com/images/icons/flags/big/32/es.png',
        countryName: 'Spain',
        id: 'es',
        src: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        area: 'Tunisian',
        flat: 'https://www.themealdb.com/images/icons/flags/big/32/tn.png',
        countryName: 'Tunisia',
        id: 'tn',
        src: 'https://images.unsplash.com/photo-1556901600-3e1be0aa443e?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        area: 'Polish',
        flat: 'https://www.themealdb.com/images/icons/flags/big/32/pl.png',
        countryName: 'Poland',
        id: 'pl',
        src: 'https://images.unsplash.com/photo-1607427293702-036933bbf746?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        area: 'Filipino',
        flat: 'https://www.themealdb.com/images/icons/flags/big/32/ph.png',
        countryName: 'Philippines',
        id: 'ph',
        src: 'https://images.unsplash.com/photo-1590077211339-724573dc4121?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
]
export default areasList