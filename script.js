document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Language switcher
    const languageSelector = document.querySelector('.language-selector');
    const currentLang = document.querySelector('.current-lang');
    const langDropdown = document.querySelector('.lang-dropdown');

    languageSelector.addEventListener('click', function(e) {
        e.stopPropagation();
        langDropdown.style.display = langDropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function() {
        langDropdown.style.display = 'none';
    });

    // Translation functionality
    const translations = {
        ka: {
            'home': 'მთავარი',
            'about': 'ჩვენს შესახებ',
            'services': 'სერვისები',
            'fleet': 'ავტოპარკი',
            'contact': 'კონტაქტი',
            'hero-title': 'პროფესიონალური ავეჯის და ტვირთის გადაზიდვა',
            'hero-subtitle': 'სწრაფი, საიმედო და ხარისხიანი მომსახურება თბილისსა და მთელ საქართველოში.',
            'cta-button': 'დაგვიკავშირდით'
        },
        en: {
            'home': 'Home',
            'about': 'About Us',
            'services': 'Services',
            'fleet': 'Vehicle Fleet',
            'contact': 'Contact',
            'hero-title': 'Professional Furniture and Cargo Transportation',
            'hero-subtitle': 'Fast, reliable, and high-quality service in Tbilisi and all of Georgia.',
            'cta-button': 'Contact Us'
        }
    };

    function changeLang(lang) {
        currentLang.textContent = lang.toUpperCase();
        // Add translation logic here
    }
});

// Initialize Swiper
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all Swiper instances
    const swipers = document.querySelectorAll('.vehicle-swiper');
    swipers.forEach(swiperElement => {
        new Swiper(swiperElement, {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            }
        });
    });

    
});


document.addEventListener('DOMContentLoaded', function() {
    // Get all sections
    const sections = document.querySelectorAll('section, header.hero');
    const navLinks = document.querySelectorAll('.nav-links .nav-link');

    // Function to update active link
    function updateActiveLink() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Offset for better trigger point
            const sectionHeight = section.clientHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        // Update active state of navigation links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', updateActiveLink);

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Offset for fixed header
                behavior: 'smooth'
            });

            // Update active state
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Initial check for active section
    updateActiveLink();
});

document.addEventListener('DOMContentLoaded', function() {
    // Get language elements
    const currentLang = document.querySelector('.current-lang');
    const langLinks = document.querySelectorAll('.lang-dropdown a');
    
    // Set default language
    let currentLanguage = localStorage.getItem('language') || 'ka';
    updateLanguage(currentLanguage);

    // Language switching functionality
    langLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang');
            currentLanguage = lang;
            localStorage.setItem('language', lang);
            updateLanguage(lang);
        });
    });

    // Function to update all translations
    function updateLanguage(lang) {
        // Update current language display
        currentLang.textContent = lang.toUpperCase() === 'KA' ? 'GE' : 'EN';

        // Update all translated elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        const langSelector = document.querySelector('.language-selector');
        if (!langSelector.contains(e.target)) {
            langSelector.classList.remove('active');
        }
    });
});

