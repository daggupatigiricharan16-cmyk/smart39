const CITY_DATA = {
  statistics: {
    "2026": [
      { label: "Total Population", value: "1.84M", trend: "+2.4% YoY Urban Growth", detail: "Across 12 Smart Administrative Zones" },
      { label: "Renewable Energy Share", value: "46.8%", trend: "+8.1% vs 2025", detail: "Solar microgrids & waste-to-energy plants" },
      { label: "Public Transit Ridership", value: "640K/day", trend: "94.2% On-Time Reliability", detail: "Metro + Zero-Emission Electric Bus Fleet" },
      { label: "Digital Literacy & Fiber", value: "98.5%", trend: "410 Free Public Wi-Fi Zones", detail: "1 Gbps municipal fiber backbone" },
      { label: "Smart Water Metering", value: "96.2%", trend: "-18% Non-Revenue Water Loss", detail: "Automated leak detection sensors" },
      { label: "Green Cover Index", value: "34.5%", trend: "185 Urban Parks & Lakes", detail: "2.4M geo-tagged city trees" }
    ],
    "target": [
      { label: "Projected Population", value: "2.25M", trend: "Master Plan 2030", detail: "Transit-oriented high-density corridors" },
      { label: "Renewable Energy Share", value: "80.0%", trend: "Net-Zero Civic Goal", detail: "100% solar-powered municipal buildings" },
      { label: "Public Transit Ridership", value: "1.10M/day", trend: "5-Min Peak Headway", detail: "3 new autonomous metro extensions" },
      { label: "Digital Literacy & Fiber", value: "100%", trend: "Universal Smart Access", detail: "City-wide IoT & 6G testbed coverage" },
      { label: "Water Recycling Rate", value: "85.0%", trend: "Zero-Discharge Industrial Zones", detail: "Tertiary treatment & aquifer recharge" },
      { label: "Green Cover Index", value: "42.0%", trend: "15-Min Park Access for All", detail: "Riverfront ecological restoration" }
    ]
  },

  transportation: [
    {
      name: "Blue Line Metro Corridor",
      mode: "Metro",
      status: "On Time",
      statusClass: "status-open",
      route: "North Tech Park ↔ Central Station ↔ Airport Terminal",
      frequency: "Every 4 mins (Peak) / 7 mins (Off-Peak)",
      fare: "₹15 – ₹55 (Smart Card / NFC)"
    },
    {
      name: "Green Line Riverfront Metro",
      mode: "Metro",
      status: "On Time",
      statusClass: "status-open",
      route: "East Green Belt ↔ Civic Center ↔ South University",
      frequency: "Every 5 mins",
      fare: "₹15 – ₹50 (Smart Card / QR)"
    },
    {
      name: "Route E-101 Electric Express",
      mode: "Bus",
      status: "Active • 42 Buses",
      statusClass: "status-open",
      route: "Outer Ring Road Circular Loop",
      frequency: "Every 8 mins",
      fare: "₹10 – ₹30 (Zero-Emission AC)"
    },
    {
      name: "Central Plaza Fast EV Hub",
      mode: "EV",
      status: "18 / 24 Bays Free",
      statusClass: "status-open",
      route: "Sector 1, Underground Parking Level B1",
      frequency: "150 kW DC Superchargers",
      fare: "₹14.50 / kWh • 24/7 Access"
    },
    {
      name: "Aurelia CycleShare Docks",
      mode: "Bike",
      status: "1,420 E-Bikes Ready",
      statusClass: "status-open",
      route: "120 Docking Stations at All Metro Exits",
      frequency: "Instant App Unlock",
      fare: "First 30 mins Free • ₹10/hr after"
    },
    {
      name: "West Corridor BRT Feeder",
      mode: "Bus",
      status: "Moderate Traffic",
      statusClass: "status-busy",
      route: "West Transit Hub ↔ Industrial District",
      frequency: "Every 10 mins",
      fare: "₹10 – ₹25"
    }
  ],

  hospitals: [
    {
      name: "Aurelia General & Trauma Institute",
      type: "Trauma",
      status: "24/7 Emergency Open",
      statusClass: "status-open",
      beds: "42 General • 14 ICU Beds Available",
      specialties: "Level-1 Trauma, Cardiology, Neurology, Burn Unit",
      contact: "+91 866-240-1100 • Sector 2"
    },
    {
      name: "St. Jude Smart Multi-Specialty Hospital",
      type: "Multi-Specialty",
      status: "24/7 Emergency Open",
      statusClass: "status-open",
      beds: "28 General • 9 ICU Beds Available",
      specialties: "Oncology, Pediatrics, Robotic Surgery, Orthopedics",
      contact: "+91 866-240-2200 • North Tech District"
    },
    {
      name: "Riverfront Maternal & Child Care Center",
      type: "Multi-Specialty",
      status: "High Occupancy",
      statusClass: "status-busy",
      beds: "11 Maternity • 6 NICU Beds Available",
      specialties: "Obstetrics, Neonatology, Pediatric Emergency",
      contact: "+91 866-240-3300 • East Green Belt"
    },
    {
      name: "Urban Primary Health & Telemedicine Clinic",
      type: "Public",
      status: "Open • 08:00–22:00",
      statusClass: "status-open",
      beds: "Outpatient & Free Diagnostics",
      specialties: "General Medicine, Vaccinations, Free Pharmacy",
      contact: "+91 866-240-4400 • West Corridor"
    }
  ],

  education: [
    {
      name: "Aurelia Institute of Technology & AI",
      category: "University",
      status: "Admissions Open",
      description: "Premier public research university specializing in Urban Informatics, Robotics, Clean Energy, and Data Science.",
      stats: "14,500 Students • NIRF Top 15 • Smart Campus"
    },
    {
      name: "National University of Health & Life Sciences",
      category: "University",
      status: "Academic Session Active",
      description: "Integrated medical university attached to the 1,200-bed teaching hospital and biomedical research park.",
      stats: "6,200 Students • Simulation Labs"
    },
    {
      name: "Municipal Digital Model High School (18 Campuses)",
      category: "School",
      status: "K–12 Smart Classrooms",
      description: "Interactive STEM labs, solar-powered campuses, midday nutrition program, and bilingual digital curriculum.",
      stats: "100% Smart Boards • Free Digital Tablets"
    },
    {
      name: "Central Civic E-Library & Makerspace",
      category: "Library",
      status: "Open 07:00 – 23:00",
      description: "250,000+ physical volumes, 1.2M digital journals, 3D printing fabrication lab, and silent study pods.",
      stats: "Free Citizen Membership • 1 Gbps Wi-Fi"
    }
  ],

  services: [
    {
      title: "Smart Property Tax & Utility Billing",
      department: "Revenue & Finance",
      sla: "Instant Receipt",
      description: "Pay water, electricity, and property taxes online with automated rebates for rooftop solar and rainwater harvesting."
    },
    {
      title: "Digital Birth, Death & Marriage Certificates",
      department: "Civil Registry",
      sla: "24 Hours SLA",
      description: "Blockchain-verified downloadable certificates issued directly to citizen digital lockers."
    },
    {
      title: "Automated Building Plan Approval",
      department: "Town Planning",
      sla: "7 Working Days",
      description: "AI-assisted CAD rule verification for residential and commercial construction permits."
    },
    {
      title: "Doorstep Smart Waste & E-Waste Pickup",
      department: "Sanitation & Environment",
      sla: "Same-Day Slot",
      description: "Schedule bulk garden waste, construction debris, or certified electronic waste collection."
    }
  ],

  emergency: [
    {
      title: "Unified Emergency Command (Police / Fire / Medical)",
      number: "112",
      response: "Avg. Dispatch Time: 4 mins 20 secs",
      details: "GPS-enabled automatic caller location with multi-language support."
    },
    {
      title: "Ambulance & Mobile ICU Fleet",
      number: "108",
      response: "48 GPS-Tracked ALS Ambulances",
      details: "Green-corridor traffic signal preemption enabled for critical patients."
    },
    {
      title: "Fire, Rescue & HazMat Response",
      number: "101",
      response: "9 Fire Stations City-Wide",
      details: "Equipped with aerial hydraulic platforms and drone thermal imaging."
    },
    {
      title: "Disaster Management & Flood Shelter Control",
      number: "1077",
      response: "24 Community Cyclone/Flood Shelters",
      details: "Real-time river level sensors and early SMS siren alerts."
    }
  ],

  locations: [
    {
      id: "city-hall",
      name: "Aurelia Central Command & City Hall",
      category: "Government",
      x: 52,
      y: 48,
      description: "Unified municipal headquarters housing citizen facilitation counters, IoT urban telemetry operations, and the Mayor's office.",
      address: "100 Civic Plaza, Central District",
      hours: "Mon–Sat, 08:30 AM – 06:30 PM",
      coords: "16.5442° N, 80.6821° E"
    },
    {
      id: "tech-park",
      name: "Aurelia Innovation & AI Tech Park",
      category: "Tech Hub",
      x: 24,
      y: 24,
      description: "Special economic zone hosting 180+ technology firms, startup incubators, and the Municipal Open Data Center.",
      address: "Plot 12, North Tech District",
      hours: "24/7 Campus Access",
      coords: "16.5610° N, 80.6690° E"
    },
    {
      id: "botanical-park",
      name: "Riverfront Botanical & Solar Park",
      category: "Culture",
      x: 76,
      y: 30,
      description: "140-acre ecological park featuring solar canopy walkways, amphitheater, cycling tracks, and rainwater wetlands.",
      address: "East Green Belt, River Promenade",
      hours: "Daily, 05:00 AM – 10:00 PM",
      coords: "16.5525° N, 80.7012° E"
    },
    {
      id: "central-station",
      name: "Multi-Modal Central Transit Terminal",
      category: "Transport",
      x: 32,
      y: 72,
      description: "Integrated interchange connecting Blue & Green Metro lines, intercity rail, electric buses, and EV charging plazas.",
      address: "West Transit Corridor, Gate 1",
      hours: "24/7 Operations",
      coords: "16.5318° N, 80.6744° E"
    },
    {
      id: "civic-museum",
      name: "Aurelia Heritage Museum & Science Center",
      category: "Culture",
      x: 72,
      y: 74,
      description: "Interactive planetarium, regional history galleries, and weekend public science exhibitions.",
      address: "45 Cultural Boulevard, South Civic Center",
      hours: "Tue–Sun, 10:00 AM – 07:00 PM",
      coords: "16.5290° N, 80.6950° E"
    }
  ]
};
