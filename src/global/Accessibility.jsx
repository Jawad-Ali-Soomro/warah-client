import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const CustomDropdown = ({ options, placeholder, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, []) 

  const selectedOption = options.find(opt => opt.value === (value?.value || value))

  return (
    <div className="relative w-[100%]" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border-b border-gray-400 h-[40px] outline-none focus:border-black transition-all duration-300 bg-white cursor-pointer flex items-center justify-between uppercase text-left"
      >
        <span className={selectedOption ? 'text-sm' : 'text-gray-500 text-sm'}>
          {selectedOption ? selectedOption.label : (value?.label || placeholder || 'select')}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-400 shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option)
                setIsOpen(false)
              }}
              className={`w-full px-4 py-2 text-sm text-left uppercase hover:bg-gray-100 transition-colors duration-150 ${
                (value?.value || value) === option.value ? 'bg-gray-200' : ''
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

const Accessibility = () => {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const [location, setLocation] = useState(null)
  const [language, setLanguage] = useState(null)

  // All location options
  const locationKeys = [
    'pk', 'us', 'uk', 'ca', 'au', 'ae', 'sa', 'in', 'bd', 'eg', 'tr', 'de', 'fr', 'it', 'es',
    'nl', 'be', 'ch', 'at', 'se', 'no', 'dk', 'fi', 'pl', 'cz', 'gr', 'pt', 'ie', 'nz', 'sg',
    'my', 'th', 'ph', 'id', 'vn', 'jp', 'kr', 'cn', 'hk', 'tw', 'mx', 'br', 'ar', 'cl', 'co',
    'pe', 'za', 'ng', 'ke'
  ]

  // All language options
  const languageKeys = [
    'en', 'es', 'fr', 'de', 'it', 'pt', 'nl', 'pl', 'ru', 'zh', 'ja', 'ko', 'ar', 'hi', 'tr',
    'sv', 'no', 'da', 'fi', 'cs', 'el', 'he', 'th', 'vi', 'id', 'ms', 'ur', 'bn'
  ]

  const locationOptions = locationKeys.map(key => ({
    value: key,
    label: t(`locations.${key}`)
  }))

  const languageOptions = languageKeys.map(key => ({
    value: key,
    label: t(`languages.${key}`)
  }))

  const handleLanguageChange = (option) => {
    setLanguage(option)
    i18n.changeLanguage(option.value)
    // Update location label with new language (if location exists)
    if (location) {
      setLocation(prev => ({
        ...prev,
        label: t(`locations.${prev.value}`)
      }))
    }
  }

  const handleLocationChange = (option) => {
    setLocation({
      ...option,
      label: t(`locations.${option.value}`)
    })
  }

  const handleContinue = () => {
    // Only proceed if both location and language are selected
    if (location && language) {
      // Save to localStorage
      localStorage.setItem('location', location.value)
      localStorage.setItem('language', language.value)
      
      // Set the language
      i18n.changeLanguage(language.value)
      
      // Navigate to home
      navigate('/home')
    }
  }

  // Update labels when language changes (only if values exist)
  useEffect(() => {
    if (location) {
      setLocation(prev => ({
        ...prev,
        label: t(`locations.${prev.value}`)
      }))
    }
    if (language) {
      setLanguage(prev => ({
        ...prev,
        label: t(`languages.${prev.value}`)
      }))
    }
  }, [i18n.language, t])

  return (
    <div className='flex flex-col min-h-[100vh] w-screen items-start justify-start p-10'>
        <div className="flex flex-col justify-start items-start gap-4 h-full">
            <h1 className='text-7xl md:text-9xl font-bold' style={{fontFamily: 'Libre Bodoni'}}>{t('title')}</h1>
        
            <div className="flex flex-col gap-2 mt-5 w-full">
            <CustomDropdown
              options={locationOptions}
              value={location}
              onChange={handleLocationChange}
              placeholder={t('location')}
            />
            </div>
          <div className="flex flex-col gap-2 w-full">
            <CustomDropdown
              options={languageOptions}
              value={language}
              onChange={handleLanguageChange}
              placeholder={t('language')}
            />
          </div>
          <button 
            onClick={handleContinue}
            disabled={!location || !language}
            className={`border border-black animated-button text-black w-full h-[50px] text-sm font-bold cursor-pointer uppercase ${
              !location || !language ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {t('continue')}
          </button>
        </div>
    </div>
  )
}

export default Accessibility