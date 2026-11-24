document.addEventListener("DOMContentLoaded", () => {
  // 1. Live Clock & Telemetry Simulation
  const liveClock = document.getElementById("liveClock");
  const refreshBtn = document.getElementById("refreshTelemetry");

  function updateClock() {
    const now = new Date();
    liveClock.textContent = `Updated: ${now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}`;
  }
  updateClock();
  setInterval(updateClock, 1000);

  refreshBtn.addEventListener("click", () => {
    const aqiValues = ["38 — Good", "42 — Good", "45 — Good", "39 — Good"];
    const powerValues = ["66% (45% Solar)", "68% (42% Solar)", "71% (40% Solar)"];
    document.getElementById("liveAqi").textContent = aqiValues[Math.floor(Math.random() * aqiValues.length)];
    document.getElementById("livePower").textContent = powerValues[Math.floor(Math.random() * powerValues.length)];
    updateClock();
  });

  // 2. Render City Statistics
  const statsGrid = document.getElementById("statsGrid");
  function renderStats(period = "2026") {
    const items = CITY_DATA.statistics[period] || [];
    statsGrid.innerHTML = items.map(stat => `
      <article class="stat-card">
        <span class="pulse-label">${stat.label}</span>
        <div class="stat-value">${stat.value}</div>
        <div class="stat-trend">${stat.trend}</div>
        <p style="font-size:0.84rem;color:var(--text-muted);margin-top:6px;">${stat.detail}</p>
      </article>
    `).join("");
  }
  renderStats("2026");

  document.querySelectorAll("[data-stat-period]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-stat-period]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderStats(btn.dataset.statPeriod);
    });
  });

  // 3. Render Transportation
  const transportGrid = document.getElementById("transportGrid");
  function renderTransport(filter = "all") {
    const list = filter === "all"
      ? CITY_DATA.transportation
      : CITY_DATA.transportation.filter(item => item.mode === filter);

    transportGrid.innerHTML = list.map(t => `
      <article class="card searchable-card">
        <div>
          <div class="card-top">
            <span class="badge">${t.mode}</span>
            <span class="badge ${t.statusClass}">${t.status}</span>
          </div>
          <h3>${t.name}</h3>
          <p>${t.route}</p>
        </div>
        <ul class="meta-list">
          <li><strong>Frequency:</strong> ${t.frequency}</li>
          <li><strong>Fare / Tariff:</strong> ${t.fare}</li>
        </ul>
      </article>
    `).join("");
  }
  renderTransport();
  setupFilterGroup("transportFilters", renderTransport);

  // 4. Render Hospitals
  const hospitalGrid = document.getElementById("hospitalGrid");
  function renderHospitals(filter = "all") {
    const list = filter === "all"
      ? CITY_DATA.hospitals
      : CITY_DATA.hospitals.filter(h => h.type === filter);

    hospitalGrid.innerHTML = list.map(h => `
      <article class="card searchable-card">
        <div>
          <div class="card-top">
            <span class="badge">${h.type}</span>
            <span class="badge ${h.statusClass}">${h.status}</span>
          </div>
          <h3>${h.name}</h3>
          <p><strong>Live Availability:</strong> ${h.beds}</p>
        </div>
        <ul class="meta-list">
          <li><strong>Departments:</strong> ${h.specialties}</li>
          <li><strong>Contact &amp; Zone:</strong> ${h.contact}</li>
        </ul>
      </article>
    `).join("");
  }
  renderHospitals();
  setupFilterGroup("hospitalFilters", renderHospitals);

  // 5. Render Education
  const educationGrid = document.getElementById("educationGrid");
  function renderEducation(filter = "all") {
    const list = filter === "all"
      ? CITY_DATA.education
      : CITY_DATA.education.filter(e => e.category === filter);

    educationGrid.innerHTML = list.map(e => `
      <article class="card searchable-card">
        <div>
          <div class="card-top">
            <span class="badge">${e.category}</span>
            <span class="badge status-open">${e.status}</span>
          </div>
          <h3>${e.name}</h3>
          <p>${e.description}</p>
        </div>
        <ul class="meta-list">
          <li><strong>Highlights:</strong> ${e.stats}</li>
        </ul>
      </article>
    `).join("");
  }
  renderEducation();
  setupFilterGroup("educationFilters", renderEducation);

  // 6. Render Public Services & Citizen Ticket Form
  const servicesGrid = document.getElementById("servicesGrid");
  servicesGrid.innerHTML = CITY_DATA.services.map(s => `
    <article class="card searchable-card">
      <div>
        <div class="card-top">
          <span class="badge">${s.department}</span>
          <span class="badge status-open">${s.sla}</span>
        </div>
        <h3>${s.title}</h3>
        <p>${s.description}</p>
      </div>
      <a href="#citizenRequestForm" class="btn btn-primary" style="text-align:center;">Access Service</a>
    </article>
  `).join("");

  const citizenForm = document.getElementById("citizenRequestForm");
  const ticketFeedback = document.getElementById("ticketFeedback");
  citizenForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const cat = document.getElementById("reqCategory").value;
    const zone = document.getElementById("reqZone").value;
    const ticketId = "AUR-" + Math.floor(100000 + Math.random() * 900000);
    ticketFeedback.textContent = `✓ Ticket ${ticketId} logged for ${cat} in ${zone}. SMS updates activated.`;
    ticketFeedback.classList.remove("hidden");
    citizenForm.reset();
  });

  // 7. Render Emergency Information
  const emergencyGrid = document.getElementById("emergencyGrid");
  emergencyGrid.innerHTML = CITY_DATA.emergency.map(em => `
    <article class="emergency-card searchable-card">
      <span class="badge-live">EMERGENCY</span>
      <div class="hotline-num">${em.number}</div>
      <h3>${em.title}</h3>
      <p style="margin:8px 0;color:#93c5fd;font-weight:600;">${em.response}</p>
      <p>${em.details}</p>
    </article>
  `).join("");

  // 8. Render Important Locations & Interactive Map
  const cityMap = document.getElementById("cityMap");
  const locationsGrid = document.getElementById("locationsGrid");

  function selectLocation(loc) {
    document.getElementById("locTitle").textContent = loc.name;
    document.getElementById("locCategory").textContent = loc.category;
    document.getElementById("locDesc").textContent = loc.description;
    document.getElementById("locMeta").innerHTML = `
      <li><strong>Address:</strong> ${loc.address}</li>
      <li><strong>Hours:</strong> ${loc.hours}</li>
      <li><strong>Coordinates:</strong> ${loc.coords}</li>
    `;
    document.querySelectorAll(".map-pin").forEach(pin => {
      pin.classList.toggle("active", pin.dataset.id === loc.id);
    });
  }

  function renderLocations(filter = "all") {
    const list = filter === "all"
      ? CITY_DATA.locations
      : CITY_DATA.locations.filter(l => l.category === filter);

    // Clear existing pins
    cityMap.querySelectorAll(".map-pin").forEach(p => p.remove());

    list.forEach((loc, idx) => {
      const pin = document.createElement("button");
      pin.className = "map-pin" + (idx === 0 ? " active" : "");
      pin.style.left = `${loc.x}%`;
      pin.style.top = `${loc.y}%`;
      pin.dataset.id = loc.id;
      pin.textContent = `📍 ${loc.name.split(" ")[0]}`;
      pin.addEventListener("click", () => selectLocation(loc));
      cityMap.appendChild(pin);
    });

    if (list.length > 0) {
      selectLocation(list[0]);
    }

    locationsGrid.innerHTML = list.map(loc => `
      <article class="card searchable-card">
        <div>
          <div class="card-top">
            <span class="badge">${loc.category}</span>
            <span class="badge status-open">Verified Landmark</span>
          </div>
          <h3>${loc.name}</h3>
          <p>${loc.description}</p>
        </div>
        <ul class="meta-list">
          <li><strong>Address:</strong> ${loc.address}</li>
          <li><strong>Hours:</strong> ${loc.hours}</li>
        </ul>
      </article>
    `).join("");
  }
  renderLocations();
  setupFilterGroup("locationFilters", renderLocations);

  // 9. Global Live Search
  const globalSearch = document.getElementById("globalSearch");
  globalSearch.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    document.querySelectorAll(".searchable-card").forEach(card => {
      const match = card.textContent.toLowerCase().includes(q);
      card.style.display = match ? "" : "none";
    });
  });

  // 10. SOS Modal Controls
  const sosModal = document.getElementById("sosModal");
  const sosBtn = document.getElementById("sosBtn");
  const closeSosModal = document.getElementById("closeSosModal");
  const sosForm = document.getElementById("sosForm");
  const sosStatus = document.getElementById("sosStatus");

  sosBtn.addEventListener("click", () => {
    sosStatus.classList.add("hidden");
    sosModal.classList.remove("hidden");
  });

  closeSosModal.addEventListener("click", () => {
    sosModal.classList.add("hidden");
  });

  sosModal.addEventListener("click", (e) => {
    if (e.target === sosModal) sosModal.classList.add("hidden");
  });

  sosForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const type = document.getElementById("sosType").value;
    const loc = document.getElementById("sosLocation").value;
    sosStatus.textContent = `🚨 SOS DISPATCHED: ${type} unit alerted to "${loc}". Stay on the line (112).`;
    sosStatus.classList.remove("hidden");
  });

  // Helper for Filter Chips
  function setupFilterGroup(containerId, callback) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.querySelectorAll(".chip").forEach(btn => {
      btn.addEventListener("click", () => {
        container.querySelectorAll(".chip").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        callback(btn.dataset.filter);
      });
    });
  }
});
