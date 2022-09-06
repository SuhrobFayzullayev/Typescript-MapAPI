import { faker } from "@faker-js/faker";
import { Mapable } from "./CustomMap";

export default class Company implements Mapable { // implements importdan kelayotgan malumot bilan bogliq hatolarni aniqlaydi togri bolsa hato chiqmaydi
  companyName: string;
  companyPhrese: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.companyPhrese = faker.company.catchPhrase();

    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
    <h1>
      Company name : ${this.companyName}
    </h1>
    <h3>
    Company Phrese : ${this.companyPhrese}
    </h3>
    </div>
    
    `;
  }
}
