(function () {
  "use strict";

  const routes = [
    { from: "ABX", to: "SYD", status: "past" },
    { from: "SYD", to: "SIN", status: "past" },
    { from: "SIN", to: "HKT", status: "past" },
    { from: "HKT", to: "SIN", status: "past" },
    { from: "SIN", to: "SYD", status: "past" },
    { from: "MEL", to: "SIN", status: "past" },
    { from: "SIN", to: "SGN", status: "past" },
    { from: "SGN", to: "DAD", status: "past" },
    { from: "DAD", to: "DMK", status: "past" },
    { from: "CNX", to: "BKK", status: "past" },
    { from: "BKK", to: "HKT", status: "past" },
    { from: "HKT", to: "MEL", status: "past" },
    { from: "CBR", to: "OOL", status: "past" },
    { from: "OOL", to: "SYD", status: "past" },
    { from: "SYD", to: "SIN", status: "past" },
    { from: "SIN", to: "SYD", status: "past" },
    { from: "SYD", to: "CNS", status: "past" },
    { from: "CNS", to: "NRT", status: "past" },
    { from: "NRT", to: "ICN", status: "past" },
    { from: "ICN", to: "KIX", status: "past" },
    { from: "ITM", to: "HND", status: "past" },
    { from: "NRT", to: "CNS", status: "past" },
    { from: "CNS", to: "SYD", status: "past" },
    { from: "CBR", to: "MEL", status: "past" },
    { from: "SYD", to: "CHC", status: "past" },
    { from: "CHC", to: "SYD", status: "past" },
    { from: "SYD", to: "CBR", status: "past" },
    { from: "SYD", to: "SGN", status: "past" },
    { from: "SGN", to: "DAD", status: "past" },
    { from: "DAD", to: "HAN", status: "past" },
    { from: "HAN", to: "CNX", status: "past" },
    { from: "CNX", to: "HKT", status: "past" },
    { from: "HKT", to: "SIN", status: "past" },
    { from: "SIN", to: "SYD", status: "past" },
    { from: "SYD", to: "DPS", status: "past" },
    { from: "DPS", to: "SYD", status: "past" },
    { from: "SYD", to: "CHC", status: "past" },
    { from: "CHC", to: "SYD", status: "past" },
    { from: "CBR", to: "MEL", status: "past" },
    { from: "MEL", to: "DXB", status: "past" },
    { from: "DXB", to: "LGW", status: "past" },
    { from: "LGW", to: "KEF", status: "past" },
    { from: "KEF", to: "BER", status: "past" },
    { from: "PRG", to: "KRK", status: "past" },
    { from: "KRK", to: "AMS", status: "past" },
    { from: "AMS", to: "ZRH", status: "past" },
    { from: "ORY", to: "BCN", status: "past" },
    { from: "BCN", to: "DXB", status: "past" },
    { from: "DXB", to: "SIN", status: "past" },
    { from: "SIN", to: "MEL", status: "past" },
    { from: "MEL", to: "CBR", status: "past" },

    { from: "SYD", to: "CHC", status: "future" },
    { from: "ZQN", to: "SYD", status: "future" },
    { from: "CBR", to: "MEL", status: "future" },
    { from: "MEL", to: "HKG", status: "future" },
    { from: "CKG", to: "SZX", status: "future" },
    { from: "HKG", to: "CEB", status: "future" },
    { from: "CEB", to: "CYP", status: "future" },
    { from: "CEB", to: "ENI", status: "future" },
    { from: "ENI", to: "CRK", status: "future" },
    { from: "MNL", to: "DMK", status: "future" },
    { from: "DMK", to: "SAI", status: "future" },
    { from: "SAI", to: "SGN", status: "future" },
    { from: "SGN", to: "SYD", status: "future" }
  ];

  const airports = {
    ABX: { coords: [-36.0678, 146.9582], city: "Albury", country: "Australia", trip: "australia" },
    CBR: { coords: [-35.3075, 149.1950], city: "Canberra", country: "Australia", trip: "australia" },
    SYD: { coords: [-33.9399, 151.1753], city: "Sydney", country: "Australia", trip: "australia" },
    MEL: { coords: [-37.6733, 144.8433], city: "Melbourne", country: "Australia", trip: "australia" },
    CNS: { coords: [-16.8858, 145.7553], city: "Cairns", country: "Australia", trip: "australia" },
    OOL: { coords: [-28.1644, 153.5047], city: "Gold Coast", country: "Australia", trip: "australia" },

    SIN: { coords: [1.3644, 103.9915], city: "Singapore", country: "Singapore", trip: "singapore-stopover" },

    HKT: { coords: [8.1132, 98.3169], city: "Phuket", country: "Thailand", trip: "thailand" },
    BKK: { coords: [13.6900, 100.7501], city: "Bangkok", country: "Thailand", trip: "thailand" },
    DMK: { coords: [13.9126, 100.6067], city: "Bangkok", country: "Thailand", trip: "thailand" },
    CNX: { coords: [18.7668, 98.9626], city: "Chiang Mai", country: "Thailand", trip: "thailand" },

    SGN: { coords: [10.8188, 106.6519], city: "Ho Chi Minh City", country: "Vietnam", trip: "vietnam" },
    DAD: { coords: [16.0439, 108.1990], city: "Da Nang", country: "Vietnam", trip: "vietnam" },
    HAN: { coords: [21.2212, 105.8072], city: "Hanoi", country: "Vietnam", trip: "vietnam" },

    DPS: { coords: [-8.7482, 115.1670], city: "Bali", country: "Indonesia", trip: "bali" },

    CHC: { coords: [-43.4894, 172.5322], city: "Christchurch", country: "New Zealand", trip: "new-zealand" },
    ZQN: { coords: [-45.0211, 168.7391], city: "Queenstown", country: "New Zealand", trip: "new-zealand" },

    NRT: { coords: [35.7719, 140.3929], city: "Tokyo", country: "Japan", trip: "japan" },
    HND: { coords: [35.5494, 139.7798], city: "Tokyo", country: "Japan", trip: "japan" },
    KIX: { coords: [34.4347, 135.2440], city: "Osaka", country: "Japan", trip: "japan" },
    ITM: { coords: [34.7855, 135.4382], city: "Osaka", country: "Japan", trip: "japan" },

    ICN: { coords: [37.4602, 126.4407], city: "Seoul", country: "South Korea", trip: "japan" },

    DXB: { coords: [25.2532, 55.3657], city: "Dubai", country: "United Arab Emirates", trip: "europe" },
    LGW: { coords: [51.1537, -0.1821], city: "London", country: "United Kingdom", trip: "europe" },
    KEF: { coords: [63.9850, -22.6056], city: "Reykjavik", country: "Iceland", trip: "europe" },
    BER: { coords: [52.3667, 13.5033], city: "Berlin", country: "Germany", trip: "europe" },
    PRG: { coords: [50.1008, 14.2632], city: "Prague", country: "Czech Republic", trip: "europe" },
    KRK: { coords: [50.0777, 19.7848], city: "Krakow", country: "Poland", trip: "europe" },
    AMS: { coords: [52.3105, 4.7683], city: "Amsterdam", country: "Netherlands", trip: "europe" },
    ZRH: { coords: [47.4647, 8.5492], city: "Zurich", country: "Switzerland", trip: "europe" },
    ORY: { coords: [48.7262, 2.3652], city: "Paris", country: "France", trip: "europe" },
    BCN: { coords: [41.2974, 2.0833], city: "Barcelona", country: "Spain", trip: "europe" },

    HKG: { coords: [22.3080, 113.9185], city: "Hong Kong", country: "Hong Kong", trip: "asia-2026" },
    CKG: { coords: [29.7192, 106.6417], city: "Chongqing", country: "China", trip: "china-2026" },
    SZX: { coords: [22.6393, 113.8107], city: "Shenzhen", country: "China", trip: "china-2026" },

    MNL: { coords: [14.5086, 121.0198], city: "Manila", country: "Philippines", trip: "philippines-2026" },
    CEB: { coords: [10.3075, 123.9794], city: "Cebu", country: "Philippines", trip: "philippines-2026" },
    CYP: { coords: [12.0722, 124.5456], city: "Calbayog", country: "Philippines", trip: "philippines-2026" },
    ENI: { coords: [11.2022, 119.4167], city: "El Nido", country: "Philippines", trip: "philippines-2026" },
    CRK: { coords: [15.1860, 120.5596], city: "Clark", country: "Philippines", trip: "philippines-2026" },

    SAI: { coords: [13.4107, 103.8130], city: "Siem Reap", country: "Cambodia", trip: "cambodia-2026" }
  };

  function setStatus(msg) {
    const el = document.getElementById("map-status");
    if (el) el.textContent = msg || "";
  }

  function unsplashThumb(query) {
    return `https://source.unsplash.com/400x300/?${encodeURIComponent(query)}`;
  }

  document.addEventListener("DOMContentLoaded", function () {
    const mapEl = document.getElementById("travel-map");
    if (!mapEl) return;

    if (typeof L === "undefined") {
      setStatus("Map failed to load (Leaflet missing).");
      return;
    }

    const map = L.map("travel-map", {
      zoomControl: true,
      worldCopyJump: true,
      scrollWheelZoom: false
    });

    // Ensure dblclick is reserved for “open trip”
    map.doubleClickZoom.disable();

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      maxZoom: 18,
      attribution: "&copy; OpenStreetMap contributors &copy; CARTO"
    }).addTo(map);

    const pastColour = "rgba(63,84,104,0.80)";
    const futureColour = "rgba(158,111,118,0.85)";

    routes.forEach(({ from, to, status }) => {
      const a = airports[from];
      const b = airports[to];
      if (!a || !b) return;

      const style =
        status === "future"
          ? { color: futureColour, weight: 2.75, opacity: 0.85, dashArray: "6 6" }
          : { color: pastColour, weight: 2.25, opacity: 0.70 };

      L.polyline([a.coords, b.coords], style).addTo(map);
    });

    Object.entries(airports).forEach(([code, data]) => {
      const marker = L.circleMarker(data.coords, {
        radius: 5,
        weight: 2,
        color: "rgba(35,40,45,0.85)",
        fillColor: "rgba(255,255,255,0.95)",
        fillOpacity: 0.95
      }).addTo(map);

      const img = unsplashThumb(data.city);

      const tooltipHtml =
        `<div class="thumb-card">
          <img src="${img}" alt="${data.city}" loading="lazy" decoding="async" />
          <div class="meta">
            <strong>${data.city}</strong>
            <span>${data.country}</span>
            <span>Trip Report</span>
          </div>
        </div>`;

      marker.bindTooltip(tooltipHtml, {
        className: "thumb-tooltip",
        direction: "top",
        offset: [0, -10],
        opacity: 1,
        sticky: true
      });

      marker.on("dblclick", function (e) {
        if (e && e.originalEvent) e.originalEvent.preventDefault();
        window.location.href = `travel/${data.trip}.html`;
      });
    });

    const bounds = Object.values(airports).map(a => a.coords);
    if (bounds.length > 1) map.fitBounds(bounds, { padding: [30, 30] });
    else map.setView([20, 0], 2);

    const pastCount = routes.filter(r => r.status === "past").length;
    const futureCount = routes.filter(r => r.status === "future").length;
    setStatus(`Flights loaded: ${pastCount} past, ${futureCount} upcoming.`);
  });
})();