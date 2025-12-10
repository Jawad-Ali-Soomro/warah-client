import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation()

    const footerLinks = {
        help: [
            { key: 'shipping', href: '/shipping' },
            { key: 'returns', href: '/returns' },
            { key: 'payment', href: '/payment' },
            { key: 'sizeGuide', href: '/size-guide' },
            { key: 'faq', href: '/faq' }
        ],
        about: [
            { key: 'about', href: '/about' },
            { key: 'contact', href: '/contact' }
        ]
    }

    return (
        <footer className="w-full border-t border-gray-200 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Help Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xs font-medium uppercase tracking-wider mb-4">
                            {t('footer.help')}
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.help.map((link) => (
                                <li key={link.key}>
                                    <a
                                        href={link.href}
                                        className="text-xs font-light hover:opacity-70 transition-opacity"
                                    >
                                        {t(`footer.${link.key}`)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* About Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-xs font-medium uppercase tracking-wider mb-4">
                            {t('footer.about')}
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.about.map((link) => (
                                <li key={link.key}>
                                    <a
                                        href={link.href}
                                        className="text-xs font-light hover:opacity-70 transition-opacity"
                                    >
                                        {t(`footer.${link.key}`)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Newsletter Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-xs font-medium uppercase tracking-wider mb-4">
                            {t('footer.newsletter')}
                        </h3>
                        <p className="text-xs font-light mb-4">
                            Subscribe to receive updates on new arrivals and special offers.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder={t('footer.emailPlaceholder')}
                                className="flex-1 border-b border-black outline-none text-xs py-2 focus:border-black transition-colors"
                            />
                            <motion.button
                                type="submit"
                                className="border border-black px-6 py-2 text-xs uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {t('footer.subscribe')}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-200 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs font-light">
                            {t('footer.copyright')}
                        </p>
                        <div className="flex gap-6">
                            <a
                                href="/terms"
                                className="text-xs font-light hover:opacity-70 transition-opacity"
                            >
                                {t('footer.terms')}
                            </a>
                            <a
                                href="/privacy"
                                className="text-xs font-light hover:opacity-70 transition-opacity"
                            >
                                {t('footer.privacy')}
                            </a>
                            <a
                                href="/cookies"
                                className="text-xs font-light hover:opacity-70 transition-opacity"
                            >
                                {t('footer.cookies')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

