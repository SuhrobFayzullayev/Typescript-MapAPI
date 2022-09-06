import { faker } from "@faker-js/faker";
import { Mapable } from "./CustomMap";


class User implements Mapable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()), // obj ozgartirishda obj ozi ochilib key : ozgargan data beriladi paesedloatga orashdan maqsad faker address lat, lng string qaytaryapti bizesa uni parsefloatga orab number type qaytaryapmiz bunday qilinmasa hato boladi
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
    <h1>
      User name : ${this.name}
    </h1>
    `;
  }
}

export default User;
