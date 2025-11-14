// Product Detail Data - Complete dataset for all products
const productDetails = {
    // Men's Wear Products
    cargo1: {
        name: "Men's Cargo Pants",
        images: [
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1506629905607-e1bf835e4ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Comfortable cargo pants with multiple pockets and durable fabric. Perfect for casual outings and everyday wear. Made from high-quality cotton blend that ensures comfort and longevity.",
        details: [
            "100% Cotton Fabric",
            "Multiple Utility Pockets",
            "Comfortable Fit",
            "Durable Stitching",
            "Available in Multiple Colors",
            "Machine Washable",
            "Regular Fit"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Khaki", "Black", "Army Green", "Navy Blue"],
        category: "Men's Wear",
        collection: "men"
    },
    cargo2: {
        name: "Army Green Cargos",
        images: [
            "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Trendy army green cargo pants with perfect fit and style. Ideal for outdoor activities and casual wear.",
        details: [
            "Premium Cotton Blend",
            "Military Style Design",
            "Comfortable Waistband",
            "Multiple Pockets",
            "Durable Fabric"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Army Green", "Olive Green"],
        category: "Men's Wear",
        collection: "men"
    },
    cargo3: {
        name: "Black Cargo Pants",
        images: [
            "https://images.unsplash.com/photo-1506629905607-e1bf835e4ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Versatile black cargo pants suitable for various occasions. Perfect for both casual and semi-formal settings.",
        details: [
            "100% Cotton",
            "Slim Fit",
            "Multiple Pockets",
            "Comfortable Wear",
            "Easy Maintenance"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "Charcoal"],
        category: "Men's Wear",
        collection: "men"
    },
    tshirt1: {
        name: "Men's Cotton T-Shirt",
        images: [
            "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "100% cotton t-shirt with comfortable fit and breathable fabric. Perfect for everyday wear and casual outings.",
        details: [
            "100% Cotton Fabric",
            "Breathable and Comfortable",
            "Regular Fit",
            "Durable Quality",
            "Available in Multiple Colors",
            "Machine Washable"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["White", "Black", "Navy Blue", "Gray", "Red"],
        category: "Men's Wear",
        collection: "men"
    },
    tshirt2: {
        name: "Polo T-Shirt",
        images: [
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Classic polo t-shirt with collar and premium cotton fabric. Perfect for semi-casual occasions.",
        details: [
            "Premium Cotton Blend",
            "Classic Polo Collar",
            "Comfortable Fit",
            "Durable Quality",
            "Multiple Color Options"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Blue", "Black", "White", "Maroon"],
        category: "Men's Wear",
        collection: "men"
    },
    tshirt3: {
        name: "Graphic Print T-Shirt",
        images: [
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Trendy graphic print t-shirt with unique designs and comfortable fit. Express your style with these fashionable tees.",
        details: [
            "100% Cotton",
            "Unique Graphic Prints",
            "Comfortable Fit",
            "Fashionable Design",
            "Youthful Appeal"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["White", "Black", "Gray"],
        category: "Men's Wear",
        collection: "men"
    },
    shirt1: {
        name: "Formal Cotton Shirt",
        images: [
            "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Premium cotton formal shirt with perfect fit and comfortable fabric. Ideal for office wear and formal occasions.",
        details: [
            "Premium Cotton Fabric",
            "Formal Design",
            "Comfortable Fit",
            "Durable Quality",
            "Available in Multiple Colors",
            "Iron-Free Fabric"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["White", "Blue", "Pink", "Gray"],
        category: "Men's Wear",
        collection: "men"
    },
    shirt2: {
        name: "Casual Linen Shirt",
        images: [
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Lightweight linen shirt perfect for casual outings and summer wear. Breathable and comfortable for warm weather.",
        details: [
            "100% Linen Fabric",
            "Lightweight and Breathable",
            "Casual Design",
            "Summer Wear",
            "Comfortable Fit"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Beige", "White", "Light Blue"],
        category: "Men's Wear",
        collection: "men"
    },
    shirt3: {
        name: "Checked Shirt",
        images: [
            "https://images.unsplash.com/photo-1505022610480-60be2f30e5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Trendy checked pattern shirt with comfortable cotton blend fabric. Perfect for casual and semi-formal occasions.",
        details: [
            "Cotton Blend Fabric",
            "Checked Pattern",
            "Comfortable Fit",
            "Versatile Design",
            "Multiple Color Options"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Red Check", "Blue Check", "Black Check"],
        category: "Men's Wear",
        collection: "men"
    },
    shirt4: {
        name: "Denim Shirt",
        images: [
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Classic denim shirt with durable fabric and modern fit. Perfect for casual wear and layering.",
        details: [
            "100% Denim Fabric",
            "Classic Design",
            "Durable Quality",
            "Modern Fit",
            "Versatile Styling"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Light Blue", "Dark Blue", "Black"],
        category: "Men's Wear",
        collection: "men"
    },

    // Women's Wear Products
    saree1: {
        name: "Women's Silk Saree",
        images: [
            "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Elegant silk saree with intricate designs and premium fabric. Perfect for weddings and special occasions. Comes with matching blouse piece.",
        details: [
            "Pure Silk Fabric",
            "Intricate Zari Work",
            "Comes with Matching Blouse",
            "Elegant Drape",
            "Available in Multiple Colors",
            "Handcrafted Details"
        ],
        sizes: ["Free Size"],
        colors: ["Red", "Blue", "Green", "Purple", "Maroon", "Gold"],
        category: "Women's Wear",
        collection: "women"
    },
    saree2: {
        name: "Cotton Printed Saree",
        images: [
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Comfortable cotton saree with beautiful prints and lightweight fabric. Perfect for daily wear and casual occasions.",
        details: [
            "100% Cotton Fabric",
            "Beautiful Prints",
            "Lightweight",
            "Easy to Drape",
            "Available in Multiple Colors",
            "Machine Washable"
        ],
        sizes: ["Free Size"],
        colors: ["Blue", "Green", "Yellow", "Pink", "Orange"],
        category: "Women's Wear",
        collection: "women"
    },
    saree3: {
        name: "Georgette Saree",
        images: [
            "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Flowy georgette saree with elegant drape and contemporary designs. Perfect for parties and festive occasions.",
        details: [
            "Pure Georgette Fabric",
            "Flowy Drape",
            "Contemporary Designs",
            "Elegant Look",
            "Party Wear"
        ],
        sizes: ["Free Size"],
        colors: ["Black", "Red", "Blue", "Green", "Purple"],
        category: "Women's Wear",
        collection: "women"
    },
    chaniya1: {
        name: "Traditional Chaniya Choli",
        images: [
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Traditional chaniya choli set with intricate embroidery and mirror work. Perfect for festivals and weddings.",
        details: [
            "Traditional Design",
            "Intricate Embroidery",
            "Mirror Work",
            "Complete Set",
            "Festive Wear"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Red", "Green", "Blue", "Pink", "Yellow"],
        category: "Women's Wear",
        collection: "women"
    },
    chaniya2: {
        name: "Modern Chaniya Choli",
        images: [
            "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Contemporary chaniya choli with modern prints and comfortable fit. Perfect for modern celebrations.",
        details: [
            "Contemporary Design",
            "Modern Prints",
            "Comfortable Fit",
            "Lightweight Fabric",
            "Easy to Wear"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Pastel Pink", "Mint Green", "Lavender", "Peach"],
        category: "Women's Wear",
        collection: "women"
    },

    // Jewellery Products
    necklace1: {
        name: "Imitation Necklace Set",
        images: [
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584302179602-e4819bb92daa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Beautiful imitation necklace set with matching earrings. Perfect for parties and special occasions. Crafted with attention to detail.",
        details: [
            "High-Quality Imitation",
            "Matching Earrings Included",
            "Gold Plated",
            "Lightweight and Comfortable",
            "Elegant Design",
            "Hypoallergenic"
        ],
        sizes: ["Adjustable"],
        colors: ["Gold", "Rose Gold", "Silver"],
        category: "Imitation Jewellery",
        collection: "jewellery"
    },
    necklace2: {
        name: "Pearl Necklace Set",
        images: [
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Elegant pearl imitation necklace with classic design. Perfect for formal events and traditional wear.",
        details: [
            "Pearl Imitation",
            "Classic Design",
            "Elegant Look",
            "Lightweight",
            "Timeless Appeal"
        ],
        sizes: ["Adjustable"],
        colors: ["White Pearl", "Cream Pearl"],
        category: "Imitation Jewellery",
        collection: "jewellery"
    },
    necklace3: {
        name: "Kundan Necklace Set",
        images: [
            "https://images.unsplash.com/photo-1584302179602-e4819bb92daa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Traditional kundan necklace set with intricate design work. Perfect for weddings and grand celebrations.",
        details: [
            "Kundan Work",
            "Intricate Design",
            "Traditional Look",
            "Grand Appearance",
            "Complete Set"
        ],
        sizes: ["Adjustable"],
        colors: ["Multicolor", "Gold Base"],
        category: "Imitation Jewellery",
        collection: "jewellery"
    },
    earrings1: {
        name: "Jhumka Earrings",
        images: [
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584302179602-e4819bb92daa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Traditional jhumka earrings with beautiful designs. Perfect for ethnic wear and festive occasions.",
        details: [
            "Traditional Design",
            "Lightweight",
            "Hypoallergenic",
            "Beautiful Craftsmanship",
            "Available in Multiple Colors"
        ],
        sizes: ["One Size"],
        colors: ["Gold", "Silver", "Rose Gold"],
        category: "Imitation Jewellery",
        collection: "jewellery"
    },
    earrings2: {
        name: "Stud Earrings",
        images: [
            "https://images.unsplash.com/photo-1584302179602-e4819bb92daa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Elegant stud earrings with various designs and colors. Perfect for daily wear and office use.",
        details: [
            "Simple Design",
            "Lightweight",
            "Hypoallergenic",
            "Daily Wear",
            "Multiple Designs"
        ],
        sizes: ["One Size"],
        colors: ["Gold", "Silver", "Rose Gold", "Pearl White"],
        category: "Imitation Jewellery",
        collection: "jewellery"
    },
    earrings3: {
        name: "Chandelier Earrings",
        images: [
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Beautiful chandelier earrings for special occasions. Adds elegance to your party wear.",
        details: [
            "Chandelier Design",
            "Elegant Look",
            "Party Wear",
            "Lightweight",
            "Statement Piece"
        ],
        sizes: ["One Size"],
        colors: ["Gold", "Silver", "Multicolor"],
        category: "Imitation Jewellery",
        collection: "jewellery"
    },
    bangles1: {
        name: "Bangle Set",
        images: [
            "https://images.unsplash.com/photo-1584302179602-e4819bb92daa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Set of 12 imitation bangles with matching designs. Perfect for completing your traditional look.",
        details: [
            "Set of 12 Bangles",
            "Matching Designs",
            "Adjustable Size",
            "Traditional Look",
            "Lightweight"
        ],
        sizes: ["Adjustable"],
        colors: ["Gold", "Silver", "Multicolor"],
        category: "Imitation Jewellery",
        collection: "jewellery"
    },
    bangles2: {
        name: "Kada Bangles",
        images: [
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584302179602-e4819bb92daa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Traditional kada bangles with intricate designs. Perfect for ethnic and traditional wear.",
        details: [
            "Traditional Design",
            "Intricate Patterns",
            "Adjustable",
            "Ethnic Look",
            "Durable"
        ],
        sizes: ["Adjustable"],
        colors: ["Gold", "Silver", "Antique Finish"],
        category: "Imitation Jewellery",
        collection: "jewellery"
    },

    // Additional products for complete coverage
    jeans1: {
        name: "Slim Fit Jeans",
        images: [
            "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Comfortable slim fit jeans with stretchable fabric. Perfect for casual outings and daily wear.",
        details: [
            "Stretchable Denim",
            "Slim Fit",
            "Comfortable Wear",
            "Modern Design",
            "Multiple Washes"
        ],
        sizes: ["28", "30", "32", "34", "36"],
        colors: ["Dark Blue", "Light Blue", "Black"],
        category: "Men's Wear",
        collection: "men"
    },
    jeans2: {
        name: "Regular Fit Jeans",
        images: [
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Classic regular fit jeans for everyday wear. Comfortable and versatile for various occasions.",
        details: [
            "Regular Fit",
            "Comfortable Denim",
            "Classic Design",
            "Durable Quality",
            "Easy Maintenance"
        ],
        sizes: ["28", "30", "32", "34", "36", "38"],
        colors: ["Blue", "Black", "Gray"],
        category: "Men's Wear",
        collection: "men"
    },
    cotton1: {
        name: "Cotton Formal Pants",
        images: [
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Premium cotton formal pants for office and formal occasions. Comfortable and professional look.",
        details: [
            "Premium Cotton",
            "Formal Design",
            "Comfortable Fit",
            "Office Wear",
            "Multiple Colors"
        ],
        sizes: ["28", "30", "32", "34", "36"],
        colors: ["Black", "Gray", "Navy Blue", "Beige"],
        category: "Men's Wear",
        collection: "men"
    },
    coord1: {
        name: "Men's Co-ord Set",
        images: [
            "https://images.unsplash.com/photo-1505022610480-60be2f30e5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Matching co-ord set with shirt and pants combination. Perfect for stylish casual outings.",
        details: [
            "Matching Set",
            "Stylish Design",
            "Comfortable Fabric",
            "Modern Look",
            "Complete Outfit"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Blue Set", "Black Set", "Gray Set"],
        category: "Men's Wear",
        collection: "men"
    },
    shorts1: {
        name: "Casual Shorts",
        images: [
            "https://images.unsplash.com/photo-1506629905607-e1bf835e4ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Comfortable casual shorts for summer wear. Perfect for vacations and casual outings.",
        details: [
            "Summer Wear",
            "Comfortable Fit",
            "Casual Design",
            "Lightweight",
            "Multiple Colors"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Khaki", "Black", "Navy Blue", "Gray"],
        category: "Men's Wear",
        collection: "men"
    },
    track1: {
        name: "Track Pants",
        images: [
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1506629905607-e1bf835e4ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Comfortable track pants for sports and casual wear. Perfect for workouts and lounging.",
        details: [
            "Sports Wear",
            "Comfortable Fit",
            "Flexible Fabric",
            "Casual Style",
            "Easy Care"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "Gray", "Navy Blue", "Maroon"],
        category: "Men's Wear",
        collection: "men"
    },
    joggers1: {
        name: "Men's Joggers",
        images: [
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Stylish joggers with comfortable fit and modern design. Perfect for casual outings and sports.",
        details: [
            "Modern Design",
            "Comfortable Fit",
            "Stylish Look",
            "Versatile",
            "Multiple Colors"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "Gray", "Navy Blue", "Olive Green"],
        category: "Men's Wear",
        collection: "men"
    },
    kurta1: {
        name: "Anarkali Kurta",
        images: [
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Beautiful Anarkali kurta with intricate embroidery work. Perfect for festive occasions and parties.",
        details: [
            "Anarkali Style",
            "Intricate Embroidery",
            "Flowy Design",
            "Festive Wear",
            "Elegant Look"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Red", "Blue", "Green", "Pink", "Purple"],
        category: "Women's Wear",
        collection: "women"
    },
    kurta2: {
        name: "Straight Cut Kurta",
        images: [
            "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Elegant straight cut kurta with comfortable fit. Perfect for daily wear and casual occasions.",
        details: [
            "Straight Cut",
            "Comfortable Fit",
            "Daily Wear",
            "Simple Design",
            "Multiple Colors"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Black", "Blue", "Pink", "Yellow"],
        category: "Women's Wear",
        collection: "women"
    },
    dress1: {
        name: "Party Wear Dress",
        images: [
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Stylish party wear dress with elegant design. Perfect for parties and special occasions.",
        details: [
            "Party Wear",
            "Elegant Design",
            "Comfortable Fit",
            "Special Occasions",
            "Fashionable"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Red", "Blue", "Green", "Gold"],
        category: "Women's Wear",
        collection: "women"
    },
    ring1: {
        name: "Statement Ring",
        images: [
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Beautiful statement ring with intricate design. Perfect for adding elegance to your look.",
        details: [
            "Statement Piece",
            "Intricate Design",
            "Elegant Look",
            "Adjustable",
            "Fashionable"
        ],
        sizes: ["Adjustable"],
        colors: ["Gold", "Silver", "Rose Gold"],
        category: "Imitation Jewellery",
        collection: "jewellery"
    },
    ring2: {
        name: "Stackable Rings",
        images: [
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Set of stackable rings for everyday wear. Perfect for creating your unique style combination.",
        details: [
            "Set of Rings",
            "Stackable Design",
            "Everyday Wear",
            "Versatile",
            "Multiple Sizes"
        ],
        sizes: ["Adjustable"],
        colors: ["Gold Set", "Silver Set", "Rose Gold Set"],
        category: "Imitation Jewellery",
        collection: "jewellery"
    }
};

// Load Product Detail Page
function loadProductDetailPage(id) {
    const product = productDetails[id];
    
    if (!product) {
        // Show error message and redirect
        const productDetail = document.getElementById('product-detail');
        productDetail.innerHTML = `
            <div class="error-message" style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <h2>Product Not Found</h2>
                <p>The product you're looking for is not available.</p>
                <a href="collections.html" class="btn">Back to Collections</a>
            </div>
        `;
        return;
    }
    
    document.getElementById('product-detail-title').textContent = product.name;
    document.getElementById('breadcrumb-category-detail').textContent = product.category;
    
    const productDetail = document.getElementById('product-detail');
    productDetail.innerHTML = `
        <div class="product-gallery fade-in">
            <div class="main-image">
                <img src="${product.images[0]}" alt="${product.name}" id="main-product-image" onerror="this.src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
            </div>
            <div class="thumbnail-container">
                ${product.images.map((image, index) => `
                    <div class="thumbnail ${index === 0 ? 'active' : ''}" data-image="${image}">
                        <img src="${image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="product-info fade-in">
            <h1>${product.name}</h1>
            <p class="product-description">${product.description}</p>
            
            <div class="product-options">
                <div class="option-group">
                    <h3>Size</h3>
                    <div class="options">
                        ${product.sizes.map(size => `
                            <div class="option">${size}</div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="option-group">
                    <h3>Color</h3>
                    <div class="options">
                        ${product.colors.map(color => `
                            <div class="option">${color}</div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <div class="product-details">
                <h3>Product Details</h3>
                <ul>
                    ${product.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
            
            <div class="action-buttons">
                <a href="https://wa.me/919016796635?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(product.name)}%20from%20Mahavir%20Factory%20Outlet.%20Please%20share%20more%20details%20and%20pricing." target="_blank" class="whatsapp-btn">
                    <i class="fab fa-whatsapp"></i> Order Now on WhatsApp
                </a>
                <a href="products.html?collection=${product.collection}" class="btn btn-outline">
                    <i class="fas fa-arrow-left"></i> Back to Products
                </a>
            </div>
        </div>
    `;
    
    // Add thumbnail click event
    const thumbnails = productDetail.querySelectorAll('.thumbnail');
    const mainImage = productDetail.getElementById('main-product-image');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            mainImage.src = this.getAttribute('data-image');
        });
    });
    
    // Add option selection
    const options = productDetail.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('click', function() {
            this.parentElement.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // Initialize animations after content is loaded
    setTimeout(() => {
        initAnimations();
    }, 100);
}