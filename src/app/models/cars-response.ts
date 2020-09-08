export interface CarsResultResponse {
  car: CarInformation;
  priceInformation: PriceInformation;
}

interface CarInformation {
  model: string;
  fuelType: string;
  gear: string;
  make: string;
  year: string;
  seats: string;
  reviewAvg: string;
  reviewCount: string;
}

interface PriceInformation {
  price: string;
  freeKilometersPerDay: string;
}