// Translations object
 const translations = {
    ka: {
        'page-title': 'ავეჯის და ტვირთის გადაზიდვა | Gadazidva24.GE',
        'nav-home': 'მთავარი',
        'nav-about': 'ჩვენს შესახებ',
        'nav-services': 'სერვისები',
        'nav-fleet': 'ავტოპარკი',
        'nav-contact': 'კონტაქტი',
        'hero-title-1': 'სანდო პარტნიორი',
        'hero-title-2': 'თქვენი გადაადგილებისთვის',
        'hero-title-3': '',
        'hero-subtitle': 'ავეჯის, ტვირთის და ნივთების პროფესიონალური გადატანა — სწრაფად, დაზღვეულად და ზუსტად თქვენი მოთხოვნების მიხედვით.',
        'hero-location': 'თბილისში და მთელი საქართველოს მასშტაბით.',
        'cta-button': 'დაგვიკავშირდით',
        'experience-title': 'ჩვენი გამოცდილება თქვენს სამსახურში',
        'experience-subtitle': '27 წლიანი გამოცდილება და მაღალი პროფესიონალიზმი!',
        'why-us-title': 'რატომ Gadazidva24.GE?',
        'company-description': 'ჩვენი კომპანია, Gadazidva24.GE 1998 წლიდან ემსახურება თბილისსა და საქართველოს მასშტაბით ათასობით კმაყოფილ კლიენტს. წლების განმავლობაში ჩვენმა გამოცდილებამ და სანდოობამ გაგვხადა ერთ-ერთი წამყვანი კომპანია ტვირთების გადაზიდვის სფეროში.',
        'fleet-description': 'ჩვენ გვყავს 3 ძირითადი და 2 სარეზერვო თანამედროვე ავტომობილი, რაც საშუალებას გვაძლევს შევასრულოთ ნებისმიერი მოცულობის და სირთულის შეკვეთა. ჩვენი პროფესიონალების გუნდი უზრუნველყოფს ხარისხიან, ორგანიზებულ და კლიენტზე მორგებულ მომსახურებას — ზუსტად შეთანხმებულ დროსა და პირობებში.',
        'service-247': 'მომსახურება 24/7',
        'client-wishes': 'ვითვალისწინებთ ყველა კლიენტის სურვილს',
        'completed-orders': '5200+ წარმატებით შესრულებული შეკვეთა',
        'services-title': 'ჩვენი სერვისები',
        'services-subtitle': 'გთავაზობთ ტრანსპორტირების სრულ სერვისს თქვენი კომფორტისთვის.',
        'service-1-title': 'უფასო კონსულტაცია',
        'service-1-description': 'შეფასება და პროფესიონალური რჩევა.',
        'service-2-title': 'მუშახელის დაქირავება',
        'service-2-description': 'გამოცდილი მუშახელი თქვენს სამსახურში.',
        'service-3-title': 'ავეჯის დაშლა/აწყობა',
        'service-3-description': 'ფრთხილი და პროფესიონალური მიდგომა.',
        'service-4-title': 'ბინის გადაზიდვა',
        'service-4-description': 'სრული სერვისი თქვენი კომფორტისთვის.',
        'service-5-title': 'პიანინოს გადაზიდვა',
        'service-5-description': 'სპეციალიზირებული ტრანსპორტირება.',
        'service-6-title': 'ოფისის/საწყობის გადაზიდვა',
        'service-6-description': 'მასშტაბური გადაზიდვები.',
        'service-7-title': 'სეიფის/ბანკომატის გადაზიდვა',
        'service-7-description': 'მძიმე და სპეციფიური ტვირთი.',
        'service-8-title': 'ტრაილერის გადმოტვირთვა',
        'service-8-description': 'სწრაფი და ორგანიზებული სამუშაო.',
        'fleet-title': 'ჩვენი ავტოპარკი',
        'fleet-subtitle': 'აირჩიეთ თქვენს საჭიროებებზე მორგებული ტრანსპორტი',
        'capacity': 'ტვირთამწეობა:',
        'price-tbilisi': 'ფასი თბილისში:',
        'price-outside': 'ფასი თბილისის გარეთ:',
        'price-negotiable': 'შეთანხმებით',
        'unit-kg': 'კგ',
        'contact-title': 'დაგვიკავშირდით',
        'contact-subtitle': 'ჩვენ მზად ვართ ვუპასუხოთ ყველა თქვენს შეკითხვას და დაგეხმაროთ გადაზიდვის ორგანიზებაში.',
        'contact-phone': 'დაგვირეკეთ',
        'contact-email': 'ელ-ფოსტა',
        'contact-facebook': 'Facebook',
        'contact-address': 'მისამართი',
        'copyright': '© 2025 Gadazidva24.GE. ყველა უფლება დაცულია.',
        'hero-location': 'თბილისში და მთელი საქართველოს მასშტაბით.',
        'location-address': 'თბილისი, საქართველო',
        'footer-description': 'პროფესიონალური გადაზიდვები თბილისსა და საქართველოში.'
    },
    en: {
        'page-title': 'Furniture and Cargo Transportation | Gadazidva24.GE',
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-services': 'Services',
        'nav-fleet': 'Vehicle Fleet',
        'nav-contact': 'Contact',
        'hero-title-1': 'Reliable Partner',
        'hero-title-2': 'For Your Moving Needs',
        'hero-title-3': '',
        'hero-subtitle': 'Professional transportation of furniture, cargo, and items — fast, insured, and precisely according to your requirements.',
        'hero-location': 'In Tbilisi and throughout Georgia.',
        'cta-button': 'Contact Us',
        'experience-title': 'Our Experience at Your Service',
        'experience-subtitle': '27 years of experience and high professionalism!',
        'why-us-title': 'Why Gadazidva24.GE?',
        'company-description': 'Our company, Gadazidva24.GE, has been serving thousands of satisfied customers in Tbilisi and throughout Georgia since 1998. Over the years, our experience and reliability have made us one of the leading companies in the cargo transportation industry.',
        'fleet-description': 'We have 3 main and 2 reserve modern vehicles, which allows us to handle orders of any volume and complexity. Our team of professionals provides quality, organized, and customer-oriented service — exactly at the agreed time and conditions.',
        'service-247': '24/7 Service',
        'client-wishes': 'We Consider Every Client\'s Wishes',
        'completed-orders': '5200+ Successfully Completed Orders',
        'services-title': 'Our Services',
        'services-subtitle': 'We offer a complete transportation service for your convenience.',
        'service-1-title': 'Free Consultation',
        'service-1-description': 'Assessment and professional advice.',
        'service-2-title': 'Hiring Workers',
        'service-2-description': 'Experienced workforce at your service.',
        'service-3-title': 'Furniture Assembly/Disassembly',
        'service-3-description': 'Careful and professional approach.',
        'service-4-title': 'Apartment Moving',
        'service-4-description': 'Full service for your comfort.',
        'service-5-title': 'Piano Moving',
        'service-5-description': 'Specialized transportation.',
        'service-6-title': 'Office/Warehouse Moving',
        'service-6-description': 'Large-scale transportation.',
        'service-7-title': 'Safe/ATM Moving',
        'service-7-description': 'Heavy and specific cargo.',
        'service-8-title': 'Trailer Unloading',
        'service-8-description': 'Fast and organized work.',
        'fleet-title': 'Our Vehicle Fleet',
        'fleet-subtitle': 'Choose the transport tailored to your needs',
        'capacity': 'Capacity:',
        'price-tbilisi': 'Price in Tbilisi:',
        'price-outside': 'Price Outside Tbilisi:',
        'price-negotiable': 'Negotiable',
        'unit-kg': 'kg',
        'contact-title': 'Contact Us',
        'contact-subtitle': 'We are ready to answer all your questions and help you organize your transportation.',
        'contact-phone': 'Call Us',
        'contact-email': 'Email',
        'contact-facebook': 'Facebook',
        'contact-address': 'Address',
        'copyright': '© 2025 Gadazidva24.GE. All rights reserved.',
        'hero-location': 'In Tbilisi and throughout Georgia.',
        'location-address': 'Tbilisi, Georgia',
        'footer-description': 'Professional transportation in Tbilisi and Georgia.'
    }
}; 