'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'

// ─── Color Palette ───────────────────────────────────────────────
// Deep Forest Green: #1B4332
// Medium Green: #2D6A4F
// Light Green: #40916C
// Luxurious Gold: #C9A96E
// Warm Gold: #D4A574
// Off-White: #FAF9F6
// Cream: #F5F0E8

type Page = 'home' | 'menu' | 'contact' | 'showcase'

// ─── Navigation Component ────────────────────────────────────────
function Navigation({ currentPage, onNavigate }: { currentPage: Page; onNavigate: (page: Page) => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navPages: Page[] = ['home', 'menu', 'contact']

  const handleNavClick = (page: Page) => {
    onNavigate(page)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="w-full" style={{ backgroundColor: '#1B4332' }}>
      <div className="px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C9A96E' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 20V14C7 11.2 5 9 5 9C5 9 8 9 8 6C8 3 7 2 7 2C7 2 10 4 10 7C10 10 8 11 8 14V20H7Z" fill="#1B4332"/>
              <path d="M12 20V12C12 8 10 6 10 6C10 6 13 5 13 2C13 2 15 5 15 8C15 11 13 11 13 14V20H12Z" fill="#1B4332"/>
              <path d="M17 20V14C17 11.2 15 9 15 9C15 9 18 9 18 6C18 3 17 2 17 2C17 2 20 4 20 7C20 10 18 11 18 14V20H17Z" fill="#1B4332"/>
            </svg>
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-wide" style={{ color: '#C9A96E', fontFamily: 'Georgia, "Times New Roman", serif' }}>
            3 Trees Cafe
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navPages.map((page) => (
            <button
              key={page}
              onClick={() => onNavigate(page)}
              className="text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:opacity-100"
              style={{
                color: currentPage === page ? '#C9A96E' : 'rgba(255,255,255,0.7)',
                opacity: currentPage === page ? 1 : 0.7,
                borderBottom: currentPage === page ? '2px solid #C9A96E' : '2px solid transparent',
                paddingBottom: '4px',
              }}
            >
              {page === 'home' ? 'Home' : page === 'menu' ? 'Menu' : 'Contact'}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300"
          style={{ color: '#C9A96E' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: mobileMenuOpen ? '240px' : '0px',
          opacity: mobileMenuOpen ? 1 : 0,
        }}
      >
        <div className="px-6 pb-4 pt-2 flex flex-col gap-1">
          {navPages.map((page) => (
            <button
              key={page}
              onClick={() => handleNavClick(page)}
              className="w-full text-left px-4 py-3 rounded-lg text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300"
              style={{
                color: currentPage === page ? '#C9A96E' : 'rgba(255,255,255,0.7)',
                backgroundColor: currentPage === page ? 'rgba(201,169,110,0.1)' : 'transparent',
              }}
            >
              {page === 'home' ? 'Home' : page === 'menu' ? 'Menu' : 'Contact'}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

// ─── Hero Section ────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: '#FAF9F6' }}>
      {/* Hero Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full" style={{ backgroundColor: '#1B4332', filter: 'blur(120px)' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full" style={{ backgroundColor: '#C9A96E', filter: 'blur(120px)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Hero Text */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: '#C9A96E' }}>
              Lusaka&apos;s Finest Dining Experience
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: '#1B4332', fontFamily: 'Georgia, "Times New Roman", serif' }}>
            Taste the<br />
            <span style={{ color: '#C9A96E' }}>Extraordinary</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#5a6b5e' }}>
            From gourmet mains to artisanal coffee, every dish at 3 Trees Cafe is crafted with passion.
            Experience the vibrant flavours of Zambia in a setting that feels like home.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <Badge
              className="px-4 py-2 text-xs font-semibold rounded-full border-0"
              style={{ backgroundColor: '#1B4332', color: '#C9A96E' }}
            >
              4.4 Star Rated Experience
            </Badge>
            <Badge
              className="px-4 py-2 text-xs font-semibold rounded-full border-0"
              style={{ backgroundColor: '#C9A96E20', color: '#1B4332', border: '1px solid #C9A96E' }}
            >
              ZK 200 - 700
            </Badge>
          </div>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {[
            { src: '/food-grain-bowl.png', title: 'Rainbow Veggie Grain Bowl', price: 'K160', tag: 'Healthy' },
            { src: '/food-sushi.png', title: 'Golden Tempura Sushi Rolls', price: 'K290', tag: 'Popular' },
            { src: '/food-salmon.png', title: 'Pan-Seared Glazed Salmon', price: 'K295', tag: 'Signature' },
            { src: '/food-cappuccino.png', title: 'Artisanal Cappuccino', price: 'K100', tag: 'Favourite' },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
              style={{ boxShadow: '0 4px 24px rgba(27,67,50,0.08)' }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute top-3 right-3">
                <span
                  className="text-[10px] uppercase tracking-[0.15em] font-bold px-3 py-1 rounded-full"
                  style={{ backgroundColor: '#C9A96E', color: '#1B4332' }}
                >
                  {item.tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-sm lg:text-base mb-1 leading-snug">{item.title}</h3>
                <span className="text-lg font-bold" style={{ color: '#C9A96E' }}>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Featured Section ────────────────────────────────────────────
function FeaturedSection() {
  const features = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
        </svg>
      ),
      title: '4.4 Star Rated',
      desc: 'Consistently rated as one of Lusaka\'s top dining spots by over 2,264 reviewers.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Serving Since 2010',
      desc: 'Over a decade of culinary excellence, serving breakfast, lunch, and artisanal coffee daily.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: 'Nkanchibaya Rd, Lusaka',
      desc: 'Conveniently located in the heart of Lusaka with a warm, inviting atmosphere.',
    },
  ]

  return (
    <section className="w-full py-20" style={{ backgroundColor: '#1B4332' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: '#C9A96E' }}>
            Why Choose Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 text-white" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            A Dining Experience Like No Other
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,169,110,0.2)' }}>
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#C9A96E' }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Menu Data ───────────────────────────────────────────────────
interface MenuItem {
  name: string
  price: string
  description?: string
  badge?: string
}

interface MenuSection {
  title: string
  subtitle?: string
  items: MenuItem[]
}

const menuData: { category: string; sections: MenuSection[] }[] = [
  {
    category: 'Breakfast',
    sections: [
      {
        title: 'Breakfast Selection',
        subtitle: 'Served all day',
        items: [
          { name: 'Fruit Bowl', price: 'K130' },
          { name: 'Yoghurt Muesli Cup', price: 'K110', description: 'Greek yoghurt, mixed berries, seeds and fruit' },
        ],
      },
      {
        title: 'Pastries',
        items: [
          { name: 'Croissant — Plain', price: 'K70' },
          { name: 'Croissant — Chocolate', price: 'K75' },
          { name: 'Pineapple Danish', price: 'K80' },
          { name: 'Raspberry Danish', price: 'K85' },
          { name: 'Almond Danish', price: 'K85' },
        ],
      },
      {
        title: 'Really Hungry?',
        items: [
          { name: 'Super Eggs Benedict', price: 'K170', description: 'Perfectly poached eggs on herbed mushroom ragout' },
          { name: 'Sultry Trout', price: 'K240', description: 'Silky scrambled eggs with smoked trout on toasted health bread and cream cheese' },
          { name: 'The Business', price: 'K240', description: '2 eggs, mushrooms, beef chipolatas, chilli beans, grilled cheesy tomato, potato wedges & toast' },
          { name: 'Scramble Eggs', price: 'K120', description: '3 eggs, scrambled on two slices of toast' },
          { name: 'Fried Eggs', price: 'K110', description: '2 eggs, fried to your liking, on two slices of toast' },
          { name: 'Rowdy Rump', price: 'K230', description: '180g rump steak with fries, 2 eggs, sautéed mushrooms, tomato chutney & toast' },
          { name: 'Boerewors and Eggs', price: 'K230', description: 'Grilled onions, tomatoes, fresh tomato chutney & spicy baked beans' },
          { name: 'Sunshine Breakfast', price: 'K235', description: '2 fried eggs, masala beans, sautéed mushrooms, Macon, tomato chutney, breakfast sausage & toast' },
        ],
      },
      {
        title: 'Breakfast Wraps',
        subtitle: 'With scrambled eggs',
        items: [
          { name: 'Smoked Trout / Cream Cheese', price: 'K230' },
          { name: 'Spinach / Feta', price: 'K170' },
          { name: 'Spicy Chicken / Guacamole', price: 'K200' },
        ],
      },
      {
        title: 'Avo Smash Toast',
        items: [
          { name: 'Plain', price: 'K120' },
          { name: 'With Poached Eggs', price: 'K150' },
          { name: 'With Smoked Trout', price: 'K230' },
        ],
      },
      {
        title: 'Omelettes',
        subtitle: 'Served with two slices of toast',
        items: [
          { name: 'Vegetarian', price: 'K155', description: 'Onions, peppers, mushroom & tomato' },
          { name: 'Spicy Rump Strips', price: 'K185' },
          { name: 'Cheese', price: 'K165' },
        ],
      },
      {
        title: 'French Toast',
        items: [
          { name: 'Classic', price: 'K150', description: 'With berry compote and maple syrup' },
        ],
      },
      {
        title: 'Toasted Sandwiches',
        subtitle: 'Served with French fries or side salad',
        items: [
          { name: 'Chicken Mayo', price: 'K145' },
          { name: 'Cheese & Tomato', price: 'K120' },
        ],
      },
    ],
  },
  {
    category: 'Lunch',
    sections: [
      {
        title: 'Quesadillas',
        subtitle: 'Served with a yoghurt dip',
        items: [
          { name: 'Spicy Chickpea, Spinach & Salsa', price: 'K180', badge: 'V' },
          { name: 'Spicy Ground Beef', price: 'K210', description: 'Mince beef with jalapeños, guacamole & cheese' },
          { name: 'Spicy Beef Strips with Avocado Mash', price: 'K220' },
          { name: 'Chicken, Coriander & Onion', price: 'K215' },
        ],
      },
      {
        title: 'Wraps',
        subtitle: 'Served with side salad or chips',
        items: [
          { name: 'Pulled Beef Wrap', price: 'K225', description: 'Slow cooked brisket with avo, cream cheese, jalapeños, salsa & cilantro' },
          { name: 'Haloumi Beef', price: 'K205', description: 'Spicy rump strips & deep fried haloumi cheese' },
          { name: 'Chicken Wrap', price: 'K210', description: 'Spicy chicken, refried beans, lettuce, tomato chutney & avocado' },
          { name: 'Falafel', price: 'K180', description: 'Falafel with spring onion, tomato, parsley, tahini, pickled chilli & gherkins' },
          { name: 'Spicy Chicken Pocket', price: 'K215', description: 'Spicy chicken, tomato, onion, lettuce & avocado in pita' },
        ],
      },
      {
        title: 'Sandwiches',
        subtitle: 'Served with French fries or a side salad',
        items: [
          { name: 'Steak Roll', price: 'K230', description: 'Grilled rump in prego marinade, chimichurri or BBQ, fresh baguette with lettuce, tomato, caramelised onion & mozzarella' },
          { name: 'Twisted Tuna', price: 'K185', description: 'Tuna, celery, apple, mayo, basil & red peppers on seeded health bread' },
          { name: 'Roast Beef Panini', price: 'K210', description: 'Roast beef, cream cheese, grilled baby marrow, dijon mustard & radish' },
        ],
      },
      {
        title: 'Salads',
        items: [
          { name: 'Smoked Chicken & Quinoa', price: 'K210' },
          { name: 'Spiced Calamari', price: 'K240', description: 'Falklands calamari, home-made sauces, garden salad' },
          { name: 'Greek', price: 'K240', description: 'Chunky tomato, Calamata olives, red onion, feta, garden greens' },
          { name: 'Humus Plate', price: 'K170', description: 'Freshly made humus, diced tomatoes, falafel & pita bread' },
          { name: 'Salmon Salad', price: 'K295', description: 'Chunky grilled Norwegian salmon over a Greek salad' },
          { name: 'Butternut & Lentil', price: 'K160', description: 'Roasted butternut, lentils, feta & rocket with lemon dressing' },
        ],
      },
    ],
  },
  {
    category: 'Grill',
    sections: [
      {
        title: 'Signature Steaks',
        subtitle: 'Served with French fries or a side salad',
        items: [
          { name: 'The T-Bone 330g–350g', price: 'K280' },
          { name: 'Righteous Rump 330g–350g', price: 'K270' },
          { name: 'Fillet of Beef 250g–300g', price: 'K270' },
          { name: 'Mixed Grill', price: 'K310', description: 'Rump, sausage & wings' },
          { name: 'Grilled Wings (six)', price: 'K200' },
        ],
      },
      {
        title: 'Pan-Fried Beef',
        subtitle: 'In butter, garlic & herbs — served with spinach/leek mash & roasted butternut purée',
        items: [
          { name: 'T-Bone', price: 'K315' },
          { name: 'Rump', price: 'K305' },
          { name: 'Fillet', price: 'K310' },
        ],
      },
      {
        title: 'Speciality Sauces',
        items: [
          { name: 'Herb Butter', price: 'K40' },
          { name: 'Pepper', price: 'K40' },
          { name: 'Mushroom', price: 'K45' },
          { name: 'Roasted Garlic', price: 'K40' },
        ],
      },
      {
        title: 'Grilled Half Chicken 500g–600g',
        subtitle: 'Served with French fries or side salad',
        items: [
          { name: 'Peri Peri', price: 'K215' },
          { name: 'Lemon & Herb', price: 'K215' },
        ],
      },
      {
        title: "Children's Menu",
        items: [
          { name: 'Kiddies Beef Burger & Fries', price: 'K115' },
          { name: 'Kiddies Chicken Cheeseburger & Fries', price: 'K115' },
          { name: 'Fish Fingers & Fries', price: 'K115' },
          { name: 'Mac & Cheese', price: 'K115' },
          { name: 'Crumbed Chicken Wings', price: 'K115' },
          { name: 'Spaghetti Bolognaise', price: 'K130' },
        ],
      },
    ],
  },
  {
    category: 'Pasta & Sushi',
    sections: [
      {
        title: 'Pasta',
        items: [
          { name: 'Marinaro', price: 'K275', description: 'Mussels, calamari & prawns in spicy tomato sauce' },
          { name: 'Mushroom Pasta', price: 'K215', description: 'Mushrooms, herbs, garlic in light cream sauce' },
          { name: 'Spicy Seafood', price: 'K285', description: 'Mussels, calamari & prawns in light cream sauce' },
          { name: 'Spicy Chicken', price: 'K215', description: 'Chicken medallions in spiced cream sauce' },
          { name: 'Prawn Pasta', price: 'K270', description: 'Prawn tails, cherry tomatoes, garlic parmesan & parsley' },
          { name: 'Pesto Pasta', price: 'K180', description: 'Freshly made basil pesto, penne or spaghetti' },
        ],
      },
      {
        title: 'Sushi Bar',
        subtitle: 'Mon–Sun 09:00–17:00',
        items: [
          { name: 'California Rolls 8pc — Salmon', price: 'K270' },
          { name: 'California Rolls 8pc — Tuna', price: 'K270' },
          { name: 'California Rolls 8pc — Prawn', price: 'K280' },
          { name: 'California Rolls 8pc — Vegetable', price: 'K175' },
          { name: 'Maki 6pc — Salmon', price: 'K260' },
          { name: 'Maki 6pc — Tuna', price: 'K260' },
          { name: 'Maki 6pc — Prawn', price: 'K265' },
          { name: 'Maki 6pc — Vegetable', price: 'K160' },
          { name: 'Sashimi — Salmon/Tuna 3pc', price: 'K260' },
          { name: 'Roses 3pc — Salmon', price: 'K250' },
          { name: 'Rainbow Rolls 8pc — Salmon', price: 'K270' },
          { name: 'Rainbow Rolls 8pc — Tuna', price: 'K270' },
          { name: 'Rainbow Reloaded 8pc', price: 'K290', description: 'Prawn & avo, salmon & tuna, teriyaki sauce' },
          { name: 'Volcano Fashion Sandwich 8pc', price: 'K290', description: 'Original salmon/tuna fashion sandwich topped with seared salmon/tuna' },
          { name: 'Rockshrimp Tempura 8pc — Spicy Tuna', price: 'K335' },
          { name: 'Rockshrimp Tempura 8pc — Spicy Salmon', price: 'K340' },
          { name: 'Prawn Crispy California 8pc', price: 'K315', description: '5 blanched prawns in spicy mayo, wrapped in springroll pastry, deep-fried' },
        ],
      },
      {
        title: 'Sushi Platters',
        items: [
          { name: 'Salmon Platter', price: 'K550', description: '4pc California Roll, 6pc Sashimi, 4pc Nigiri, 2pc Roses' },
          { name: '3 Trees Platter', price: 'K430', description: '4pc Rockshrimp, 4pc California Roll Salmon/Tuna, 4pc Roses' },
          { name: 'Combo Platter', price: 'K785', description: '6pc Sashimi, 4pc Rockshrimp, 4pc California Rolls, 4pc Roses, 4pc Nigiri' },
        ],
      },
    ],
  },
  {
    category: 'Drinks',
    sections: [
      {
        title: 'SloJo Fruit Crushes',
        items: [
          { name: 'Green Apple', price: 'K92' },
          { name: 'Applemint', price: 'K92' },
          { name: 'Apple Crush', price: 'K92' },
          { name: 'Mixed Berry Crush', price: 'K92' },
          { name: 'Lemon Berry Crush', price: 'K92' },
          { name: 'Mango Crush', price: 'K95' },
          { name: 'Volcano Crush', price: 'K92' },
          { name: 'Granadilla Crush', price: 'K92' },
          { name: 'Berrydilla Volcano', price: 'K95' },
        ],
      },
      {
        title: 'Freshly Squeezed Juices',
        items: [
          { name: 'Apple Bomb', price: 'K100', description: 'Green Apple, Lime, Cucumber' },
          { name: 'Ginger Ninja', price: 'K100', description: 'Green Apple, Lemon, Ginger' },
          { name: 'Crazy Carrot', price: 'K100', description: 'Apple, Carrot, Lemon, Ginger' },
          { name: 'Vitamin Boost', price: 'K100', description: 'Orange, Apple, Lemon, Ginger' },
          { name: 'Apple', price: 'K100' },
          { name: 'Pineapple', price: 'K100' },
          { name: 'Orange', price: 'K100' },
          { name: 'UnBeetable', price: 'K100', description: 'Beetroot, Pineapple, Carrot, Mint, Lemon' },
          { name: 'Heart Beet', price: 'K100', description: 'Beetroot, Apple, Carrot, Spinach, Lemon' },
          { name: 'Beetroot Bomb', price: 'K100', description: 'Beetroot, Pear, Carrot, Lemon' },
        ],
      },
      {
        title: 'Milkshakes',
        items: [
          { name: 'Mango', price: 'K100' },
          { name: 'Mixed Berry', price: 'K100' },
          { name: 'Nutella', price: 'K100' },
          { name: 'Coffee', price: 'K100' },
          { name: 'Strawberry', price: 'K95' },
          { name: 'Toasted Marshmallow', price: 'K95' },
          { name: 'Oreo', price: 'K100' },
          { name: 'Chocolate Decadence', price: 'K110' },
          { name: 'Bar-One', price: 'K110' },
        ],
      },
      {
        title: 'Home-made Brews',
        items: [
          { name: 'Kombucha', price: 'K80' },
          { name: 'Ginger Beer', price: 'K70' },
          { name: 'Moroccan Tea', price: 'K70' },
        ],
      },
      {
        title: 'Sodas',
        items: [
          { name: 'Coke / Coke Zero / Fanta / Sprite', price: 'K27' },
          { name: 'Ginger Ale', price: 'K32' },
          { name: 'Soda Water', price: 'K32' },
          { name: 'Pepsi / 7UP / Miranda', price: 'K27' },
        ],
      },
    ],
  },
]

// ─── Menu Item Component ─────────────────────────────────────────
function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2.5 group">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium" style={{ color: '#1B4332' }}>{item.name}</span>
          {item.badge && (
            <span
              className="text-[9px] font-bold px-1.5 py-0.5 rounded"
              style={{ backgroundColor: '#1B4332', color: '#C9A96E' }}
            >
              {item.badge}
            </span>
          )}
        </div>
        {item.description && (
          <p className="text-xs mt-0.5 leading-relaxed" style={{ color: '#8a9a8e' }}>{item.description}</p>
        )}
      </div>
      <span className="text-sm font-semibold whitespace-nowrap" style={{ color: '#C9A96E' }}>{item.price}</span>
    </div>
  )
}

// ─── Menu Section Component ──────────────────────────────────────
function MenuSectionBlock({ section }: { section: MenuSection }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <h3 className="text-base font-bold" style={{ color: '#1B4332', fontFamily: 'Georgia, "Times New Roman", serif' }}>
          {section.title}
        </h3>
        <div className="flex-1 h-px" style={{ backgroundColor: '#C9A96E', opacity: 0.3 }} />
      </div>
      {section.subtitle && (
        <p className="text-xs mb-2 italic" style={{ color: '#8a9a8e' }}>{section.subtitle}</p>
      )}
      <div className="divide-y" style={{ borderColor: 'rgba(201,169,110,0.1)' }}>
        {section.items.map((item, i) => (
          <MenuItemRow key={i} item={item} />
        ))}
      </div>
    </div>
  )
}

// ─── Menu Page ───────────────────────────────────────────────────
function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('Breakfast')

  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: '#FAF9F6' }}>
      {/* Menu Header */}
      <div className="w-full py-16 text-center" style={{ backgroundColor: '#1B4332' }}>
        <span className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: '#C9A96E' }}>
          Our Menu
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold mt-3 text-white" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
          Culinary Delights
        </h1>
        <div className="flex items-center justify-center gap-2 mt-4">
          <Badge className="px-4 py-2 text-xs font-semibold rounded-full border-0" style={{ backgroundColor: '#C9A96E', color: '#1B4332' }}>
            4.4 Star Rated Experience
          </Badge>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-0 z-20 border-b" style={{ backgroundColor: '#FAF9F6', borderColor: 'rgba(201,169,110,0.2)' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
            {menuData.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className="px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.1em] whitespace-nowrap transition-all duration-300"
                style={{
                  backgroundColor: activeCategory === cat.category ? '#1B4332' : 'transparent',
                  color: activeCategory === cat.category ? '#C9A96E' : '#1B4332',
                  border: `1px solid ${activeCategory === cat.category ? '#1B4332' : 'rgba(27,67,50,0.2)'}`,
                }}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-10">
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {menuData
            .filter((cat) => cat.category === activeCategory)
            .map((cat) =>
              cat.sections.map((section, i) => (
                <MenuSectionBlock key={i} section={section} />
              ))
            )}
        </div>

        {/* Menu Footer Info */}
        <div className="mt-16 pt-8 border-t text-center" style={{ borderColor: 'rgba(201,169,110,0.2)' }}>
          <p className="text-xs" style={{ color: '#8a9a8e' }}>
            Prices are in Zambian Kwacha (K). A 10% service charge applies. Please inform your server of any allergies.
          </p>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <span className="text-xs font-medium" style={{ color: '#1B4332' }}>Open Daily until 5 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="text-xs font-medium" style={{ color: '#1B4332' }}>097 8728652</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Contact Page ────────────────────────────────────────────────
function ContactPage() {
  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: '#FAF9F6' }}>
      {/* Contact Header */}
      <div className="w-full py-16 text-center" style={{ backgroundColor: '#1B4332' }}>
        <span className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: '#C9A96E' }}>
          Get In Touch
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold mt-3 text-white" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
          Contact Us
        </h1>
      </div>

      {/* Contact Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#1B4332', fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Find Us
            </h2>
            {/* Map */}
            <div className="rounded-2xl overflow-hidden mb-8 border" style={{ borderColor: 'rgba(201,169,110,0.2)' }}>
              <div className="relative aspect-[4/3]">
                <img
                  src="/map-location.png"
                  alt="3 Trees Cafe Location - Lusaka, Zambia"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-xl px-4 py-3 backdrop-blur-md" style={{ backgroundColor: 'rgba(27,67,50,0.85)' }}>
                    <p className="text-white text-sm font-semibold">3 Trees Cafe</p>
                    <p className="text-xs" style={{ color: '#C9A96E' }}>2 Nkanchibaya Rd, Lusaka 10101</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Info Cards */}
            <div className="space-y-4">
              <div
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                style={{ backgroundColor: 'white', border: '1px solid rgba(201,169,110,0.15)', boxShadow: '0 2px 12px rgba(27,67,50,0.04)' }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(27,67,50,0.08)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] font-semibold" style={{ color: '#8a9a8e' }}>Address</p>
                  <p className="text-sm font-medium" style={{ color: '#1B4332' }}>2 Nkanchibaya Rd, Lusaka 10101</p>
                </div>
              </div>
              <div
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                style={{ backgroundColor: 'white', border: '1px solid rgba(201,169,110,0.15)', boxShadow: '0 2px 12px rgba(27,67,50,0.04)' }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(27,67,50,0.08)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] font-semibold" style={{ color: '#8a9a8e' }}>Hours</p>
                  <p className="text-sm font-medium" style={{ color: '#1B4332' }}>Open Daily until 5 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#1B4332', fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Get in Touch
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#5a6b5e' }}>
              The best way to reach us is through WhatsApp. Whether you want to make a reservation, ask about our menu, or place an order, we are just a message away.
            </p>

            {/* WhatsApp Info Card */}
            <div
              className="flex items-center gap-4 p-5 rounded-xl mb-6"
              style={{ backgroundColor: 'white', border: '1px solid rgba(37,211,102,0.2)', boxShadow: '0 4px 20px rgba(37,211,102,0.08)' }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#25D366' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] font-semibold" style={{ color: '#8a9a8e' }}>WhatsApp</p>
                <p className="text-lg font-bold" style={{ color: '#1B4332' }}>+260 978 728 652</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/260978728652"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full h-14 rounded-xl text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
              style={{ backgroundColor: '#25D366', color: '#fff', boxShadow: '0 4px 16px rgba(37,211,102,0.3)' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>

            {/* Additional Info */}
            <div className="mt-8 p-6 rounded-xl" style={{ backgroundColor: 'rgba(27,67,50,0.04)', border: '1px solid rgba(201,169,110,0.1)' }}>
              <h3 className="text-sm font-bold mb-3" style={{ color: '#1B4332', fontFamily: 'Georgia, "Times New Roman", serif' }}>
                Visit Us
              </h3>
              <div className="space-y-2 text-sm" style={{ color: '#5a6b5e' }}>
                <p><span className="font-semibold" style={{ color: '#1B4332' }}>Address:</span> 2 Nkanchibaya Rd, Lusaka 10101, Zambia</p>
                <p><span className="font-semibold" style={{ color: '#1B4332' }}>Phone:</span> 097 8728652</p>
                <p><span className="font-semibold" style={{ color: '#1B4332' }}>Hours:</span> Open Daily until 5 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Footer ──────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="w-full py-10" style={{ backgroundColor: '#1B4332' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C9A96E' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 20V14C7 11.2 5 9 5 9C5 9 8 9 8 6C8 3 7 2 7 2C7 2 10 4 10 7C10 10 8 11 8 14V20H7Z" fill="#1B4332"/>
                <path d="M12 20V12C12 8 10 6 10 6C10 6 13 5 13 2C13 2 15 5 15 8C15 11 13 11 13 14V20H12Z" fill="#1B4332"/>
                <path d="M17 20V14C17 11.2 15 9 15 9C15 9 18 9 18 6C18 3 17 2 17 2C17 2 20 4 20 7C20 10 18 11 18 14V20H17Z" fill="#1B4332"/>
              </svg>
            </div>
            <span className="text-lg font-bold" style={{ color: '#C9A96E', fontFamily: 'Georgia, "Times New Roman", serif' }}>
              3 Trees Cafe
            </span>
          </div>
          <div className="flex items-center gap-6 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
            <span>2 Nkanchibaya Rd, Lusaka 10101</span>
            <span>|</span>
            <span>097 8728652</span>
            <span>|</span>
            <span>Open Daily until 5 PM</span>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
            &copy; {new Date().getFullYear()} 3 Trees Cafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─── Photo Gallery Section ───────────────────────────────────────
const galleryImages = [
  {
    src: 'https://res.cloudinary.com/di4mdnfju/image/upload/v1781011803/Screenshot_2026-06-09_1.44.55_PM_izw3vv.png',
    alt: 'Rainbow Veggie Grain Bowl — fresh colourful vegetables with grains',
    caption: 'Veggie Grain Bowl',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://res.cloudinary.com/di4mdnfju/image/upload/v1781011806/Screenshot_2026-06-09_1.43.59_PM_fzjc51.png',
    alt: 'Gourmet dish at 3 Trees Cafe',
    caption: 'Chef\'s Special',
    span: 'col-span-1 row-span-1 lg:col-span-1 lg:row-span-2',
  },
  {
    src: 'https://res.cloudinary.com/di4mdnfju/image/upload/v1781011804/Screenshot_2026-06-09_1.44.17_PM_mpshmm.png',
    alt: 'Fresh salad, falafel bowl and sushi at 3 Trees Cafe',
    caption: 'Fresh & Vibrant',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://res.cloudinary.com/di4mdnfju/image/upload/v1781011810/Screenshot_2026-06-09_1.43.10_PM_qfetcy.png',
    alt: 'Popular dishes at 3 Trees Cafe including cappuccino and salmon',
    caption: 'Popular Picks',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://res.cloudinary.com/di4mdnfju/image/upload/v1781011811/Screenshot_2026-06-09_1.44.45_PM_eqpvfg.png',
    alt: 'Salmon poke bowl, nachos and stuffed sweet potato',
    caption: 'Fan Favourites',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://res.cloudinary.com/di4mdnfju/image/upload/v1781011813/Screenshot_2026-06-09_1.42.34_PM_mqalcj.png',
    alt: 'Artisanal cappuccino with heart latte art',
    caption: 'Artisanal Coffee',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://res.cloudinary.com/di4mdnfju/image/upload/v1781011814/Screenshot_2026-06-09_1.42.27_PM_uhwj2p.png',
    alt: 'Steak roll, hazelnut latte, fresh juices and milkshakes',
    caption: 'Drinks & More',
    span: 'col-span-1 row-span-1 lg:col-span-2 lg:row-span-1',
  },
]

function PhotoGallerySection() {
  return (
    <section className="w-full py-20" style={{ backgroundColor: '#FAF9F6' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: '#C9A96E' }}>
            Gallery
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3" style={{ color: '#1B4332', fontFamily: 'Georgia, "Times New Roman", serif' }}>
            A Taste of What Awaits
          </h2>
          <p className="text-base mt-3 max-w-xl mx-auto" style={{ color: '#5a6b5e' }}>
            Real moments, real flavours. See why our guests keep coming back for more.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[200px] lg:auto-rows-[220px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] ${img.span}`}
              style={{ boxShadow: '0 4px 20px rgba(27,67,50,0.06)' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                <span
                  className="text-xs font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full"
                  style={{ backgroundColor: '#C9A96E', color: '#1B4332' }}
                >
                  {img.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Reviews Section ─────────────────────────────────────────────
const reviews = [
  {
    name: 'Chanda M.',
    rating: 5,
    text: 'Absolutely love this place! The salmon is always perfectly cooked, and the cappuccino art is beautiful. The atmosphere is so welcoming — it feels like a little piece of heaven in Lusaka.',
    date: '2 months ago',
    highlight: 'salmon',
  },
  {
    name: 'David B.',
    rating: 5,
    text: 'Best breakfast in Lusaka, hands down. The Sunshine Breakfast is a feast, and the freshly squeezed juices are incredible. Staff are always friendly and attentive.',
    date: '3 months ago',
    highlight: 'breakfast',
  },
  {
    name: 'Mwansa K.',
    rating: 4,
    text: 'The sushi is surprisingly good for a cafe in Lusaka! The 3 Trees Platter is great value for money. Only wish they stayed open later in the evenings.',
    date: '1 month ago',
    highlight: 'sushi',
  },
  {
    name: 'Sarah L.',
    rating: 5,
    text: 'My go-to spot for brunch on weekends. The eggs benedict is perfection, and the fruit crushes are so refreshing. Love the cozy green interior too!',
    date: '2 weeks ago',
    highlight: 'brunch',
  },
  {
    name: 'James P.',
    rating: 4,
    text: 'Great steaks and the mixed grill is perfect for sharing. The peri peri chicken is also fantastic. Portions are generous for the price.',
    date: '1 month ago',
    highlight: 'steaks',
  },
  {
    name: 'Natasha Z.',
    rating: 5,
    text: 'The veggie grain bowl is my absolute favourite — so colourful and fresh! The falafel wrap is also amazing. Best healthy lunch spot in town.',
    date: '3 weeks ago',
    highlight: 'healthy',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={star <= rating ? '#C9A96E' : 'none'}
          stroke={star <= rating ? '#C9A96E' : '#d4d4d4'}
          strokeWidth="2"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewsSection() {
  return (
    <section className="w-full py-20" style={{ backgroundColor: '#1B4332' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: '#C9A96E' }}>
            Reviews
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 text-white" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map((star) => (
                <svg key={star} width="18" height="18" viewBox="0 0 24 24" fill="#C9A96E" stroke="#C9A96E" strokeWidth="1">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              ))}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#C9A96E" stroke="#C9A96E" strokeWidth="1" opacity="0.4">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <span className="text-sm font-semibold" style={{ color: '#C9A96E' }}>4.4</span>
            <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>from 2,264 reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(201,169,110,0.15)',
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: '#C9A96E', color: '#1B4332' }}
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{review.name}</p>
                    <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{review.date}</p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Landing Page ────────────────────────────────────────────────
function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <PhotoGallerySection />
      <ReviewsSection />

      {/* CTA Section */}
      <section className="w-full py-16" style={{ backgroundColor: '#FAF9F6' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#1B4332', fontFamily: 'Georgia, "Times New Roman", serif' }}>
            Ready to Dine With Us?
          </h2>
          <p className="text-base mb-8" style={{ color: '#5a6b5e' }}>
            Explore our full menu or book a table today. We look forward to serving you.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/260978728652"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-[0.1em] transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#25D366', color: '#fff' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

// ─── Showcase / Presentation Mockup ──────────────────────────────
function ShowcaseView({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-8 lg:p-12" style={{ backgroundColor: '#E8E8E8' }}>
      {/* Title */}
      <div className="text-center mb-8">
        <span className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: '#8a9a8e' }}>
          Professional UI/UX Design Presentation
        </span>
        <h1 className="text-3xl lg:text-4xl font-bold mt-2" style={{ color: '#1B4332', fontFamily: 'Georgia, "Times New Roman", serif' }}>
          3 Trees Cafe — Website Design
        </h1>
        <p className="text-sm mt-2" style={{ color: '#8a9a8e' }}>
          Deep Forest Green &bull; Luxurious Gold &bull; Off-White &bull; Modern Serif Typography
        </p>
      </div>

      {/* Three Screens Container */}
      <div className="flex items-start justify-center gap-6 w-full max-w-[1600px]">
        {[
          { title: 'Landing Page', subtitle: 'Homepage', page: 'home' as Page },
          { title: 'Menu Page', subtitle: 'Full Menu', page: 'menu' as Page },
          { title: 'Contact Page', subtitle: 'Get In Touch', page: 'contact' as Page },
        ].map((screen, i) => (
          <div key={i} className="flex-1 max-w-[480px] min-w-0">
            {/* Screen Label */}
            <div className="text-center mb-3">
              <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: '#1B4332' }}>
                {screen.title}
              </span>
              <span className="text-[10px] ml-2" style={{ color: '#8a9a8e' }}>{screen.subtitle}</span>
            </div>
            {/* Browser Frame */}
            <div
              className="rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02]"
              style={{
                boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.1)',
                border: '1px solid rgba(0,0,0,0.08)',
              }}
              onClick={() => onNavigate(screen.page)}
            >
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 px-4 py-2.5" style={{ backgroundColor: '#F0F0F0', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FF5F57' }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FEBC2E' }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#28C840' }} />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md text-[10px]" style={{ backgroundColor: 'rgba(0,0,0,0.05)', color: '#8a9a8e' }}>
                    3treescafe.co.zm
                  </div>
                </div>
              </div>
              {/* Screen Content - Scaled */}
              <div className="bg-white" style={{ height: '600px', overflow: 'hidden' }}>
                <div style={{ transform: 'scale(0.48)', transformOrigin: 'top left', width: '1000px', pointerEvents: 'none' }}>
                  {i === 0 && (
                    <div style={{ backgroundColor: '#FAF9F6' }}>
                      {/* Mini Nav */}
                      <div className="w-full px-6 py-3 flex items-center justify-between" style={{ backgroundColor: '#1B4332' }}>
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full" style={{ backgroundColor: '#C9A96E' }} />
                          <span className="text-base font-bold" style={{ color: '#C9A96E', fontFamily: 'Georgia, serif' }}>3 Trees Cafe</span>
                        </div>
                        <div className="flex gap-6">
                          {['Home', 'Menu', 'Contact'].map((t, j) => (
                            <span key={j} className="text-[10px] uppercase tracking-[0.15em]" style={{ color: j === 0 ? '#C9A96E' : 'rgba(255,255,255,0.6)' }}>{t}</span>
                          ))}
                        </div>
                      </div>
                      {/* Hero */}
                      <div className="px-8 py-10 text-center">
                        <span className="text-[9px] uppercase tracking-[0.25em]" style={{ color: '#C9A96E' }}>Lusaka&apos;s Finest Dining</span>
                        <h2 className="text-3xl font-bold mt-2 mb-3" style={{ color: '#1B4332', fontFamily: 'Georgia, serif' }}>
                          Taste the <span style={{ color: '#C9A96E' }}>Extraordinary</span>
                        </h2>
                        <p className="text-xs max-w-md mx-auto" style={{ color: '#5a6b5e' }}>From gourmet mains to artisanal coffee, every dish is crafted with passion.</p>
                        <div className="flex justify-center gap-2 mt-3">
                          <span className="text-[8px] px-2.5 py-1 rounded-full" style={{ backgroundColor: '#1B4332', color: '#C9A96E' }}>4.4 Stars</span>
                          <span className="text-[8px] px-2.5 py-1 rounded-full" style={{ border: '1px solid #C9A96E', color: '#1B4332' }}>ZK 200-700</span>
                        </div>
                      </div>
                      {/* Food Grid */}
                      <div className="grid grid-cols-4 gap-3 px-6 pb-8">
                        {['Grain Bowl', 'Sushi Rolls', 'Glazed Salmon', 'Cappuccino'].map((name, j) => (
                          <div key={j} className="rounded-lg overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                            <img src={['/food-grain-bowl.png', '/food-sushi.png', '/food-salmon.png', '/food-cappuccino.png'][j]} alt={name} className="w-full aspect-square object-cover" />
                            <div className="p-2 text-center">
                              <p className="text-[9px] font-semibold" style={{ color: '#1B4332' }}>{name}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Feature Bar */}
                      <div className="py-4 px-8" style={{ backgroundColor: '#1B4332' }}>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          {['4.4 Star Rated', 'Serving Since 2010', 'Lusaka, Zambia'].map((t, j) => (
                            <div key={j}>
                              <p className="text-[9px] font-semibold" style={{ color: '#C9A96E' }}>{t}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {i === 1 && (
                    <div style={{ backgroundColor: '#FAF9F6' }}>
                      {/* Mini Nav */}
                      <div className="w-full px-6 py-3 flex items-center justify-between" style={{ backgroundColor: '#1B4332' }}>
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full" style={{ backgroundColor: '#C9A96E' }} />
                          <span className="text-base font-bold" style={{ color: '#C9A96E', fontFamily: 'Georgia, serif' }}>3 Trees Cafe</span>
                        </div>
                        <div className="flex gap-6">
                          {['Home', 'Menu', 'Contact'].map((t, j) => (
                            <span key={j} className="text-[10px] uppercase tracking-[0.15em]" style={{ color: j === 1 ? '#C9A96E' : 'rgba(255,255,255,0.6)' }}>{t}</span>
                          ))}
                        </div>
                      </div>
                      {/* Menu Header */}
                      <div className="py-6 text-center" style={{ backgroundColor: '#1B4332' }}>
                        <span className="text-[8px] uppercase tracking-[0.25em]" style={{ color: '#C9A96E' }}>Our Menu</span>
                        <h2 className="text-xl font-bold mt-1 text-white" style={{ fontFamily: 'Georgia, serif' }}>Culinary Delights</h2>
                        <span className="text-[7px] mt-1 inline-block px-2 py-0.5 rounded-full" style={{ backgroundColor: '#C9A96E', color: '#1B4332' }}>4.4 Star Rated Experience</span>
                      </div>
                      {/* Category Tabs */}
                      <div className="flex gap-1 px-4 py-2 border-b" style={{ borderColor: 'rgba(201,169,110,0.2)' }}>
                        {['Breakfast', 'Lunch', 'Grill', 'Pasta & Sushi', 'Drinks'].map((t, j) => (
                          <span key={j} className="text-[7px] px-2 py-1 rounded-full" style={{ backgroundColor: j === 0 ? '#1B4332' : 'transparent', color: j === 0 ? '#C9A96E' : '#1B4332', border: `1px solid ${j === 0 ? '#1B4332' : 'rgba(27,67,50,0.2)'}` }}>{t}</span>
                        ))}
                      </div>
                      {/* Menu Items */}
                      <div className="px-6 py-4">
                        <div className="grid grid-cols-2 gap-6">
                          {['Breakfast Selection', 'Pastries', 'Really Hungry?', 'Breakfast Wraps', 'Avo Smash Toast', 'Omelettes'].map((section, j) => (
                            <div key={j}>
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-[9px] font-bold" style={{ color: '#1B4332', fontFamily: 'Georgia, serif' }}>{section}</span>
                                <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(201,169,110,0.3)' }} />
                              </div>
                              {[1, 2, 3].map((k) => (
                                <div key={k} className="flex justify-between py-1" style={{ borderTop: '1px solid rgba(201,169,110,0.08)' }}>
                                  <span className="text-[8px]" style={{ color: '#1B4332' }}>Menu Item {k}</span>
                                  <span className="text-[8px] font-semibold" style={{ color: '#C9A96E' }}>K{(100 + k * 50).toString()}</span>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                        {/* Gold Dividers */}
                        <div className="mt-4 pt-3 border-t text-center" style={{ borderColor: 'rgba(201,169,110,0.3)' }}>
                          <div className="flex justify-center gap-1">
                            {Array(5).fill(0).map((_, j) => (
                              <div key={j} className="w-1 h-1 rounded-full" style={{ backgroundColor: '#C9A96E', opacity: 0.4 }} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {i === 2 && (
                    <div style={{ backgroundColor: '#FAF9F6' }}>
                      {/* Mini Nav */}
                      <div className="w-full px-6 py-3 flex items-center justify-between" style={{ backgroundColor: '#1B4332' }}>
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full" style={{ backgroundColor: '#C9A96E' }} />
                          <span className="text-base font-bold" style={{ color: '#C9A96E', fontFamily: 'Georgia, serif' }}>3 Trees Cafe</span>
                        </div>
                        <div className="flex gap-6">
                          {['Home', 'Menu', 'Contact'].map((t, j) => (
                            <span key={j} className="text-[10px] uppercase tracking-[0.15em]" style={{ color: j === 2 ? '#C9A96E' : 'rgba(255,255,255,0.6)' }}>{t}</span>
                          ))}
                        </div>
                      </div>
                      {/* Contact Header */}
                      <div className="py-6 text-center" style={{ backgroundColor: '#1B4332' }}>
                        <span className="text-[8px] uppercase tracking-[0.25em]" style={{ color: '#C9A96E' }}>Get In Touch</span>
                        <h2 className="text-xl font-bold mt-1 text-white" style={{ fontFamily: 'Georgia, serif' }}>Contact Us</h2>
                      </div>
                      {/* Contact Content - Map + WhatsApp */}
                      <div className="grid grid-cols-2 gap-6 p-6">
                        {/* Map Side */}
                        <div>
                          <h3 className="text-[10px] font-bold mb-2" style={{ color: '#1B4332', fontFamily: 'Georgia, serif' }}>Find Us</h3>
                          <div className="rounded-lg overflow-hidden mb-3" style={{ border: '1px solid rgba(201,169,110,0.2)' }}>
                            <img src="/map-location.png" alt="Map" className="w-full aspect-[4/3] object-cover" />
                          </div>
                          {/* Location Info */}
                          <div className="space-y-1.5">
                            {[
                              { label: 'Address', value: '2 Nkanchibaya Rd, Lusaka 10101' },
                              { label: 'Hours', value: 'Open Daily until 5 PM' },
                            ].map((info, j) => (
                              <div key={j} className="flex items-center gap-2 p-1.5 rounded" style={{ backgroundColor: 'white', border: '1px solid rgba(201,169,110,0.1)' }}>
                                <div className="w-5 h-5 rounded-full flex-shrink-0" style={{ backgroundColor: 'rgba(27,67,50,0.08)' }} />
                                <div>
                                  <p className="text-[6px] uppercase tracking-[0.1em] font-semibold" style={{ color: '#8a9a8e' }}>{info.label}</p>
                                  <p className="text-[8px] font-medium" style={{ color: '#1B4332' }}>{info.value}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* WhatsApp Side */}
                        <div>
                          <h3 className="text-[10px] font-bold mb-2" style={{ color: '#1B4332', fontFamily: 'Georgia, serif' }}>Get in Touch</h3>
                          <p className="text-[7px] mb-3" style={{ color: '#5a6b5e' }}>Reach us on WhatsApp for reservations and orders.</p>
                          {/* WhatsApp Card */}
                          <div className="flex items-center gap-2 p-3 rounded-lg mb-3" style={{ backgroundColor: 'white', border: '1px solid rgba(37,211,102,0.2)' }}>
                            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#25D366' }}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                              </svg>
                            </div>
                            <div>
                              <p className="text-[6px] uppercase tracking-[0.1em] font-semibold" style={{ color: '#8a9a8e' }}>WhatsApp</p>
                              <p className="text-[9px] font-bold" style={{ color: '#1B4332' }}>+260 978 728 652</p>
                            </div>
                          </div>
                          {/* WhatsApp Button */}
                          <div className="h-8 rounded flex items-center justify-center gap-1.5" style={{ backgroundColor: '#25D366' }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            <span className="text-[8px] font-semibold text-white">Chat on WhatsApp</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Click Label */}
            <div className="text-center mt-3">
              <span className="text-[10px] italic" style={{ color: '#8a9a8e' }}>Click to view full page</span>
            </div>
          </div>
        ))}
      </div>

      {/* Design Specs */}
      <div className="mt-10 flex items-center gap-6 flex-wrap justify-center">
        {[
          { name: 'Forest Green', color: '#1B4332' },
          { name: 'Warm Gold', color: '#C9A96E' },
          { name: 'Off-White', color: '#FAF9F6' },
          { name: 'Muted Green', color: '#5a6b5e' },
        ].map((swatch, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full border" style={{ backgroundColor: swatch.color, borderColor: 'rgba(0,0,0,0.1)' }} />
            <span className="text-[10px] font-medium" style={{ color: '#555' }}>{swatch.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Main App ────────────────────────────────────────────────────
export default function Home() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: currentPage === 'showcase' ? '#E8E8E8' : '#FAF9F6' }}>
      {currentPage !== 'showcase' && <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />}

      <main className="flex-1">
        {currentPage === 'home' && <LandingPage />}
        {currentPage === 'menu' && <MenuPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'showcase' && <ShowcaseView onNavigate={setCurrentPage} />}
      </main>

      {currentPage !== 'showcase' && <Footer />}
    </div>
  )
}
