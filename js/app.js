/**
 * ==========================================================================
 * HomeZim - Zimbabwe Rental Marketplace
 * Pure Vanilla JavaScript (TrebEdit Ready - No Build Tools / No Frameworks)
 * ==========================================================================
 */

// 1. Realistic Zimbabwean Property Listings Data
const propertiesData = [
  {
    id: 1,
    title: "Modern 3-Bedroom Family Home",
    location: "Harare",
    area: "Borrowdale",
    rent: 450,
    bedrooms: 3,
    bathrooms: 2,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    description: "Spacious suburban home in Borrowdale with prolific borehole water, 5kVA solar backup, fitted modern kitchen, paved driveway, and walled/gated security.",
    amenities: ["Borehole Water", "Solar Backup", "Walled & Gated", "Paved Driveway", "Fitted Kitchen"]
  },
  {
    id: 2,
    title: "Spacious Garden House",
    location: "Bulawayo",
    area: "Suburbs",
    rent: 350,
    bedrooms: 4,
    bathrooms: 2,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
    description: "Quiet and secure 4-bedroom family home in Bulawayo Suburbs close to CBD. Features a lush garden, garage, 24/7 council + tank water, and servant quarters.",
    amenities: ["5000L Water Tank", "Lock-up Garage", "Lush Garden", "Fireplace", "Servant Quarters"]
  },
  {
    id: 3,
    title: "Charming 2-Bed Garden Cottage",
    location: "Harare",
    area: "Avondale",
    rent: 320,
    bedrooms: 2,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    description: "Self-contained cozy cottage inside a secure gated property in Avondale. Private entrance, own electricity meter (ZESA prepaid), and reliable WiFi ready.",
    amenities: ["Own ZESA Meter", "Solar Geyser", "Secure Parking", "WiFi Ready"]
  },
  {
    id: 4,
    title: "Executive 4-Bedroom Villa",
    location: "Mutare",
    area: "Palmerstone",
    rent: 400,
    bedrooms: 4,
    bathrooms: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    description: "Scenic Eastern Highlands view in Palmerstone, Mutare. 4 bedrooms with master ensuite, open plan dining, perimeter electric fence, and landscaped garden.",
    amenities: ["Mountain Views", "Master Ensuite", "Electric Fence", "Prolific Borehole"]
  },
  {
    id: 5,
    title: "Neat Family Residence",
    location: "Gweru",
    area: "Windsor Park",
    rent: 280,
    bedrooms: 3,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=800&q=80",
    description: "Very neat and secure 3-bedroom house in Windsor Park, Gweru. Near top schools, spacious lounge, tiled floors throughout, and 2500L water backup system.",
    amenities: ["Water Backup Tank", "Tiled Throughout", "Close to Schools", "Perimeter Wall"]
  },
  {
    id: 6,
    title: "Newly Renovated Townhouse",
    location: "Harare",
    area: "Greendale",
    rent: 550,
    bedrooms: 3,
    bathrooms: 2,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    description: "Modern townhouse in a quiet gated complex in Greendale. 24/7 security guard, communal borehole, solar system, and private courtyard for braai.",
    amenities: ["24/7 Guarded Gate", "Solar System", "Braai Area", "Communal Borehole"]
  },
  {
    id: 7,
    title: "Affordable 3-Bedroom House",
    location: "Chitungwiza",
    area: "Zengeza 4",
    rent: 200,
    bedrooms: 3,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
    description: "Conveniently located 3-bedroom standalone house in Zengeza 4. Fenced yard, separate ZESA meter, clean municipal water with storage tank.",
    amenities: ["Fenced Yard", "Own ZESA Meter", "Water Tank", "Near Transport"]
  },
  {
    id: 8,
    title: "Prime 3-Bedroom House",
    location: "Bulawayo",
    area: "Kumalo",
    rent: 480,
    bedrooms: 3,
    bathrooms: 2,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    description: "Desirable property in Kumalo with swimming pool, large verandah, reliable borehole, solar geyser, and peaceful tree-lined avenue.",
    amenities: ["Swimming Pool", "Borehole Water", "Solar Geyser", "Staff Quarters"]
  },
  {
    id: 9,
    title: "Cozy 2-Bed House",
    location: "Masvingo",
    area: "Rhodene",
    rent: 260,
    bedrooms: 2,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    description: "Peaceful 2-bedroom home in Rhodene, Masvingo. Fully walled, secure parking, reliable water supply, and easy access to Masvingo CBD.",
    amenities: ["Walled & Gated", "Water Tank", "Carport", "Near Town"]
  },
  {
    id: 10,
    title: "Solid 3-Bedroom Residence",
    location: "Kwekwe",
    area: "Chicago",
    rent: 290,
    bedrooms: 3,
    bathrooms: 2,
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
    description: "Spacious house in low-density Chicago suburb, Kwekwe. Big yard, lockup garage, ceiling fans, and reliable backup water tank.",
    amenities: ["Backup Water", "Lock-up Garage", "Large Yard", "Ceiling Fans"]
  }
];

