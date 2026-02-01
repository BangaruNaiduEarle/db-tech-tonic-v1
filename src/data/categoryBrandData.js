const categoryBrandData = {

    "spare-parts": {
      "category": {
        "id": "cat-spare-parts",
        "title": "iPhone & Android Spare Parts",
        "slug": "spare-parts",
        "keyword": "Screens, Batteries, Cameras & More for iPhone, Samsung, Xiaomi…",
        "image": "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600",
        "description": "Premium quality replacement parts for all major smartphone brands. From OLED displays to batteries, cameras, and small components - we stock everything you need for professional mobile repairs.",
        "productCount": 387
      },
      "brandFilters": [
        { "name": "All", "slug": "all", "count": 387 },
        { "name": "Apple", "slug": "apple", "count": 156 },
        { "name": "Samsung", "slug": "samsung", "count": 142 },
        { "name": "Xiaomi", "slug": "xiaomi", "count": 89 }
      ],
      "priceRanges": [
        { "label": "Under $25", "min": 0, "max": 25 },
        { "label": "$25 - $75", "min": 25, "max": 75 },
        { "label": "$75 - $150", "min": 75, "max": 150 },
        { "label": "$150 - $300", "min": 150, "max": 300 },
        { "label": "$300+", "min": 300, "max": 999999 }
      ],
      "products": [
        {
          "id": "sp-001",
          "name": "iPhone 14 Pro Max OLED Display Assembly - Original Quality",
          "brand": "Apple",
          "categorySlug": "spare-parts",
          "price": "$289.99",
          "priceValue": 289.99,
          "rating": 4.8,
          "reviewCount": 127,
          "stock": 45,
          "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
          "slug": "iphone-14-pro-max-oled-display",
          "specs": {
            "resolution": "2796 x 1290 pixels",
            "technology": "Super Retina XDR OLED",
            "refreshRate": "120Hz ProMotion"
          },
          "tags": ["bestseller", "premium", "warranty"]
        },
        {
          "id": "sp-002",
          "name": "iPhone 13 Pro OLED Screen Replacement with Frame",
          "brand": "Apple",
          "categorySlug": "spare-parts",
          "price": "$245.99",
          "priceValue": 245.99,
          "rating": 4.7,
          "reviewCount": 98,
          "stock": 62,
          "image": "https://images.unsplash.com/photo-1592286927505-fe0c3d0eebbb?w=400&h=400&fit=crop",
          "slug": "iphone-13-pro-oled-screen",
          "specs": {
            "resolution": "2532 x 1170 pixels",
            "technology": "OLED",
            "features": ["True Tone", "HDR10"]
          },
          "tags": ["popular"]
        },
        {
          "id": "sp-003",
          "name": "iPhone 12 LCD Display Digitizer Assembly - Black",
          "brand": "Apple",
          "categorySlug": "spare-parts",
          "price": "$189.99",
          "priceValue": 189.99,
          "rating": 4.6,
          "reviewCount": 156,
          "stock": 89,
          "image": "https://images.unsplash.com/photo-1592286927505-fe0c3d0eebbb?w=400&h=400&fit=crop",
          "slug": "iphone-12-lcd-display",
          "specs": {
            "resolution": "2532 x 1170 pixels",
            "color": "Black",
            "warranty": "90 days"
          },
          "tags": ["value"]
        },
        {
          "id": "sp-004",
          "name": "iPhone 11 Replacement Battery 3110mAh with Tools",
          "brand": "Apple",
          "categorySlug": "spare-parts",
          "price": "$32.99",
          "priceValue": 32.99,
          "rating": 4.5,
          "reviewCount": 234,
          "stock": 178,
          "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
          "slug": "iphone-11-battery",
          "specs": {
            "capacity": "3110mAh",
            "voltage": "3.83V",
            "cycles": "500+"
          },
          "tags": ["bestseller", "bundle"]
        },
        {
          "id": "sp-005",
          "name": "iPhone XS Max Rear Camera Module 12MP Dual",
          "brand": "Apple",
          "categorySlug": "spare-parts",
          "price": "$89.99",
          "priceValue": 89.99,
          "rating": 4.6,
          "reviewCount": 67,
          "stock": 43,
          "image": "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=400&h=400&fit=crop",
          "slug": "iphone-xs-max-camera",
          "specs": {
            "resolution": "12MP Dual",
            "features": ["OIS", "Portrait mode"],
            "warranty": "60 days"
          },
          "tags": []
        },
        {
          "id": "sp-006",
          "name": "iPhone X Charging Port Flex Cable with Microphone",
          "brand": "Apple",
          "categorySlug": "spare-parts",
          "price": "$16.99",
          "priceValue": 16.99,
          "rating": 4.4,
          "reviewCount": 189,
          "stock": 245,
          "image": "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop",
          "slug": "iphone-x-charging-port",
          "specs": {
            "connector": "Lightning",
            "includes": "Microphone",
            "color": "Black"
          },
          "tags": ["common-repair"]
        },
        {
          "id": "sp-007",
          "name": "Samsung Galaxy S23 Ultra AMOLED Display - Original",
          "brand": "Samsung",
          "categorySlug": "spare-parts",
          "price": "$279.99",
          "priceValue": 279.99,
          "rating": 4.8,
          "reviewCount": 93,
          "stock": 38,
          "image": "https://images.unsplash.com/photo-1592286927505-fe0c3d0eebbb?w=400&h=400&fit=crop",
          "slug": "samsung-s23-ultra-display",
          "specs": {
            "resolution": "3088 x 1440 pixels",
            "technology": "Dynamic AMOLED 2X",
            "refreshRate": "120Hz"
          },
          "tags": ["premium", "new"]
        },
        {
          "id": "sp-008",
          "name": "Samsung S23 Ultra Battery 5000mAh - High Capacity",
          "brand": "Samsung",
          "categorySlug": "spare-parts",
          "price": "$45.99",
          "priceValue": 45.99,
          "rating": 4.6,
          "reviewCount": 124,
          "stock": 156,
          "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
          "slug": "samsung-s23-ultra-battery",
          "specs": {
            "capacity": "5000mAh",
            "voltage": "3.85V",
            "type": "Li-ion Polymer"
          },
          "tags": ["bestseller"]
        },
        {
          "id": "sp-009",
          "name": "Samsung Galaxy S22 Plus LCD Combo with Frame",
          "brand": "Samsung",
          "categorySlug": "spare-parts",
          "price": "$198.99",
          "priceValue": 198.99,
          "rating": 4.5,
          "reviewCount": 78,
          "stock": 52,
          "image": "https://images.unsplash.com/photo-1592286927505-fe0c3d0eebbb?w=400&h=400&fit=crop",
          "slug": "samsung-s22-plus-lcd",
          "specs": {
            "resolution": "2340 x 1080 pixels",
            "technology": "AMOLED",
            "includes": "Frame & Adhesive"
          },
          "tags": []
        },
        {
          "id": "sp-010",
          "name": "Samsung A54 5G Display Replacement - OLED",
          "brand": "Samsung",
          "categorySlug": "spare-parts",
          "price": "$92.99",
          "priceValue": 92.99,
          "rating": 4.4,
          "reviewCount": 61,
          "stock": 89,
          "image": "https://images.unsplash.com/photo-1592286927505-fe0c3d0eebbb?w=400&h=400&fit=crop",
          "slug": "samsung-a54-display",
          "specs": {
            "resolution": "2400 x 1080 pixels",
            "refreshRate": "120Hz",
            "warranty": "90 days"
          },
          "tags": ["popular"]
        },
        {
          "id": "sp-011",
          "name": "Samsung Galaxy A34 Battery 5000mAh",
          "brand": "Samsung",
          "categorySlug": "spare-parts",
          "price": "$34.99",
          "priceValue": 34.99,
          "rating": 4.5,
          "reviewCount": 87,
          "stock": 134,
          "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
          "slug": "samsung-a34-battery",
          "specs": {
            "capacity": "5000mAh",
            "cycles": "500+",
            "warranty": "6 months"
          },
          "tags": []
        },
        {
          "id": "sp-012",
          "name": "Samsung S21 Rear Camera 64MP Telephoto Module",
          "brand": "Samsung",
          "categorySlug": "spare-parts",
          "price": "$76.99",
          "priceValue": 76.99,
          "rating": 4.6,
          "reviewCount": 45,
          "stock": 67,
          "image": "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=400&h=400&fit=crop",
          "slug": "samsung-s21-camera",
          "specs": {
            "resolution": "64MP",
            "type": "Telephoto",
            "features": "3x Optical Zoom"
          },
          "tags": []
        },
        {
          "id": "sp-013",
          "name": "Xiaomi Redmi Note 12 Pro AMOLED Display",
          "brand": "Xiaomi",
          "categorySlug": "spare-parts",
          "price": "$78.99",
          "priceValue": 78.99,
          "rating": 4.5,
          "reviewCount": 56,
          "stock": 72,
          "image": "https://images.unsplash.com/photo-1592286927505-fe0c3d0eebbb?w=400&h=400&fit=crop",
          "slug": "xiaomi-note-12-pro-display",
          "specs": {
            "resolution": "2400 x 1080 pixels",
            "technology": "AMOLED",
            "refreshRate": "120Hz"
          },
          "tags": ["new"]
        },
        {
          "id": "sp-014",
          "name": "Xiaomi Mi 11 Battery 4600mAh Replacement",
          "brand": "Xiaomi",
          "categorySlug": "spare-parts",
          "price": "$38.99",
          "priceValue": 38.99,
          "rating": 4.6,
          "reviewCount": 94,
          "stock": 118,
          "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
          "slug": "xiaomi-mi-11-battery",
          "specs": {
            "capacity": "4600mAh",
            "voltage": "3.87V",
            "warranty": "6 months"
          },
          "tags": []
        },
        {
          "id": "sp-015",
          "name": "Xiaomi Poco X5 Pro LCD Screen Combo",
          "brand": "Xiaomi",
          "categorySlug": "spare-parts",
          "price": "$65.99",
          "priceValue": 65.99,
          "rating": 4.4,
          "reviewCount": 38,
          "stock": 89,
          "image": "https://images.unsplash.com/photo-1592286927505-fe0c3d0eebbb?w=400&h=400&fit=crop",
          "slug": "xiaomi-poco-x5-lcd",
          "specs": {
            "resolution": "2400 x 1080 pixels",
            "includes": "Digitizer",
            "warranty": "90 days"
          },
          "tags": []
        },
        {
          "id": "sp-016",
          "name": "Xiaomi Redmi Note 11 Charging Port Flex Cable",
          "brand": "Xiaomi",
          "categorySlug": "spare-parts",
          "price": "$12.99",
          "priceValue": 12.99,
          "rating": 4.3,
          "reviewCount": 127,
          "stock": 203,
          "image": "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop",
          "slug": "xiaomi-note-11-charging-port",
          "specs": {
            "connector": "USB Type-C",
            "includes": "Microphone",
            "warranty": "60 days"
          },
          "tags": ["common-repair"]
        },
        {
          "id": "sp-017",
          "name": "Xiaomi 12 Pro Triple Camera Module 50MP",
          "brand": "Xiaomi",
          "categorySlug": "spare-parts",
          "price": "$89.99",
          "priceValue": 89.99,
          "rating": 4.7,
          "reviewCount": 42,
          "stock": 56,
          "image": "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=400&h=400&fit=crop",
          "slug": "xiaomi-12-pro-camera",
          "specs": {
            "resolution": "50MP Main",
            "features": ["Wide", "Ultra Wide", "Telephoto"],
            "warranty": "90 days"
          },
          "tags": []
        },
        {
          "id": "sp-018",
          "name": "iPhone 8 Plus LCD Display Assembly - White",
          "brand": "Apple",
          "categorySlug": "spare-parts",
          "price": "$54.99",
          "priceValue": 54.99,
          "rating": 4.5,
          "reviewCount": 289,
          "stock": 145,
          "image": "https://images.unsplash.com/photo-1592286927505-fe0c3d0eebbb?w=400&h=400&fit=crop",
          "slug": "iphone-8-plus-lcd-white",
          "specs": {
            "resolution": "1920 x 1080 pixels",
            "color": "White",
            "warranty": "90 days"
          },
          "tags": ["value", "popular"]
        },
        {
          "id": "sp-019",
          "name": "Samsung Galaxy Note 20 Ultra Battery 4500mAh",
          "brand": "Samsung",
          "categorySlug": "spare-parts",
          "price": "$42.99",
          "priceValue": 42.99,
          "rating": 4.6,
          "reviewCount": 73,
          "stock": 98,
          "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
          "slug": "samsung-note-20-ultra-battery",
          "specs": {
            "capacity": "4500mAh",
            "voltage": "3.85V",
            "cycles": "500+"
          },
          "tags": []
        },
        {
          "id": "sp-020",
          "name": "Xiaomi Mi 10T Pro Display AMOLED 144Hz",
          "brand": "Xiaomi",
          "categorySlug": "spare-parts",
          "price": "$125.99",
          "priceValue": 125.99,
          "rating": 4.7,
          "reviewCount": 34,
          "stock": 41,
          "image": "https://images.unsplash.com/photo-1592286927505-fe0c3d0eebbb?w=400&h=400&fit=crop",
          "slug": "xiaomi-10t-pro-display",
          "specs": {
            "resolution": "2400 x 1080 pixels",
            "refreshRate": "144Hz",
            "technology": "AMOLED"
          },
          "tags": ["premium"]
        }
      ]
    },
    "unlocking-tools": {
      "category": {
        "id": "cat-unlocking-tools",
        "title": "Unlocking Tools & Licenses",
        "slug": "unlocking-tools",
        "keyword": "Unlock FRP, Pattern & Carrier locks on Android/iOS",
        "image": "https://static.dhrufusion.com/8ba55f6b-3543-4e75-a3f9-3eb84c6a6176/2025/08/28/GD4gusbk_SamsungTool12Months.png",
        "description": "Professional unlocking tools and software licenses for FRP bypass, carrier unlock, iCloud removal, and pattern unlock on all Android and iOS devices.",
        "productCount": 48
      },
      "brandFilters": [
        { "name": "All", "slug": "all", "count": 48 },
        { "name": "Apple", "slug": "apple", "count": 18 },
        { "name": "Samsung", "slug": "samsung", "count": 15 },
        { "name": "Universal", "slug": "universal", "count": 15 }
      ],
      "priceRanges": [
        { "label": "Under $50", "min": 0, "max": 50 },
        { "label": "$50 - $100", "min": 50, "max": 100 },
        { "label": "$100 - $200", "min": 100, "max": 200 },
        { "label": "$200+", "min": 200, "max": 999999 }
      ],
      "products": [
        {
          "id": "ut-001",
          "name": "iCloud Unlock Service - iPhone 12/13/14 Series",
          "brand": "Apple",
          "categorySlug": "unlocking-tools",
          "price": "$149.99",
          "priceValue": 149.99,
          "rating": 4.7,
          "reviewCount": 312,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop",
          "slug": "icloud-unlock-iphone-12-14",
          "specs": {
            "deliveryTime": "24-48 hours",
            "method": "IMEI-based official unlock",
            "successRate": "98.5%"
          },
          "tags": ["bestseller", "digital-delivery"]
        },
        {
          "id": "ut-002",
          "name": "Samsung FRP Bypass Tool - All Models Android 11-14",
          "brand": "Samsung",
          "categorySlug": "unlocking-tools",
          "price": "$39.99",
          "priceValue": 39.99,
          "rating": 4.8,
          "reviewCount": 267,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop",
          "slug": "samsung-frp-bypass-tool",
          "specs": {
            "compatibility": "Android 11-14",
            "deliveryTime": "Instant",
            "method": "Software-based"
          },
          "tags": ["instant-delivery", "popular"]
        },
        {
          "id": "ut-003",
          "name": "iPhone Carrier Unlock Service - AT&T/Verizon/T-Mobile",
          "brand": "Apple",
          "categorySlug": "unlocking-tools",
          "price": "$29.99",
          "priceValue": 29.99,
          "rating": 4.6,
          "reviewCount": 456,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=400&h=400&fit=crop",
          "slug": "iphone-carrier-unlock",
          "specs": {
            "carriers": ["AT&T", "Verizon", "T-Mobile"],
            "deliveryTime": "3-5 days",
            "method": "Official carrier unlock"
          },
          "tags": ["bestseller"]
        },
        {
          "id": "ut-004",
          "name": "Universal FRP Bypass Tool Pro - All Android Brands",
          "brand": "Universal",
          "categorySlug": "unlocking-tools",
          "price": "$79.99",
          "priceValue": 79.99,
          "rating": 4.7,
          "reviewCount": 189,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=400&h=400&fit=crop",
          "slug": "universal-frp-bypass-pro",
          "specs": {
            "compatibility": "Samsung, Xiaomi, Oppo, Vivo, Realme",
            "androidVersion": "8.0 to 14.0",
            "licenseType": "1-year subscription"
          },
          "tags": ["professional", "subscription"]
        },
        {
          "id": "ut-005",
          "name": "Xiaomi Mi Account Remove Tool - Instant Unlock",
          "brand": "Universal",
          "categorySlug": "unlocking-tools",
          "price": "$34.99",
          "priceValue": 34.99,
          "rating": 4.5,
          "reviewCount": 198,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop",
          "slug": "xiaomi-mi-account-remove",
          "specs": {
            "compatibility": "All Xiaomi/Redmi/Poco",
            "deliveryTime": "Instant",
            "method": "Fastboot mode"
          },
          "tags": ["instant-delivery"]
        },
        {
          "id": "ut-006",
          "name": "iCloud Check IMEI Service - Instant Report",
          "brand": "Apple",
          "categorySlug": "unlocking-tools",
          "price": "$4.99",
          "priceValue": 4.99,
          "rating": 4.9,
          "reviewCount": 1247,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop",
          "slug": "icloud-check-imei",
          "specs": {
            "deliveryTime": "1-5 minutes",
            "includes": ["iCloud status", "Carrier info", "Find My iPhone"],
            "method": "Official database"
          },
          "tags": ["instant-delivery", "essential"]
        },
        {
          "id": "ut-007",
          "name": "Samsung Pattern/PIN Unlock Service - Remote",
          "brand": "Samsung",
          "categorySlug": "unlocking-tools",
          "price": "$24.99",
          "priceValue": 24.99,
          "rating": 4.6,
          "reviewCount": 234,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop",
          "slug": "samsung-pattern-unlock",
          "specs": {
            "compatibility": "All Samsung models",
            "deliveryTime": "6-24 hours",
            "method": "Remote TeamViewer"
          },
          "tags": ["remote-service"]
        },
        {
          "id": "ut-008",
          "name": "iPhone Passcode Removal Service - iOS 12-17",
          "brand": "Apple",
          "categorySlug": "unlocking-tools",
          "price": "$89.99",
          "priceValue": 89.99,
          "rating": 4.5,
          "reviewCount": 167,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop",
          "slug": "iphone-passcode-removal",
          "specs": {
            "compatibility": "iOS 12-17",
            "method": "Software bypass",
            "note": "Data will be erased"
          },
          "tags": []
        },
        {
          "id": "ut-009",
          "name": "Oppo/Realme FRP Tool - One-Click Bypass",
          "brand": "Universal",
          "categorySlug": "unlocking-tools",
          "price": "$29.99",
          "priceValue": 29.99,
          "rating": 4.7,
          "reviewCount": 145,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=400&h=400&fit=crop",
          "slug": "oppo-realme-frp-tool",
          "specs": {
            "compatibility": "Oppo/Realme Android 10-13",
            "deliveryTime": "Instant",
            "method": "ADB mode"
          },
          "tags": ["instant-delivery"]
        },
        {
          "id": "ut-010",
          "name": "Vivo FRP Unlock Service - All Models",
          "brand": "Universal",
          "categorySlug": "unlocking-tools",
          "price": "$32.99",
          "priceValue": 32.99,
          "rating": 4.6,
          "reviewCount": 98,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop",
          "slug": "vivo-frp-unlock",
          "specs": {
            "compatibility": "All Vivo smartphones",
            "deliveryTime": "12-24 hours",
            "method": "Remote/EDL mode"
          },
          "tags": []
        },
        {
          "id": "ut-011",
          "name": "iPhone MDM Bypass Service - Supervised Device Unlock",
          "brand": "Apple",
          "categorySlug": "unlocking-tools",
          "price": "$119.99",
          "priceValue": 119.99,
          "rating": 4.4,
          "reviewCount": 87,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop",
          "slug": "iphone-mdm-bypass",
          "specs": {
            "compatibility": "iOS 13-17",
            "deliveryTime": "24-48 hours",
            "method": "Configuration profile removal"
          },
          "tags": []
        },
        {
          "id": "ut-012",
          "name": "Samsung Reactivation Lock (RAL) Remove Service",
          "brand": "Samsung",
          "categorySlug": "unlocking-tools",
          "price": "$44.99",
          "priceValue": 44.99,
          "rating": 4.7,
          "reviewCount": 156,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop",
          "slug": "samsung-reactivation-lock-remove",
          "specs": {
            "compatibility": "Galaxy S/Note/A series",
            "deliveryTime": "3-7 days",
            "method": "Official server unlock"
          },
          "tags": []
        },
        {
          "id": "ut-013",
          "name": "Universal Android Network Unlock - GSM/CDMA",
          "brand": "Universal",
          "categorySlug": "unlocking-tools",
          "price": "$19.99",
          "priceValue": 19.99,
          "rating": 4.5,
          "reviewCount": 267,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=400&h=400&fit=crop",
          "slug": "android-network-unlock",
          "specs": {
            "compatibility": "Most Android devices",
            "deliveryTime": "1-3 days",
            "carriers": "AT&T, T-Mobile, Sprint, Verizon"
          },
          "tags": ["popular"]
        },
        {
          "id": "ut-014",
          "name": "iPhone SIM Network Unlock - Worldwide Carriers",
          "brand": "Apple",
          "categorySlug": "unlocking-tools",
          "price": "$39.99",
          "priceValue": 39.99,
          "rating": 4.6,
          "reviewCount": 423,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop",
          "slug": "iphone-sim-unlock-worldwide",
          "specs": {
            "compatibility": "iPhone 6 to 15 series",
            "deliveryTime": "3-7 days",
            "method": "Official carrier database"
          },
          "tags": ["worldwide"]
        },
        {
          "id": "ut-015",
          "name": "Samsung Knox Remove Tool - Enterprise Unlock",
          "brand": "Samsung",
          "categorySlug": "unlocking-tools",
          "price": "$54.99",
          "priceValue": 54.99,
          "rating": 4.5,
          "reviewCount": 112,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop",
          "slug": "samsung-knox-remove",
          "specs": {
            "compatibility": "Knox 3.0-3.8",
            "deliveryTime": "Instant software",
            "method": "Combination file method"
          },
          "tags": ["instant-delivery", "professional"]
        },
        {
          "id": "ut-016",
          "name": "Huawei FRP Unlock Service - Google Account Bypass",
          "brand": "Universal",
          "categorySlug": "unlocking-tools",
          "price": "$27.99",
          "priceValue": 27.99,
          "rating": 4.6,
          "reviewCount": 134,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=400&h=400&fit=crop",
          "slug": "huawei-frp-unlock",
          "specs": {
            "compatibility": "All Huawei/Honor devices",
            "deliveryTime": "6-12 hours",
            "method": "Testpoint/EDL"
          },
          "tags": []
        },
        {
          "id": "ut-017",
          "name": "iPhone Activation Lock Check - Instant Status",
          "brand": "Apple",
          "categorySlug": "unlocking-tools",
          "price": "$2.99",
          "priceValue": 2.99,
          "rating": 4.9,
          "reviewCount": 1567,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop",
          "slug": "iphone-activation-lock-check",
          "specs": {
            "deliveryTime": "Instant",
            "includes": "Activation Lock, iCloud, Find My",
            "method": "Apple official API"
          },
          "tags": ["instant-delivery", "essential"]
        },
        {
          "id": "ut-018",
          "name": "OnePlus FRP Tool - All Models Bypass",
          "brand": "Universal",
          "categorySlug": "unlocking-tools",
          "price": "$31.99",
          "priceValue": 31.99,
          "rating": 4.7,
          "reviewCount": 89,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop",
          "slug": "oneplus-frp-tool",
          "specs": {
            "compatibility": "OnePlus 6 to 11 series",
            "deliveryTime": "Instant",
            "method": "Fastboot/ADB"
          },
          "tags": ["instant-delivery"]
        },
        {
          "id": "ut-019",
          "name": "LG FRP Unlock Service - Google Account Remove",
          "brand": "Universal",
          "categorySlug": "unlocking-tools",
          "price": "$26.99",
          "priceValue": 26.99,
          "rating": 4.5,
          "reviewCount": 76,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=400&h=400&fit=crop",
          "slug": "lg-frp-unlock",
          "specs": {
            "compatibility": "All LG Android phones",
            "deliveryTime": "12-24 hours",
            "method": "Remote/EDL"
          },
          "tags": []
        },
        {
          "id": "ut-020",
          "name": "iPhone Blacklist Check IMEI - GSM/CDMA Status",
          "brand": "Apple",
          "categorySlug": "unlocking-tools",
          "price": "$6.99",
          "priceValue": 6.99,
          "rating": 4.8,
          "reviewCount": 892,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop",
          "slug": "iphone-blacklist-check",
          "specs": {
            "deliveryTime": "Instant",
            "includes": "Blacklist, carrier, model info",
            "databases": "GSM, CDMA, worldwide"
          },
          "tags": ["instant-delivery"]
        }
      ]
    },
    "flash-dongles": {
      "category": {
        "id": "cat-flash-dongles",
        "title": "Dongles & Flash Boxes",
        "slug": "flash-dongles",
        "keyword": "Octoplus, Miracle, UMT, Z3X & more for JTAG/USB Repair",
        "image": "https://static.dhrufusion.com/8ba55f6b-3543-4e75-a3f9-3eb84c6a6176/2025/06/04/xl7WTg6j_HXRU_AUTH_TOOL.png",
        "description": "Professional flashing boxes, dongles, and JTAG tools for advanced smartphone repair, firmware flashing, and software restoration.",
        "productCount": 62
      },
      "brandFilters": [
        { "name": "All", "slug": "all", "count": 62 },
        { "name": "Octoplus", "slug": "octoplus", "count": 8 },
        { "name": "Z3X", "slug": "z3x", "count": 6 },
        { "name": "UMT", "slug": "umt", "count": 7 },
        { "name": "Miracle", "slug": "miracle", "count": 5 },
        { "name": "GPG", "slug": "gpg", "count": 4 },
        { "name": "Other", "slug": "other", "count": 32 }
      ],
      "priceRanges": [
        { "label": "Under $100", "min": 0, "max": 100 },
        { "label": "$100 - $200", "min": 100, "max": 200 },
        { "label": "$200 - $400", "min": 200, "max": 400 },
        { "label": "$400+", "min": 400, "max": 999999 }
      ],
      "products": [
        {
          "id": "fd-001",
          "name": "Octoplus Box Full Set with Cables - Samsung/LG Expert",
          "brand": "Octoplus",
          "categorySlug": "flash-dongles",
          "price": "$189.99",
          "priceValue": 189.99,
          "rating": 4.8,
          "reviewCount": 234,
          "stock": 28,
          "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
          "slug": "octoplus-box-full-set",
          "specs": {
            "supports": "Samsung, LG",
            "features": ["Flash", "Unlock", "Repair IMEI", "Read/Write"],
            "includes": "20+ cables"
          },
          "tags": ["bestseller", "professional"]
        },
        {
          "id": "fd-002",
          "name": "Z3X Box PRO Samsung Edition + Activation",
          "brand": "Z3X",
          "categorySlug": "flash-dongles",
          "price": "$249.99",
          "priceValue": 249.99,
          "rating": 4.9,
          "reviewCount": 189,
          "stock": 15,
          "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
          "slug": "z3x-box-pro-samsung",
          "specs": {
            "supports": "All Samsung models",
            "features": ["Direct unlock", "FRP remove", "Root"],
            "activation": "Lifetime"
          },
          "tags": ["premium", "bestseller"]
        },
        {
          "id": "fd-003",
          "name": "UMT Dongle Ultimate Multi Tool + UMF Activation",
          "brand": "UMT",
          "categorySlug": "flash-dongles",
          "price": "$179.99",
          "priceValue": 179.99,
          "rating": 4.7,
          "reviewCount": 267,
          "stock": 34,
          "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
          "slug": "umt-dongle-ultimate",
          "specs": {
            "supports": "Huawei, Samsung, LG, ZTE",
            "features": ["Read codes", "FRP", "Flash"],
            "activation": "1 year included"
          },
          "tags": ["popular"]
        },
        {
          "id": "fd-004",
          "name": "Miracle Box 3.05 + Thunder Edition - Full Package",
          "brand": "Miracle",
          "categorySlug": "flash-dongles",
          "price": "$139.99",
          "priceValue": 139.99,
          "rating": 4.6,
          "reviewCount": 198,
          "stock": 42,
          "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
          "slug": "miracle-box-thunder",
          "specs": {
            "supports": "MTK, Qualcomm, SPD",
            "features": ["Flash", "Unlock", "Format"],
            "includes": "34 cables + adapters"
          },
          "tags": []
        },
        {
          "id": "fd-005",
          "name": "GPG iSP Pinout Tool - iPhone NAND Programmer",
          "brand": "GPG",
          "categorySlug": "flash-dongles",
          "price": "$449.99",
          "priceValue": 449.99,
          "rating": 4.8,
          "reviewCount": 87,
          "stock": 12,
          "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
          "slug": "gpg-isp-pinout-tool",
          "specs": {
            "supports": "iPhone 5S to 14 Pro Max",
            "features": ["NAND read/write", "Serial number change"],
            "warranty": "1 year"
          },
          "tags": ["premium", "professional"]
        },
        {
          "id": "fd-006",
          "name": "Easy JTAG Plus Box - Full Edition with eMMC/ISP",
          "brand": "Other",
          "categorySlug": "flash-dongles",
          "price": "$389.99",
          "priceValue": 389.99,
          "rating": 4.9,
          "reviewCount": 145,
          "stock": 9,
          "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
          "slug": "easy-jtag-plus-box",
          "specs": {
            "supports": "Android, Windows Phone",
            "features": ["JTAG", "eMMC", "ISP"],
            "includes": "All adapters"
          },
          "tags": ["professional", "advanced"]
        },
        {
          "id": "fd-007",
          "name": "NCK Box Android MTK + Free Activation",
          "brand": "Other",
          "categorySlug": "flash-dongles",
          "price": "$99.99",
          "priceValue": 99.99,
          "rating": 4.5,
          "reviewCount": 312,
          "stock": 67,
          "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
          "slug": "nck-box-android-mtk",
          "specs": {
            "supports": "Huawei, MTK, Qualcomm",
            "features": ["Read codes", "FRP", "Flash"],
            "activation": "Free lifetime"
          },
          "tags": ["value", "popular"]
        },
        {
          "id": "fd-008",
          "name": "Infinity Box Chinese Miracle 2 - CM2 Dongle",
          "brand": "Other",
          "categorySlug": "flash-dongles",
          "price": "$159.99",
          "priceValue": 159.99,
          "rating": 4.6,
          "reviewCount": 167,
          "stock": 29,
          "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
          "slug": "infinity-box-cm2",
          "specs": {
            "supports": "Nokia, BlackBerry, Samsung",
            "features": ["Flash", "Unlock", "Repair"],
            "activation": "1 year"
          },
          "tags": []
        },
        {
          "id": "fd-009",
          "name": "Octoplus FRP Tool - Samsung FRP Bypass Hardware",
          "brand": "Octoplus",
          "categorySlug": "flash-dongles",
          "price": "$89.99",
          "priceValue": 89.99,
          "rating": 4.7,
          "reviewCount": 289,
          "stock": 56,
          "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
          "slug": "octoplus-frp-tool",
          "specs": {
            "supports": "Samsung A/S/Note series",
            "features": ["One-click FRP", "Fast mode"],
            "activation": "Free updates"
          },
          "tags": ["bestseller"]
        },
        {
          "id": "fd-010",
          "name": "Sigma Box + Pack 1-2-3 Full Activation Bundle",
          "brand": "Other",
          "categorySlug": "flash-dongles",
          "price": "$219.99",
          "priceValue": 219.99,
          "rating": 4.8,
          "reviewCount": 134,
          "stock": 21,
          "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
          "slug": "sigma-box-full-pack",
          "specs": {
            "supports": "MTK, Qualcomm, Alcatel",
            "features": ["Flash", "Unlock", "Repair"],
            "includes": "Pack 1, 2, 3 activation"
          },
          "tags": ["bundle"]
        },
        {
          "id": "fd-011",
          "name": "UFI Box Powered by Infinity - EMMC/ISP Support",
          "brand": "Other",
          "categorySlug": "flash-dongles",
          "price": "$169.99",
          "priceValue": 169.99,
          "rating": 4.6,
          "reviewCount": 198,
          "stock": 38,
          "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
          "slug": "ufi-box-infinity",
          "specs": {
            "supports": "Qualcomm, Samsung, Huawei",
            "features": ["eMMC support", "ISP mode"],
            "activation": "1 year"
          },
          "tags": []
        },
        {
          "id": "fd-012",
          "name": "Z3X Easy JTAG Suite - Complete JTAG Solution",
          "brand": "Z3X",
          "categorySlug": "flash-dongles",
          "price": "$429.99",
          "priceValue": 429.99,
          "rating": 4.9,
          "reviewCount": 76,
          "stock": 7,
          "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
          "slug": "z3x-easy-jtag-suite",
          "specs": {
            "supports": "All smartphones/tablets",
            "features": ["JTAG", "RIFF", "eMMC"],
            "warranty": "2 years"
          },
          "tags": ["premium", "professional"]
        },
        {
          "id": "fd-013",
          "name": "Miracle Thunder 2.82 Dongle - Latest Edition",
          "brand": "Miracle",
          "categorySlug": "flash-dongles",
          "price": "$124.99",
          "priceValue": 124.99,
          "rating": 4.5,
          "reviewCount": 223,
          "stock": 45,
          "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
          "slug": "miracle-thunder-dongle",
          "specs": {
            "supports": "SPD, MTK chipsets",
            "features": ["Flash", "Unlock", "Format"],
            "activation": "Lifetime"
          },
          "tags": []
        },
        {
          "id": "fd-014",
          "name": "UMT QcFire Edition - Qualcomm Specialist Tool",
          "brand": "UMT",
          "categorySlug": "flash-dongles",
          "price": "$149.99",
          "priceValue": 149.99,
          "rating": 4.7,
          "reviewCount": 187,
          "stock": 31,
          "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
          "slug": "umt-qcfire-edition",
          "specs": {
            "supports": "Qualcomm devices",
            "features": ["9008 mode", "Unlock", "Flash"],
            "activation": "1 year"
          },
          "tags": ["popular"]
        },
        {
          "id": "fd-015",
          "name": "GPG Dragon Phone Programmer - iPhone/Android",
          "brand": "GPG",
          "categorySlug": "flash-dongles",
          "price": "$499.99",
          "priceValue": 499.99,
          "rating": 4.8,
          "reviewCount": 64,
          "stock": 5,
          "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
          "slug": "gpg-dragon-programmer",
          "specs": {
            "supports": "iPhone, Samsung, Huawei",
            "features": ["NAND programmer", "Data recovery"],
            "warranty": "1 year"
          },
          "tags": ["premium"]
        },
        {
          "id": "fd-016",
          "name": "Octoplus JTAG Standard Edition - Entry Level",
          "brand": "Octoplus",
          "categorySlug": "flash-dongles",
          "price": "$129.99",
          "priceValue": 129.99,
          "rating": 4.6,
          "reviewCount": 145,
          "stock": 41,
          "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
          "slug": "octoplus-jtag-standard",
          "specs": {
            "supports": "Samsung, LG",
            "features": ["JTAG repair", "Unbrick"],
            "activation": "Free"
          },
          "tags": ["value"]
        },
        {
          "id": "fd-017",
          "name": "Volcano Box Inferno - MTK/Qualcomm/SPD Tool",
          "brand": "Other",
          "categorySlug": "flash-dongles",
          "price": "$134.99",
          "priceValue": 134.99,
          "rating": 4.5,
          "reviewCount": 178,
          "stock": 27,
          "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
          "slug": "volcano-box-inferno",
          "specs": {
            "supports": "Chinese phones",
            "features": ["Flash", "Unlock", "IMEI repair"],
            "activation": "Lifetime"
          },
          "tags": []
        },
        {
          "id": "fd-018",
          "name": "EFT Dongle Pro - Samsung Unlock Expert",
          "brand": "Other",
          "categorySlug": "flash-dongles",
          "price": "$109.99",
          "priceValue": 109.99,
          "rating": 4.7,
          "reviewCount": 256,
          "stock": 53,
          "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
          "slug": "eft-dongle-pro",
          "specs": {
            "supports": "Samsung all models",
            "features": ["FRP", "Network unlock", "Root"],
            "activation": "1 year"
          },
          "tags": ["bestseller"]
        },
        {
          "id": "fd-019",
          "name": "RIFF Box JTAG Manager - Resurrection Tool",
          "brand": "Other",
          "categorySlug": "flash-dongles",
          "price": "$199.99",
          "priceValue": 199.99,
          "rating": 4.8,
          "reviewCount": 112,
          "stock": 18,
          "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
          "slug": "riff-box-jtag",
          "specs": {
            "supports": "Samsung, LG, HTC",
            "features": ["JTAG", "DCC", "Unbrick"],
            "activation": "Lifetime"
          },
          "tags": ["professional"]
        },
        {
          "id": "fd-020",
          "name": "HWK UFS Turbo + HWK Support Suite",
          "brand": "Other",
          "categorySlug": "flash-dongles",
          "price": "$79.99",
          "priceValue": 79.99,
          "rating": 4.4,
          "reviewCount": 298,
          "stock": 72,
          "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
          "slug": "hwk-ufs-turbo",
          "specs": {
            "supports": "Nokia, Samsung",
            "features": ["Flash", "Unlock", "Repair"],
            "activation": "Free"
          },
          "tags": ["value"]
        }
      ]
    },
    "accessories": {
      "category": {
        "id": "cat-accessories",
        "title": "Accessories & Cables",
        "slug": "accessories",
        "keyword": "Data Cables, Adapters, Jumpers & Repair Accessories",
        "image": "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600",
        "description": "Essential cables, adapters, and accessories for mobile repair professionals. From USB cables to JTAG adapters and precision tools.",
        "productCount": 156
      },
      "brandFilters": [
        { "name": "All", "slug": "all", "count": 156 },
        { "name": "Generic", "slug": "generic", "count": 89 },
        { "name": "Original", "slug": "original", "count": 45 },
        { "name": "Premium", "slug": "premium", "count": 22 }
      ],
      "priceRanges": [
        { "label": "Under $10", "min": 0, "max": 10 },
        { "label": "$10 - $25", "min": 10, "max": 25 },
        { "label": "$25 - $50", "min": 25, "max": 50 },
        { "label": "$50+", "min": 50, "max": 999999 }
      ],
      "products": [
        {
          "id": "acc-001",
          "name": "Universal USB Type-C Cable Set - 10 Pack Mixed Lengths",
          "brand": "Generic",
          "categorySlug": "accessories",
          "price": "$24.99",
          "priceValue": 24.99,
          "rating": 4.6,
          "reviewCount": 467,
          "stock": 234,
          "image": "https://images.unsplash.com/photo-1699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
          "slug": "usb-type-c-cable-set",
          "specs": {
            "includes": "10 cables",
            "lengths": "0.5m, 1m, 2m",
            "features": ["Fast charging", "Data sync"]
          },
          "tags": ["bestseller", "bundle"]
        },
        {
          "id": "acc-002",
          "name": "iPhone Lightning Cable - Original Quality 1M",
          "brand": "Original",
          "categorySlug": "accessories",
          "price": "$12.99",
          "priceValue": 12.99,
          "rating": 4.7,
          "reviewCount": 892,
          "stock": 456,
          "image": "https://images.unsplash.com/photo-1699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
          "slug": "iphone-lightning-cable-1m",
          "specs": {
            "length": "1 meter",
            "compatibility": "iPhone 5 to 14",
            "certification": "MFi certified"
          },
          "tags": ["bestseller", "certified"]
        },
        {
          "id": "acc-003",
          "name": "Micro USB Cable 5-Pack - Data & Charging",
          "brand": "Generic",
          "categorySlug": "accessories",
          "price": "$9.99",
          "priceValue": 9.99,
          "rating": 4.5,
          "reviewCount": 623,
          "stock": 378,
          "image": "https://images.unsplash.com/photo-1699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
          "slug": "micro-usb-cable-5pack",
          "specs": {
            "includes": "5 cables",
            "length": "1 meter each",
            "features": "2A fast charging"
          },
          "tags": ["value", "bundle"]
        },
        {
          "id": "acc-004",
          "name": "JTAG Adapter Set 20-in-1 - Universal Connectors",
          "brand": "Premium",
          "categorySlug": "accessories",
          "price": "$34.99",
          "priceValue": 34.99,
          "rating": 4.8,
          "reviewCount": 167,
          "stock": 89,
          "image": "https://images.unsplash.com/photo-1699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
          "slug": "jtag-adapter-set-20in1",
          "specs": {
            "includes": "20 adapters",
            "compatibility": "Most JTAG boxes",
            "material": "Gold-plated pins"
          },
          "tags": ["professional"]
        },
        {
          "id": "acc-005",
          "name": "ISP Pinout Adapter Cable for iPhone - Complete Set",
          "brand": "Premium",
          "categorySlug": "accessories",
          "price": "$45.99",
          "priceValue": 45.99,
          "rating": 4.7,
          "reviewCount": 134,
          "stock": 67,
          "image": "https://images.unsplash.com/photo-1699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
          "slug": "isp-pinout-adapter-iphone",
          "specs": {
            "compatibility": "iPhone 6 to 14 Pro Max",
            "includes": "All model adapters",
            "features": "NAND programming"
          },
          "tags": ["professional"]
        },
        {
          "id": "acc-006",
          "name": "Test Point Jumper Wire Kit - 50 Pieces Assorted",
          "brand": "Generic",
          "categorySlug": "accessories",
          "price": "$16.99",
          "priceValue": 16.99,
          "rating": 4.6,
          "reviewCount": 289,
          "stock": 178,
          "image": "https://images.unsplash.com/photo-1699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
          "slug": "test-point-jumper-wire-kit",
          "specs": {
            "quantity": "50 wires",
            "lengths": "Various sizes",
            "material": "Tinned copper"
          },
          "tags": ["essential"]
        },
        {
          "id": "acc-007",
          "name": "USB to TTL Serial Adapter - CP2102 Module",
          "brand": "Generic",
          "categorySlug": "accessories",
          "price": "$8.99",
          "priceValue": 8.99,
          "rating": 4.5,
          "reviewCount": 412,
          "stock": 267,
          "image": "https://images.unsplash.com/photo-1699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
          "slug": "usb-ttl-serial-adapter",
          "specs": {
            "chipset": "CP2102",
            "voltage": "3.3V/5V selectable",
            "features": "Auto driver install"
          },
          "tags": ["popular"]
        },
        {
          "id": "acc-008",
          "name": "Samsung Service Cable 3-in-1 - USB Jig Combo",
          "brand": "Generic",
          "categorySlug": "accessories",
          "price": "$14.99",
          "priceValue": 14.99,
          "rating": 4.7,
          "reviewCount": 345,
          "stock": 156,
          "image": "https://images.unsplash.com/photo-1699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
          "slug": "samsung-service-cable-3in1",
          "specs": {
            "includes": "USB jig, data cable, OTG",
            "compatibility": "All Samsung models",
            "features": "Download mode trigger"
          },
          "tags": ["bestseller"]
        },
        {
          "id": "acc-009",
          "name": "USB-C to HDMI Adapter - 4K Output Support",
          "brand": "Premium",
          "categorySlug": "accessories",
          "price": "$18.99",
          "priceValue": 18.99,
          "rating": 4.6,
          "reviewCount": 523,
          "stock": 298,
          "image": "https://images.unsplash.com/photo-1699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
          "slug": "usb-c-hdmi-adapter-4k",
          "specs": {
            "resolution": "4K @ 60Hz",
            "compatibility": "USB-C devices",
            "features": "Plug and play"
          },
          "tags": ["popular"]
        },
        {
          "id": "acc-010",
          "name": "iPhone Dock Connector Test Cable - All Models",
          "brand": "Generic",
          "categorySlug": "accessories",
          "price": "$22.99",
          "priceValue": 22.99,
          "rating": 4.5,
          "reviewCount": 178,
          "stock": 134,
          "image": "https://images.unsplash.com/photo-1699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
          "slug": "iphone-dock-test-cable",
          "specs": {
            "compatibility": "iPhone 4 to 14",
            "includes": "30-pin & Lightning",
            "features": "Boot/DFU mode"
          },
          "tags": []
        },
        {
          "id": "acc-011",
          "name": "EMMC Socket Adapter Set - BGA153/169/221",
          "brand": "Premium",
          "categorySlug": "accessories",
          "price": "$56.99",
          "priceValue": 56.99,
          "rating": 4.8,
          "reviewCount": 112,
          "stock": 45,
          "image": "https://images.unsplash.com/photo-1699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
          "slug": "emmc-socket-adapter-set",
          "specs": {
            "includes": "BGA153, BGA169, BGA221",
            "material": "High-quality PCB",
            "features": "Easy chip read/write"
          },
          "tags": ["professional"]
        },
        {
          "id": "acc-012",
          "name": "Octopus Box Cables Full Set - 38 Pieces",
          "brand": "Original",
          "categorySlug": "accessories",
          "price": "$89.99",
          "priceValue": 89.99,
          "rating": 4.9,
          "reviewCount": 87,
          "stock": 34,
          "image": "https://images.unsplash.com/photo-1699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
          "slug": "octopus-box-cables-full",
          "specs": {
            "includes": "38 cables",
            "compatibility": "Octoplus Box",
            "brands": "Samsung, LG, HTC"
          },
          "tags": ["professional", "complete"]
        },
        {
          "id": "acc-013",
          "name": "Magnetic Charging Cable 3-in-1 - Lightning/Type-C/Micro",
          "brand": "Generic",
          "categorySlug": "accessories",
          "price": "$13.99",
          "priceValue": 13.99,
          "rating": 4.6,
          "reviewCount": 634,
          "stock": 389,
          "image": "https://images.unsplash.com/photo-1699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
          "slug": "magnetic-charging-cable-3in1",
          "specs": {
            "includes": "3 magnetic tips",
            "length": "1.2 meters",
            "features": ["Fast charging", "LED indicator"]
          },
          "tags": ["popular", "innovative"]
        },
        {
          "id": "acc-014",
          "name": "Z3X Easy JTAG Cable Pack - Premium Quality",
          "brand": "Original",
          "categorySlug": "accessories",
          "price": "$124.99",
          "priceValue": 124.99,
          "rating": 4.8,
          "reviewCount": 76,
          "stock": 28,
          "image": "https://images.unsplash.com/photo-1699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
          "slug": "z3x-easy-jtag-cable-pack",
          "specs": {
            "includes": "Complete cable set",
            "compatibility": "Z3X Easy JTAG",
            "warranty": "6 months"
          },
          "tags": ["professional", "original"]
        },
        {
          "id": "acc-015",
          "name": "Repair Mat Anti-Static Silicone - Extra Large",
          "brand": "Generic",
          "categorySlug": "accessories",
          "price": "$19.99",
          "priceValue": 19.99,
          "rating": 4.7,
          "reviewCount": 423,
          "stock": 234,
          "image": "https://images.unsplash.com/photo-1699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
          "slug": "repair-mat-anti-static-xl",
          "specs": {
            "size": "45cm x 30cm",
            "material": "Silicone",
            "features": ["Heat resistant", "Magnetic sections"]
          },
          "tags": ["essential", "popular"]
        },
        {
          "id": "acc-016",
          "name": "Multi Power Supply Cable Set - 15 Connectors",
          "brand": "Generic",
          "categorySlug": "accessories",
          "price": "$27.99",
          "priceValue": 27.99,
          "rating": 4.6,
          "reviewCount": 189,
          "stock": 112,
          "image": "https://images.unsplash.com/photo-1699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
          "slug": "multi-power-supply-cables",
          "specs": {
            "includes": "15 connector types",
            "voltage": "Variable output",
            "features": "Phone boot cables"
          },
          "tags": []
        },
        {
          "id": "acc-017",
          "name": "iPhone Battery Connector Test Cable - Diagnostic",
          "brand": "Generic",
          "categorySlug": "accessories",
          "price": "$16.99",
          "priceValue": 16.99,
          "rating": 4.5,
          "reviewCount": 267,
          "stock": 178,
          "image": "https://images.unsplash.com/photo-1699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
          "slug": "iphone-battery-test-cable",
          "specs": {
            "compatibility": "iPhone 6 to 14",
            "features": "Power without battery",
            "includes": "Alligator clips"
          },
          "tags": ["diagnostic"]
        },
        {
          "id": "acc-018",
          "name": "OTG Adapter Type-C to USB 3.0 - 3 Pack",
          "brand": "Generic",
          "categorySlug": "accessories",
          "price": "$7.99",
          "priceValue": 7.99,
          "rating": 4.6,
          "reviewCount": 789,
          "stock": 467,
          "image": "https://images.unsplash.com/photo-1699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
          "slug": "otg-adapter-type-c-3pack",
          "specs": {
            "quantity": "3 adapters",
            "speed": "USB 3.0",
            "compatibility": "All Type-C devices"
          },
          "tags": ["value", "popular"]
        },
        {
          "id": "acc-019",
          "name": "Precision Probe Hook Test Leads - 10 Pack",
          "brand": "Premium",
          "categorySlug": "accessories",
          "price": "$14.99",
          "priceValue": 14.99,
          "rating": 4.7,
          "reviewCount": 312,
          "stock": 223,
          "image": "https://images.unsplash.com/photo-1699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
          "slug": "precision-probe-test-leads",
          "specs": {
            "quantity": "10 pieces",
            "colors": "5 black, 5 red",
            "features": "Spring-loaded hooks"
          },
          "tags": ["essential"]
        },
        {
          "id": "acc-020",
          "name": "Universal DC Power Jack Adapter Set - 24 Tips",
          "brand": "Generic",
          "categorySlug": "accessories",
          "price": "$21.99",
          "priceValue": 21.99,
          "rating": 4.5,
          "reviewCount": 198,
          "stock": 156,
          "image": "https://images.unsplash.com/photo-1699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
          "slug": "dc-power-jack-adapter-24tips",
          "specs": {
            "includes": "24 connector tips",
            "compatibility": "Most devices",
            "voltage": "5V to 24V"
          },
          "tags": ["versatile"]
        }
      ]
    },
    "server-credits": {
      "category": {
        "id": "cat-server-credits",
        "title": "Server Credits",
        "slug": "server-credits",
        "keyword": "Instant FRP, IMEI, iCloud Credits – Auto-Activated",
        "image": "https://static.dhrufusion.com/8ba55f6b-3543-4e75-a3f9-3eb84c6a6176/2025/06/04/bAQ40rzl_Android_Multi_Tool_Credits.png",
        "description": "Instant server credits for FRP bypass, IMEI repair, iCloud unlock, and network unlock services. Auto-activation upon purchase.",
        "productCount": 34
      },
      "brandFilters": [
        { "name": "All", "slug": "all", "count": 34 },
        { "name": "Android Multi Tool", "slug": "amt", "count": 8 },
        { "name": "UnlockTool", "slug": "unlocktool", "count": 6 },
        { "name": "DirectUnlocks", "slug": "directunlocks", "count": 7 },
        { "name": "Other Services", "slug": "other", "count": 13 }
      ],
      "priceRanges": [
        { "label": "Under $50", "min": 0, "max": 50 },
        { "label": "$50 - $100", "min": 50, "max": 100 },
        { "label": "$100 - $200", "min": 100, "max": 200 },
        { "label": "$200+", "min": 200, "max": 999999 }
      ],
      "products": [
        {
          "id": "sc-001",
          "name": "Android Multi Tool Credits - 100 Credits Pack",
          "brand": "Android Multi Tool",
          "categorySlug": "server-credits",
          "price": "$99.99",
          "priceValue": 99.99,
          "rating": 4.8,
          "reviewCount": 456,
          "stock": 999,
          "image": "https://static.dhrufusion.com/8ba55f6b-3543-4e75-a3f9-3eb84c6a6176/2025/06/04/bAQ40rzl_Android_Multi_Tool_Credits.png",
          "slug": "amt-credits-100pack",
          "specs": {
            "credits": "100 credits",
            "activation": "Instant auto-activation",
            "services": ["FRP bypass", "IMEI repair", "Network unlock"]
          },
          "tags": ["bestseller", "instant"]
        },
        {
          "id": "sc-002",
          "name": "UnlockTool Server Credits - 50 Pack",
          "brand": "UnlockTool",
          "categorySlug": "server-credits",
          "price": "$79.99",
          "priceValue": 79.99,
          "rating": 4.7,
          "reviewCount": 334,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=400&h=400&fit=crop",
          "slug": "unlocktool-credits-50",
          "specs": {
            "credits": "50 credits",
            "activation": "Instant",
            "compatibility": "All Android brands"
          },
          "tags": ["popular", "instant"]
        },
        {
          "id": "sc-003",
          "name": "DirectUnlocks iCloud Credits - 20 Unlocks",
          "brand": "DirectUnlocks",
          "categorySlug": "server-credits",
          "price": "$2,499.99",
          "priceValue": 2499.99,
          "rating": 4.9,
          "reviewCount": 187,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop",
          "slug": "directunlocks-icloud-20",
          "specs": {
            "unlocks": "20 iCloud unlocks",
            "activation": "Instant auto-activation",
            "compatibility": "iPhone 6-14 series"
          },
          "tags": ["premium", "instant"]
        },
        {
          "id": "sc-004",
          "name": "Samsung FRP Server Credits - 200 Credits",
          "brand": "Other Services",
          "categorySlug": "server-credits",
          "price": "$149.99",
          "priceValue": 149.99,
          "rating": 4.6,
          "reviewCount": 523,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop",
          "slug": "samsung-frp-credits-200",
          "specs": {
            "credits": "200 Samsung FRP unlocks",
            "activation": "Instant",
            "models": "All Samsung Galaxy models"
          },
          "tags": ["bestseller", "instant", "bulk"]
        },
        {
          "id": "sc-005",
          "name": "Android Multi Tool Credits - 500 Credits Bulk",
          "brand": "Android Multi Tool",
          "categorySlug": "server-credits",
          "price": "$449.99",
          "priceValue": 449.99,
          "rating": 4.9,
          "reviewCount": 245,
          "stock": 999,
          "image": "https://static.dhrufusion.com/8ba55f6b-3543-4e75-a3f9-3eb84c6a6176/2025/06/04/bAQ40rzl_Android_Multi_Tool_Credits.png",
          "slug": "amt-credits-500bulk",
          "specs": {
            "credits": "500 credits",
            "activation": "Instant auto-activation",
            "discount": "Save 10% vs 100-pack"
          },
          "tags": ["bulk", "instant", "best-value"]
        },
        {
          "id": "sc-006",
          "name": "IMEI Repair Server Credits - 30 Services",
          "brand": "Other Services",
          "categorySlug": "server-credits",
          "price": "$89.99",
          "priceValue": 89.99,
          "rating": 4.7,
          "reviewCount": 298,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=400&h=400&fit=crop",
          "slug": "imei-repair-credits-30",
          "specs": {
            "services": "30 IMEI repairs",
            "activation": "Instant",
            "brands": "Samsung, Xiaomi, Oppo"
          },
          "tags": ["instant"]
        },
        {
          "id": "sc-007",
          "name": "UnlockTool Server Credits - 200 Pack Pro",
          "brand": "UnlockTool",
          "categorySlug": "server-credits",
          "price": "$279.99",
          "priceValue": 279.99,
          "rating": 4.8,
          "reviewCount": 167,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=400&h=400&fit=crop",
          "slug": "unlocktool-credits-200pro",
          "specs": {
            "credits": "200 credits",
            "activation": "Instant",
            "bonus": "+20 bonus credits"
          },
          "tags": ["bulk", "instant", "bonus"]
        },
        {
          "id": "sc-008",
          "name": "DirectUnlocks iCloud Credits - 5 Unlocks Starter",
          "brand": "DirectUnlocks",
          "categorySlug": "server-credits",
          "price": "$699.99",
          "priceValue": 699.99,
          "rating": 4.8,
          "reviewCount": 412,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop",
          "slug": "directunlocks-icloud-5",
          "specs": {
            "unlocks": "5 iCloud unlocks",
            "activation": "Instant auto-activation",
            "deliveryTime": "24-48 hours per unlock"
          },
          "tags": ["instant", "starter"]
        },
        {
          "id": "sc-009",
          "name": "Xiaomi Mi Account Credits - 100 Unlocks",
          "brand": "Other Services",
          "categorySlug": "server-credits",
          "price": "$119.99",
          "priceValue": 119.99,
          "rating": 4.6,
          "reviewCount": 378,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop",
          "slug": "xiaomi-mi-account-credits-100",
          "specs": {
            "unlocks": "100 Xiaomi Mi Account",
            "activation": "Instant",
            "models": "All Xiaomi/Redmi/Poco"
          },
          "tags": ["popular", "instant"]
        },
        {
          "id": "sc-010",
          "name": "Network Unlock Credits Universal - 50 Services",
          "brand": "Other Services",
          "categorySlug": "server-credits",
          "price": "$199.99",
          "priceValue": 199.99,
          "rating": 4.7,
          "reviewCount": 267,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=400&h=400&fit=crop",
          "slug": "network-unlock-credits-50",
          "specs": {
            "services": "50 network unlocks",
            "activation": "Instant",
            "carriers": "AT&T, T-Mobile, Verizon, etc."
          },
          "tags": ["instant", "universal"]
        },
        {
          "id": "sc-011",
          "name": "Android Multi Tool Credits - 1000 Credits Enterprise",
          "brand": "Android Multi Tool",
          "categorySlug": "server-credits",
          "price": "$849.99",
          "priceValue": 849.99,
          "rating": 4.9,
          "reviewCount": 134,
          "stock": 999,
          "image": "https://static.dhrufusion.com/8ba55f6b-3543-4e75-a3f9-3eb84c6a6176/2025/06/04/bAQ40rzl_Android_Multi_Tool_Credits.png",
          "slug": "amt-credits-1000enterprise",
          "specs": {
            "credits": "1000 credits",
            "activation": "Instant auto-activation",
            "discount": "Save 15% vs 100-pack"
          },
          "tags": ["bulk", "instant", "enterprise", "best-value"]
        },
        {
          "id": "sc-012",
          "name": "Oppo/Realme FRP Credits - 150 Unlocks",
          "brand": "Other Services",
          "categorySlug": "server-credits",
          "price": "$129.99",
          "priceValue": 129.99,
          "rating": 4.6,
          "reviewCount": 312,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop",
          "slug": "oppo-realme-frp-credits-150",
          "specs": {
            "unlocks": "150 FRP unlocks",
            "activation": "Instant",
            "brands": "Oppo, Realme"
          },
          "tags": ["instant", "bulk"]
        },
        {
          "id": "sc-013",
          "name": "iPhone Carrier Unlock Credits - 25 Services",
          "brand": "DirectUnlocks",
          "categorySlug": "server-credits",
          "price": "$649.99",
          "priceValue": 649.99,
          "rating": 4.8,
          "reviewCount": 198,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop",
          "slug": "iphone-carrier-unlock-credits-25",
          "specs": {
            "services": "25 carrier unlocks",
            "activation": "Instant",
            "carriers": "All US/International carriers"
          },
          "tags": ["instant", "premium"]
        },
        {
          "id": "sc-014",
          "name": "UnlockTool Server Credits - 10 Pack Trial",
          "brand": "UnlockTool",
          "categorySlug": "server-credits",
          "price": "$19.99",
          "priceValue": 19.99,
          "rating": 4.7,
          "reviewCount": 678,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=400&h=400&fit=crop",
          "slug": "unlocktool-credits-10trial",
          "specs": {
            "credits": "10 credits",
            "activation": "Instant",
            "purpose": "Trial pack"
          },
          "tags": ["instant", "starter", "trial"]
        },
        {
          "id": "sc-015",
          "name": "Vivo FRP Unlock Credits - 80 Services",
          "brand": "Other Services",
          "categorySlug": "server-credits",
          "price": "$99.99",
          "priceValue": 99.99,
          "rating": 4.5,
          "reviewCount": 234,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop",
          "slug": "vivo-frp-credits-80",
          "specs": {
            "services": "80 FRP unlocks",
            "activation": "Instant",
            "models": "All Vivo smartphones"
          },
          "tags": ["instant"]
        },
        {
          "id": "sc-016",
          "name": "Samsung Knox Remove Credits - 40 Services",
          "brand": "Other Services",
          "categorySlug": "server-credits",
          "price": "$179.99",
          "priceValue": 179.99,
          "rating": 4.7,
          "reviewCount": 187,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop",
          "slug": "samsung-knox-credits-40",
          "specs": {
            "services": "40 Knox removals",
            "activation": "Instant",
            "compatibility": "Knox 3.0-3.8"
          },
          "tags": ["instant", "professional"]
        },
        {
          "id": "sc-017",
          "name": "DirectUnlocks iCloud Credits - 50 Unlocks Professional",
          "brand": "DirectUnlocks",
          "categorySlug": "server-credits",
          "price": "$5,999.99",
          "priceValue": 5999.99,
          "rating": 4.9,
          "reviewCount": 98,
          "stock": 999,
          "image": "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop",
          "slug": "directunlocks-icloud-50pro",
          "specs": {
            "unlocks": "50 iCloud unlocks",
            "activation": "Instant auto-activation",
            "discount": "Save $500 vs 20-pack x2.5"
          },
          "tags": ["premium", "instant", "professional", "bulk"]
        },
      ]
    }
  }

  export default categoryBrandData;