

enum ParkingSpaceApplicationCategory {
    internal = 0,
    external = 1,
}

enum ParkingSpaceType {
    WarmGarage,
    ColdGarage,
    ThermalGarage,
    CentralGarage,
    MotorcycleGarage,
    ParkingSpaceWithoutElectricity,
    ParkingSpaceWithElectricity,
    CaravanParkingSpace,
    MotorcycleParkingSpace,
    ParkingDeck,
    Carport,
    Garage,
    ColdGarageWithElectricity,
    CollectiveParkingSpace,
    FreeParkingSpace,
    ParkingSpaceWithElectricityWEBEL,
    VisitorParkingSpace,
    CentralFacilityParkingSpace,
    DisabledParkingPlace,
    ParkingSpaceWithChargingBox,
    CarportWithChargingBox,
}

interface Address {
    street: string
    number: string
    postalCode: string
    city: string
}

interface Rent {
    rentId?: string
    leaseId?: string
    currentRent: number
    vat: number
    additionalChargeDescription: string | undefined
    additionalChargeAmount: number | undefined
    rentStartDate: Date | undefined
    rentEndDate: Date | undefined
}

interface RentInfo {
    currentRent: Rent
    futureRents: Array<Rent> | undefined
}

interface XpandParkingSpace {
    parkingSpaceId: string
    address: Address
    rent: RentInfo
    rentalObjectTypeCaption: string
    rentalObjectTypeCode: string 
    objectTypeCaption: string 
    objectTypeCode: string
    freeTable1Caption: string
    freeTable1Code: string
    freeTable3Caption: string
    freeTable3Code: string
    publishedFrom: Date
    publishedTo: Date
    vacantFrom: Date
    type: ParkingSpaceType
    applicationCategory: ParkingSpaceApplicationCategory
    waitingListType: string
}

export { 
    ParkingSpaceApplicationCategory, 
    ParkingSpaceType, 
    Address, 
    Rent, 
    RentInfo, 
    XpandParkingSpace 
}