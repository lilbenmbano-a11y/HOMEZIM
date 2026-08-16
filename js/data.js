/* HomeZim Property Data */
/* Centralized data file used by index.html and house.html */

const houses = [
  {
    id: 1,
    title: "Modern Family Home",
    location: "Harare",
    area: "Borrowdale",
    province: "Harare",
    rent: 450,
    bedrooms: 3,
    bathrooms: 2,
    propertyType: "House",
    availability: "Available",
    description: "A spacious modern family home in a quiet and secure neighbourhood. This beautiful property features a large garden, secure parking, and modern finishes throughout. Perfect for families looking for comfort and security in one of Harare's most desirable areas.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Water", "Electricity", "Parking", "Security", "Internet", "Garden"]
  },
  {
    id: 2,
    title: "Beautiful City Apartment",
    location: "Harare",
    area: "Avondale",
    province: "Harare",
    rent: 350,
    bedrooms: 2,
    bathrooms: 1,
    propertyType: "Apartment",
    availability: "Available",
    description: "Comfortable apartment close to shops, schools and major roads. This well-maintained unit offers a modern kitchen, secure parking, and easy access to public transport. Ideal for young professionals or a small family.",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a1c002085d2f?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Water", "Electricity", "Parking", "Security", "Internet"]
  },
  {
    id: 3,
    title: "Spacious Bulawayo Home",
    location: "Bulawayo",
    area: "Hillside",
    province: "Bulawayo",
    rent: 300,
    bedrooms: 3,
    bathrooms: 2,
    propertyType: "House",
    availability: "Available",
    description: "A peaceful home with spacious rooms and secure parking. Located in the quiet Hillside suburb, this property offers a large garden, borehole water, and a friendly community. Great for families seeking space and tranquility.",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154363-67ebad3de954?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Water", "Electricity", "Parking", "Security", "Garden"]
  },
  {
    id: 4,
    title: "Family House in Mutare",
    location: "Mutare",
    area: "Fairbridge",
    province: "Manicaland",
    rent: 280,
    bedrooms: 3,
    bathrooms: 2,
    propertyType: "House",
    availability: "Available",
    description: "A comfortable family property surrounded by a peaceful environment. This home features a large yard, mature trees for shade, and a secure perimeter wall. Close to schools and local amenities in the Fairbridge area.",
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585153490-87fb40c0c5f2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Water", "Electricity", "Parking", "Security"]
  },
  {
    id: 5,
    title: "Gweru Rental Home",
    location: "Gweru",
    area: "Mkoba",
    province: "Midlands",
    rent: 220,
    bedrooms: 2,
    bathrooms: 1,
    propertyType: "House",
    availability: "Available",
    description: "Affordable two-bedroom home suitable for a small family. This neat property offers a compact garden, reliable water supply, and easy access to the city centre. A great starter home in the Mkoba area.",
    images: [
      "https://images.unsplash.com/photo-1600607688967-e1ff9e4b2e8c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752222-9f4d81f5d1d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585152915-6e0e0c5c5b5b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753088-35f0ca3094d6?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Water", "Electricity", "Parking"]
  },
  {
    id: 6,
    title: "Masvingo Family Property",
    location: "Masvingo",
    area: "Rhodhesville",
    province: "Masvingo",
    rent: 250,
    bedrooms: 3,
    bathrooms: 1,
    propertyType: "House",
    availability: "Available",
    description: "Well-maintained property in a convenient residential area. This home offers three bedrooms, a functional kitchen, and a secure yard. Located near shops and public transport in Rhodhesville.",
    images: [
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585152915-6e0e0c5c5b5b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607688967-e1ff9e4b2e8c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Water", "Electricity", "Parking", "Security", "Garden", "Internet"]
  }
];