// 2. DOM Elements
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const searchForm = document.getElementById("searchForm");
const locationSelect = document.getElementById("locationSelect");
const budgetInput = document.getElementById("budgetInput");
const propertiesGrid = document.getElementById("propertiesGrid");
const filterStatus = document.getElementById("filterStatus");
const propertyModal = document.getElementById("propertyModal");
const modalBody = document.getElementById("modalBody");
const closeModalBtn = document.getElementById("closeModalBtn");

// 3. Mobile Navigation Toggle
if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Close menu when clicking navigation links on mobile
  const navLinks = navMenu.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}

// 4. Render Property Cards
function renderProperties(properties) {
  if (!propertiesGrid) return;

  // Clear container
  propertiesGrid.innerHTML = "";

  // Check if any properties match
  if (properties.length === 0) {
    propertiesGrid.innerHTML = `
      <div class="no-results" id="noResultsBlock">
        <div class="no-results-icon">🏠🔍</div>
        <h3>No houses found</h3>
        <p>We couldn't find any rental properties matching your current location or budget. Try selecting "Anywhere in Zimbabwe" or increasing your budget.</p>
        <button type="button" class="btn-clear-search" id="resetSearchBtn">Show All Available Houses</button>
      </div>
    `;

    const resetBtn = document.getElementById("resetSearchBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", resetFilters);
    }
    return;
  }

  // Generate HTML for each property card
  properties.forEach((property) => {
    const card = document.createElement("article");
    card.className = "property-card";
    card.id = `property-card-${property.id}`;

    card.innerHTML = `
      <div class="property-image-container">
        <img 
          src="${property.image}" 
          alt="${property.title}" 
          class="property-image" 
          loading="lazy"
        />
        <span class="property-badge-city">${property.location}</span>
        <span class="property-badge-price">$${property.rent}/mo</span>
      </div>
      
      <div class="property-body">
        <h3 class="property-title">${property.title}</h3>
        <div class="property-location">
          <span>📍</span> ${property.area}, ${property.location}
        </div>
        
        <div class="property-features">
          <div class="feature-item">
            <span>🛏️</span> ${property.bedrooms} Beds
          </div>
          <div class="feature-item">
            <span>🚿</span> ${property.bathrooms} Baths
          </div>
          <div class="feature-item">
            <span>🇿🇼</span> Verified
          </div>
        </div>
        
        <p class="property-description">${property.description}</p>
        
        <div class="property-footer">
          <button 
            type="button" 
            class="btn-view-house" 
            onclick="openPropertyDetails(${property.id})"
            id="view-btn-${property.id}"
          >
            View House Details
          </button>
        </div>
      </div>
    `;

    propertiesGrid.appendChild(card);
  });
}

// 5. Filter Logic (Location & Budget)
function filterProperties(locationFilter, maxBudget) {
  let filtered = propertiesData;

  // Filter by location if not "all" or empty
  if (locationFilter && locationFilter !== "all" && locationFilter !== "Anywhere in Zimbabwe") {
    filtered = filtered.filter(
      (item) => item.location.toLowerCase() === locationFilter.toLowerCase()
    );
  }

  // Filter by max monthly budget
  if (maxBudget && !isNaN(maxBudget) && Number(maxBudget) > 0) {
    const budgetNumber = Number(maxBudget);
    filtered = filtered.filter((item) => item.rent <= budgetNumber);
  }

  // Update Section Status Text
  updateFilterStatus(locationFilter, maxBudget, filtered.length);

  // Render the filtered cards
  renderProperties(filtered);
}

