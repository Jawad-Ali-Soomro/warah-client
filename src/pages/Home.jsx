import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Header, Footer } from "../components"

const Home = () => {
    const { t } = useTranslation()

    // Hero images - using fashion/retail placeholder images
    const heroImages = [
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop&q=80",
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&h=1080&fit=crop&q=80"
    ]

    const categories = [
        {
            key: 'woman',
            image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&h=1200&fit=crop&q=80",
            link: '/woman'
        },
        {
            key: 'man',
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&h=1200&fit=crop&q=80",
            link: '/man'
        },
        {
            key: 'kids',
            image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1000&h=1200&fit=crop&q=80",
            link: '/kids'
        },
        {
            key: 'homeDecor',
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1000&h=1200&fit=crop&q=80",
            link: '/home'
        }
    ]

    const shopCategories = [
        {
            key: 'bags',
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&q=80",
            link: '/bags'
        },
        {
            key: 'shoes',
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop&q=80",
            link: '/shoes'
        },
        {
            key: 'accessories',
            image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop&q=80",
            link: '/accessories'
        },
        {
            key: 'pants',
            image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=500&fit=crop&q=80",
            link: '/pants'
        },
        {
            key: 'shirts',
            image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&h=500&fit=crop&q=80",
            link: '/shirts'
        },
        {
            key: 'dresses',
            image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop&q=80",
            link: '/dresses'
        },
        {
            key: 'jackets',
            image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop&q=80",
            link: '/jackets'
        },
        {
            key: 'jewelry',
            image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop&q=80",
            link: '/jewelry'
        }
    ]

    const productSections = [
        {
            title: "ESSENTIALS",
            products: [
                {
                    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=600&fit=crop&q=80",
                    nameKey: "product1",
                    price: 29.95
                },
                {
                    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop&q=80",
                    nameKey: "product2",
                    price: 39.95
                },
                {
                    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop&q=80",
                    nameKey: "product3",
                    price: 49.95
                },
                {
                    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop&q=80",
                    nameKey: "product4",
                    price: 35.95
                }
            ]
        },
        {
            title: "TRENDING NOW",
            products: [
                {
                    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=600&fit=crop&q=80",
                    nameKey: "product5",
                    price: 59.95
                },
                {
                    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop&q=80",
                    nameKey: "product6",
                    price: 45.95
                },
                {
                    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=600&fit=crop&q=80",
                    nameKey: "product7",
                    price: 69.95
                },
                {
                    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop&q=80",
                    nameKey: "product8",
                    price: 54.95
                }
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />
            
            {/* Hero Section */}
            <section className="w-full px-10" data-aos="fade-in">
                <motion.div
                    className="relative w-full h-[90vh] overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={heroImages[0]}
                        alt="Hero"
                        className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.src = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop&q=80"
                                    }}
                    />
                    <div className="absolute inset-0  bg-opacity-20"></div>
                    <motion.div
                        className="absolute bottom-20 left-10 text-white"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <h2 className="text-6xl md:text-8xl font-light mb-4 uppercase tracking-wider" data-aos="fade-right" data-aos-delay="400">
                            {t('home.newCollection')}
                        </h2>
                        <motion.button
                            className="animated-button border border-white text-white px-8 py-3 uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
                            data-aos="zoom-in"
                            data-aos-delay="500"
                        >
                            {t('home.shopNow')}
                        </motion.button>
                    </motion.div>
                </motion.div>
            </section>

            {/* Category Grid */}
            <section className="w-full p-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {categories.map((category, index) => (
                        <motion.a
                            key={category.key}
                            href={category.link}
                            className="relative group overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <div className="relative w-full h-[600px] overflow-hidden">
                                <motion.img
                                    src={category.image}
                                    alt={t(`home.${category.key}`)}
                                    className="w-full h-full object-cover"
                                
                                    transition={{ duration: 0.6 }}
                                            onError={(e) => {
                                                const fallbackImages = [
                                                    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&h=1000&fit=crop&q=80",
                                                    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&h=1000&fit=crop&q=80",
                                                    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1000&h=1000&fit=crop&q=80",
                                                    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1000&h=1000&fit=crop&q=80"
                                                ]
                                                e.target.src = fallbackImages[index] || fallbackImages[0]
                                            }}
                                />
                                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                                <div className="absolute bottom-10 left-10 text-white">
                                    <h3 className="text-4xl md:text-5xl font-light uppercase tracking-wider">
                                        {t(`home.${category.key}`)}
                                    </h3>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </section>

            {/* Shop Categories Section */}
            <section className="w-full py-16 px-4 md:px-8" data-aos="fade-up">
                <motion.div
                    className=" mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-wider mb-8 text-start" data-aos="fade-right">
                        {t('home.shopCategories')}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-8 gap-4">
                        {shopCategories.map((category, index) => (
                            <motion.a
                                key={category.key}
                                href={category.link}
                                className="relative group overflow-hidden"
                                data-aos="zoom-in"
                                data-aos-delay={index * 50}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                                // whileHover={{ y: -5 }}
                            >
                                <div className="relative w-full h-[200px] border overflow-hidden bg-gray-100">
                                    <motion.img
                                        src={category.image}
                                        alt={t(`home.categories.${category.key}`)}
                                        className="w-full h-full object-cover"
                                        transition={{ duration: 0.4 }}
                                        onError={(e) => {
                                            const fallbackImages = [
                                                "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&q=80",
                                                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop&q=80",
                                                "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop&q=80",
                                                "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=500&fit=crop&q=80",
                                                "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&h=500&fit=crop&q=80",
                                                "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop&q=80",
                                                "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop&q=80",
                                                "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop&q=80"
                                            ]
                                            e.target.src = fallbackImages[index] || fallbackImages[0]
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                                </div>
                                <div className="mt-3 text-center absolute bottom-0 h-10 flex items-center justify-center border right-0 w-3/4 bg-white">
                                    <h3 className="text-sm font-medium uppercase tracking-wide">
                                        {t(`home.categories.${category.key}`)}
                                    </h3>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Product Sections */}
            {productSections.map((section, sectionIndex) => (
                <section key={section.title} className="w-full py-16 px-4 md:px-8" data-aos="fade-up">
                    <motion.div
                        className="mx-auto "
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-wider mb-8 text-start" data-aos="fade-right">
                            {section.title}
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {section.products.map((product, productIndex) => (
                                <motion.a
                                    key={productIndex}
                                    href="#"
                                    className="group"
                                    data-aos="fade-up"
                                    data-aos-delay={productIndex * 100}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: productIndex * 0.1, duration: 0.5 }}
                                    // whileHover={{ y: -5 }}
                                >
                                    <div className="relative w-full aspect-[3/4] border overflow-hidden bg-gray-100 mb-3 group">
                                        <motion.img
                                            src={product.image}
                                            alt={t(`home.products.${product.nameKey}`)}
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.4 }}
                                            onError={(e) => {
                                                const fallbackProducts = [
                                                    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=600&fit=crop&q=80",
                                                    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop&q=80",
                                                    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop&q=80",
                                                    "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=600&fit=crop&q=80"
                                                ]
                                                e.target.src = fallbackProducts[productIndex] || fallbackProducts[0]
                                            }}
                                        />
                                        {/* Hover Overlay with Product Info - Bottom Right */}
                                        <div className="absolute inset-0 backdrop-blur-sm bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                            <div className="absolute bottom-4 right-4 text-end text-white">
                                                <h3 className="text-sm font-medium uppercase tracking-wide mb-1">
                                                    {t(`home.products.${product.nameKey}`)}
                                                </h3>
                                                <p className="text-base">
                                                    ${product.price.toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </section>
            ))}

            {/* Sale Banner */}
      

            <Footer />
        </div>
    )
}

export default Home