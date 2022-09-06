// tsda export qilishda export foydalanish kerak export default professional emas
const map = document.getElementById("map") as HTMLElement;

export interface Mapable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string
}

export class CustomMap {
  googleMap: google.maps.Map;

  constructor() {
    this.googleMap = new google.maps.Map(map, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
      clickableIcons: true,
      fullscreenControl: true,
    });
  }

  addMarker(param: Mapable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: param.location.lat,
        lng: param.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: param.markerContent(),
      });

      infoWindow.open(this.googleMap, marker)
    });
  }
}