// 6. Update Filter Status Label
function updateFilterStatus(location, budget, count) {
  if (!filterStatus) return;

  const locLabel = (!location || location === "all") ? "All Zimbabwe" : location;
  const budgetLabel = (budget && Number(budget) > 0) ? ` • Under $${budget}/mo` : "";
  
  filterStatus.innerHTML = `Showing <strong>${count}</strong> houses in <em>${locLabel}</em>${budgetLabel} <button type="button" class="btn-reset-filter" onclick="resetFilters()">Reset</button>`;
}

// 7. Handle Search Form Submit
if (searchForm) {
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const selectedLocation = locationSelect ? locationSelect.value : "all";
    const enteredBudget = budgetInput ? budgetInput.value.trim() : "";

    filterProperties(selectedLocation, enteredBudget);

    // Scroll smoothly to properties section
    const targetSection = document.getElementById("featured-properties");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// 8. Quick City Chip Click
function quickFilterCity(cityName) {
  if (locationSelect) {
    locationSelect.value = cityName;
  }
  if (budgetInput) {
    budgetInput.value = "";
  }
  filterProperties(cityName, null);

  const targetSection = document.getElementById("featured-properties");
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Make available globally for inline onclick
window.quickFilterCity = quickFilterCity;

// 9. Reset Filters
function resetFilters() {
  if (locationSelect) locationSelect.value = "all";
  if (budgetInput) budgetInput.value = "";
  filterProperties("all", null);
}

window.resetFilters = resetFilters;

// 10. Open Property Modal (Previewing property info in Phase 1)
function openPropertyDetails(propertyId) {
  const property = propertiesData.find((p) => p.id === propertyId);
  if (!property || !propertyModal || !modalBody) return;

  const amenitiesHTML = property.amenities
    ? property.amenities.map((a) => `<span class="amenity-badge">✓ ${a}</span>`).join("")
    : "";

  modalBody.innerHTML = `
    <img src="${property.image}" alt="${property.title}" class="modal-image" />
    <span class="modal-price-tag">$${property.rent} / Month</span>
    <h2 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.25rem;">${property.title}</h2>
    <p style="color: #64748b; font-size: 0.95rem; margin-bottom: 1rem;">📍 ${property.area}, ${property.location}, Zimbabwe</p>
    
    <div style="display: flex; gap: 1.5rem; margin-bottom: 1rem; padding: 0.75rem 0; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; font-weight: 600;">
      <div>🛏️ ${property.bedrooms} Bedrooms</div>
      <div>🚿 ${property.bathrooms} Bathrooms</div>
      <div>🏢 Standalone House</div>
    </div>

    <h4 style="font-weight: 700; margin-bottom: 0.5rem;">Key Amenities & Utilities:</h4>
    <div class="modal-amenities">
      ${amenitiesHTML}
    </div>

    <h4 style="font-weight: 700; margin: 1rem 0 0.5rem;">Property Description:</h4>
    <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">${property.description}</p>
    
    <div style="margin-top: 1.25rem; background: #e6f4ea; border: 1px solid rgba(0, 100, 50, 0.2); padding: 0.85rem; border-radius: 8px; font-size: 0.85rem; color: #006432;">
      ℹ️ <strong>Renter Note:</strong> Landlord direct contact and verified viewing appointments will be activated in Phase 2.
    </div>
  `;

  propertyModal.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

window.openPropertyDetails = openPropertyDetails;

// 11. Close Property Modal
function closeModal() {
  if (!propertyModal) return;
  propertyModal.classList.remove("active");
  document.body.style.overflow = ""; // Restore background scroll
}

window.closeModal = closeModal;

if (closeModalBtn) {
  closeModalBtn.addEventListener("click", closeModal);
}

if (propertyModal) {
  propertyModal.addEventListener("click", (e) => {
    if (e.target === propertyModal) {
      closeModal();
    }
  });
}

// 12. Initialize on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  // Render initial list
  renderProperties(propertiesData);
  updateFilterStatus("all", null, propertiesData.length);
});
