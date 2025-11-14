// Product Data
const productData = {
    men: {
        title: "Men's Wear",
        categories: [
            { id: "shirts", name: "Shirts", image: "shirts.jpg" },
            { id: "jeans", name: "Jeans", image: "jeans.jpg" },
            { id: "cargo", name: "Cargo Pants", image: "cargo.jpg" },
            { id: "cotton-pants", name: "Cotton Pants", image: "cotton.jpg" },
            { id: "co-ord-set", name: "Co-ord Sets", image: "cordset.jpg" },
            { id: "shorts", name: "Shorts", image: "sorts.jpg" },
            { id: "track", name: "Track Pants", image: "trackpants.jpg" },
            { id: "tshirts", name: "T-Shirts", image: "tshirt.jpg" },
            { id: "joggers", name: "Joggers", image: "joggers.jpg" }
        ],
        products: {
            shirts: [
                { id: "shirt1", name: "Formal Cotton Shirt", image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Premium cotton formal shirt with perfect fit and comfortable fabric." },
                { id: "shirt2", name: "Casual Linen Shirt", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Lightweight linen shirt perfect for casual outings and summer wear." },
                { id: "shirt3", name: "Checked Shirt", image: "https://images.unsplash.com/photo-1505022610480-60be2f30e5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Trendy checked pattern shirt with comfortable cotton blend fabric." },
                { id: "shirt4", name: "Denim Shirt", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Classic denim shirt with durable fabric and modern fit." }
            ],
            cargo: [
                { id: "cargo1", name: "Men's Cargo Pants", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Comfortable cargo pants with multiple pockets and durable fabric." },
                { id: "cargo2", name: "Army Green Cargos", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Trendy army green cargo pants with perfect fit and style." },
                { id: "cargo3", name: "Black Cargo Pants", image: "https://images.unsplash.com/photo-1506629905607-e1bf835e4ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Versatile black cargo pants suitable for various occasions." }
            ],
            tshirts: [
                { id: "tshirt1", name: "Men's Cotton T-Shirt", image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "100% cotton t-shirt with comfortable fit and breathable fabric." },
                { id: "tshirt2", name: "Polo T-Shirt", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Classic polo t-shirt with collar and premium cotton fabric." },
                { id: "tshirt3", name: "Graphic Print T-Shirt", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Trendy graphic print t-shirt with unique designs and comfortable fit." }
            ],
            jeans: [
                { id: "jeans1", name: "Slim Fit Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Comfortable slim fit jeans with stretchable fabric." },
                { id: "jeans2", name: "Regular Fit Jeans", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Classic regular fit jeans for everyday wear." }
            ],
            "cotton-pants": [
                { id: "cotton1", name: "Cotton Formal Pants", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Premium cotton formal pants for office and formal occasions." }
            ],
            "co-ord-set": [
                { id: "coord1", name: "Men's Co-ord Set", image: "https://images.unsplash.com/photo-1505022610480-60be2f30e5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Matching co-ord set with shirt and pants combination." }
            ],
            shorts: [
                { id: "shorts1", name: "Casual Shorts", image: "https://images.unsplash.com/photo-1506629905607-e1bf835e4ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Comfortable casual shorts for summer wear." }
            ],
            track: [
                { id: "track1", name: "Track Pants", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Comfortable track pants for sports and casual wear." }
            ],
            joggers: [
                { id: "joggers1", name: "Men's Joggers", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Stylish joggers with comfortable fit and modern design." }
            ]
        }
    },
    women: {
        title: "Women's Wear",
        categories: [
            { id: "saree", name: "Sarees", image: "sarees.jpg" },
            { id: "chaniya-choli", name: "Chaniya Choli", image: "chaniyacholi.jpg" },
           ],
        products: {
            saree: [
                { id: "saree1", name: "Women's Silk Saree", image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Elegant silk saree with intricate designs and premium fabric." },
                { id: "saree2", name: "Cotton Printed Saree", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Comfortable cotton saree with beautiful prints and lightweight fabric." },
                { id: "saree3", name: "Georgette Saree", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Flowy georgette saree with elegant drape and contemporary designs." }
            ],
            "chaniya-choli": [
                { id: "chaniya1", name: "Traditional Chaniya Choli", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Traditional chaniya choli set with intricate embroidery and mirror work." },
                { id: "chaniya2", name: "Modern Chaniya Choli", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Contemporary chaniya choli with modern prints and comfortable fit." }
            ],
            
        }
    },
    jewellery: {
        title: "Imitation Jewellery",
        categories: [
            { id: "necklace", name: "Necklaces", image: "neklace.jpg" },
    //         { id: "earrings", name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    //         { id: "bangles", name: "Bangles", image: "https://images.unsplash.com/photo-1584302179602-e4819bb92daa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    //         { id: "rings", name: "Rings", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        products: {
            necklace: [
                { id: "necklace1", name: "Imitation Necklace Set", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Beautiful imitation necklace set with matching earrings." },
                { id: "necklace2", name: "Pearl Necklace Set", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Elegant pearl imitation necklace with classic design." },
                { id: "necklace3", name: "Kundan Necklace Set", image: "https://images.unsplash.com/photo-1584302179602-e4819bb92daa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Traditional kundan necklace set with intricate design work." }
            ],
    //         earrings: [
    //             { id: "earrings1", name: "Jhumka Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Traditional jhumka earrings with beautiful designs." },
    //             { id: "earrings2", name: "Stud Earrings", image: "https://images.unsplash.com/photo-1584302179602-e4819bb92daa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Elegant stud earrings with various designs and colors." },
    //             { id: "earrings3", name: "Chandelier Earrings", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Beautiful chandelier earrings for special occasions." }
    //         ],
    //         bangles: [
    //             { id: "bangles1", name: "Bangle Set", image: "https://images.unsplash.com/photo-1584302179602-e4819bb92daa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Set of 12 imitation bangles with matching designs." },
    //             { id: "bangles2", name: "Kada Bangles", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Traditional kada bangles with intricate designs." }
    //         ],
    //         rings: [
    //             { id: "ring1", name: "Statement Ring", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Beautiful statement ring with intricate design." },
    //             { id: "ring2", name: "Stackable Rings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Set of stackable rings for everyday wear." }
    //         ]
        }
    }
};

// Load Category Page
function loadCategoryPage(collection) {
    const data = productData[collection];
    if (!data) {
        // Redirect to collections if invalid collection
        window.location.href = 'collections.html';
        return;
    }
    
    document.getElementById('category-title').textContent = data.title;
    document.getElementById('breadcrumb-category').textContent = data.title;
    
    const categoryGrid = document.getElementById('category-grid');
    categoryGrid.innerHTML = '';
    
    data.categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card fade-in';
        categoryCard.innerHTML = `
            <div class="category-img">
                <img src="${category.image}" alt="${category.name}" onerror="this.src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
            </div>
            <div class="category-content">
                <h3>${category.name}</h3>
                <a href="products.html?collection=${collection}&type=${category.id}" class="btn">View Products</a>
            </div>
        `;
        categoryGrid.appendChild(categoryCard);
    });
    
    // Initialize animations after content is loaded
    setTimeout(() => {
        initAnimations();
    }, 100);
}

// Load Products Page
function loadProductsPage(collection, type) {
    const data = productData[collection];
    if (!data) {
        window.location.href = 'collections.html';
        return;
    }
    
    const category = data.categories.find(cat => cat.id === type);
    if (!category) {
        window.location.href = `category.html?collection=${collection}`;
        return;
    }
    
    document.getElementById('products-title').textContent = category.name;
    document.getElementById('breadcrumb-category-products').textContent = data.title;
    
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';
    
    const products = data.products[type] || [];
    
    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products fade-in" style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <h3>No Products Available</h3>
                <p>Products for this category will be added soon.</p>
                <a href="collections.html" class="btn">Back to Collections</a>
            </div>
        `;
        return;
    }
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card fade-in';
        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
            </div>
            <div class="product-content">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
<a href="https://wa.me/919016796635?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(product.name)}" target="_blank" class="whatsapp-btn">
                        <i class="fab fa-whatsapp"></i> Order Now on WhatsApp
                    </a>            </div>
        `;
        productsGrid.appendChild(productCard);
    });
    
    // Initialize animations after content is loaded
    setTimeout(() => {
        initAnimations();
    }, 100);
}