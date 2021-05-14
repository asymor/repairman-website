import L from "leaflet";

export const leafletMap = function () {
  const map = L.map("map").setView([56.095061, 54.263811], 13);
  const [btnDOM, btnMap, overlay] = [
    document.querySelector(".map__container"),
    document.querySelector(".map__button"),
    document.querySelector(".overlay"),
  ];
  btnMap.addEventListener("click", function () {
    btnDOM.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
  overlay.addEventListener("click", function () {
    btnDOM.classList.add("hidden");
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.Icon.Default.imagePath = "/";
  let greenIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png",

    iconSize: [40, 75], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [10, 70], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [10, -70], // point from which the popup should open relative to the iconAnchor
  });

  L.marker([56.095061, 54.263811], { icon: greenIcon })
    .addTo(map)
    .bindPopup("Our office")
    .openPopup();
};
