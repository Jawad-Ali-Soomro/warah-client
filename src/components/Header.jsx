import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { BiCross, BiX } from 'react-icons/bi'
import { HiOutlineShoppingBag, HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi"
import { IoSearchOutline, IoChevronDown, IoChevronUp } from "react-icons/io5"
import { PiShoppingBag, PiUserDuotone } from 'react-icons/pi'
import { LuSearch } from 'react-icons/lu'

const Header = () => {
    const { t } = useTranslation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(null)
    const [hoveredItem, setHoveredItem] = useState(null)
    const [hoveredSubcategory, setHoveredSubcategory] = useState(null)

    const menuItems = [
        { 
            key: 'woman', 
            path: '/woman',
            hasDropdown: true,
            subcategories: ['dresses', 'tops', 'pants', 'shoes', 'accessories', 'bags', 'coats', 'jeans']
        },
        { 
            key: 'man', 
            path: '/man',
            hasDropdown: true,
            subcategories: ['shirts', 'pants', 'shoes', 'accessories', 'suits', 'jackets', 'jeans', 'tShirts']
        },
        { 
            key: 'kids', 
            path: '/kids',
            hasDropdown: true,
            subcategories: ['boys', 'girls', 'baby', 'shoes', 'accessories', 'newborn']
        },
        { 
            key: 'home', 
            path: '/home',
            hasDropdown: true,
            subcategories: ['furniture', 'decor', 'bedding', 'bath', 'kitchen', 'lighting']
        },
        { 
            key: 'sale', 
            path: '/sale',
            hasDropdown: true,
            subcategories: ['womanSale', 'manSale', 'kidsSale', 'homeSale', 'lastChance']
        }
    ]

    const toggleDropdown = (key) => {
        setOpenDropdown(openDropdown === key ? null : key)
    }

    return (
        <header className="sticky top-0 z-50 bg-white">
            {/* Main Header */}
            <div className="flex items-center justify-between px-10 py-4">
                {/* Left: Hamburger Menu */}
                <motion.button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex flex-col gap-2 cursor-pointer w-[100px] lg:w-[200px]"
                    aria-label="Menu"
                >
                    <motion.div 
                        className="md:w-15 w-8 h-[2px] bg-black"
                        animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div 
                        className="md:w-15 w-8 h-[2px] bg-black"
                        animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div 
                        className="md:w-15 w-8 h-[2px] bg-black"
                        animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.button>

                {/* Center: Logo */}
                <motion.h1 
                    className="text-6xl lg:block hidden font-bold tracking-tight cursor-pointer" 
                    style={{ fontFamily: 'Libre Bodoni' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {t('title')}
                </motion.h1>

                {/* Right: Search, Cart, Login */}
                <div className="flex items-center justify-end gap-4 w-[200px]">
                    {/* Search */}
                    <div className="relative hidden md:block">
                        <AnimatePresence>
                            {isSearchOpen ? (
                                <motion.div 
                                    className="flex items-center gap-2"
                                    initial={{ opacity: 0, x: -20, width: 0 }}
                                    animate={{ opacity: 1, x: 0, width: 'auto' }}
                                    exit={{ opacity: 0, x: -20, width: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <input
                                        type="text"
                                        className="border px-3 absolute -left-65 -top-4.8 border-black outline-none text-sm w-64 h-12 focus:border-black"
                                        placeholder={t('header.search')}
                                        autoFocus
                                        onBlur={() => setIsSearchOpen(false)}
                                    />
                                </motion.div>
                            ) : (
                                <motion.button
                                    onClick={() => setIsSearchOpen(true)}
                                    className="cursor-pointer hover:opacity-70 w-12 h-12 flex items-center justify-center border"
                                    aria-label={t('header.search')}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <LuSearch className="w-5 h-5" />
                                </motion.button>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Cart */}
                    <motion.button
                        className="cursor-pointer hover:opacity-70 relative w-12 h-12 flex items-center justify-center border"
                        aria-label={t('header.cart')}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <HiOutlineShoppingBag className="w-5 h-5" />
                    </motion.button>

                    {/* Login */}
                    <motion.button
                        className="cursor-pointer hover:opacity-70 w-12 h-12 flex items-center justify-center border"
                        aria-label={t('header.login')}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <PiUserDuotone className="w-5 h-5" />
                    </motion.button>
                </div>
            </div>
            {/* Mobile Menu Overlay (when hamburger is clicked) */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div 
                            className="fixed inset-0 backdrop-blur-sm  bg-opacity-50 z-40"
                            onClick={() => setIsMenuOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.div 
                            className="absolute left-0 top-0 min-h-screen w-80 bg-[#eee] z-50"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ x: -320 }}
                            animate={{ x: 0 }}
                            exit={{ x: -320 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        >
                            <div className='p-3'>
                                <motion.div 
                                    className="flex justify-between items-center mb-8 px-5"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <h2 className="text-xl font-bold uppercase" style={{ fontFamily: 'Libre Bodoni' }}>{t('title')}</h2>
                                    <motion.button
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-2xl hover:opacity-70 w-10 h-10 flex items-center justify-center border"
                                        // whileHover={{ scale: 1.1, rotate: 90 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <BiX />
                                    </motion.button>
                                </motion.div>
                                <motion.div>
                                    <div className="sm:hidden block mb-3 px-5">
                                        <input type="text" className="border-b border-black outline-none text-sm w-full h-10 focus:border-black" placeholder={t('header.search')} />
                                    </div>
                                </motion.div>
                                <nav className="flex flex-col">
                                    {menuItems.map((item, index) => (
                                        <motion.div 
                                            key={item.key} 
                                            className="border-b border-gray-100"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + index * 0.05 }}
                                        >
                                            {item.hasDropdown ? (
                                                <>
                                                    <motion.button
                                                        onClick={() => toggleDropdown(item.key)}
                                                        onMouseEnter={() => setHoveredItem(item.key)}
                                                        onMouseLeave={() => setHoveredItem(null)}
                                                        className={`w-full cursor-pointer text-left text-sm font-medium uppercase tracking-wider py-3 px-5 flex items-center justify-between ${
                                                            hoveredItem === item.key ? 'bg-white' : ''
                                                        }`}
                                                        whileTap={{ scale: 0.98 }}
                                                    >
                                                        <span>{t(`header.menu.${item.key}`)}</span>
                                                        <motion.div
                                                            animate={{ rotate: openDropdown === item.key ? 180 : 0 }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            <IoChevronDown className="w-4 h-4" />
                                                        </motion.div>
                                                    </motion.button>
                                                    <AnimatePresence>
                                                        {openDropdown === item.key && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.3 }}
                                                                style={{ overflow: "hidden" }}
                                                            >
                                                                {item.subcategories.map((subcategory, subIndex) => (
                                                                    <motion.a
                                                                        key={subcategory}
                                                                        href={`${item.path}/${subcategory}`}
                                                                        onMouseEnter={() => setHoveredSubcategory(`${item.key}-${subcategory}`)}
                                                                        onMouseLeave={() => setHoveredSubcategory(null)}
                                                                        className={`block text-xs font-medium uppercase tracking-wider py-2.5 px-5 ml-5 border-b border-gray-100 ${
                                                                            hoveredSubcategory === `${item.key}-${subcategory}` ? 'bg-white' : ''
                                                                        }`}
                                                                        onClick={() => {
                                                                            setIsMenuOpen(false)
                                                                            setOpenDropdown(null)
                                                                        }}
                                                                        initial={{ opacity: 0, x: -10 }}
                                                                        animate={{ 
                                                                            opacity: 1, 
                                                                            x: hoveredSubcategory === `${item.key}-${subcategory}` ? 5 : 0 
                                                                        }}
                                                                        transition={{ delay: subIndex * 0.03 }}
                                                                    >
                                                                        {t(`header.menu.subcategories.${subcategory}`)}
                                                                    </motion.a>
                                                                ))}
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </>
                                            ) : (
                                                <motion.a
                                                    href={item.path}
                                                    onMouseEnter={() => setHoveredItem(item.key)}
                                                    onMouseLeave={() => setHoveredItem(null)}
                                                    className={`block text-sm font-medium uppercase tracking-wider py-3 px-5 ${
                                                        hoveredItem === item.key ? 'bg-gray-300' : ''
                                                    }`}
                                                    onClick={() => setIsMenuOpen(false)}
                                                    animate={{ 
                                                        x: hoveredItem === item.key ? 5 : 0 
                                                    }}
                                                    transition={{ duration: 0.2 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    {t(`header.menu.${item.key}`)}
                                                </motion.a>
                                            )}
                                        </motion.div>
                                    ))}
                                </nav>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header