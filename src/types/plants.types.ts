export interface Plant {
    _id: string;
    name: string;
    description: string;
    size: "small" | "medium" | "large" | "extra-large";
    dimensions: Dimension;
    price: number;
    sku: string;
    images: string[];
    createdAt?: string;
    updatedAt?: string;
    type: string;
    lightExposure: string;
    idealLocation: string;
    maintenance: string;
    watering: string;
    tags: string[];
}


export interface Dimension {
    length: number;
    width: number;
    height: number;
}


export interface PlantsReponse {
    data: Plant[],
    page: string,
    limit: string,
    total: string
}





export enum PlantType {
    AIR = 'Air Plant',
    CACTI_SUCCELENTS = 'Cacti & Succulent',
    CLIMBER = 'Cliber',
    CREEPER_GROUNDCOVERS = 'Creepers/Groundcoveres',
    FLOWERING = 'Flowering Plants',
    FOCAL = 'Focal Plants',
    FRUIT = 'Fruit Plants',
    HANGING = 'Hanging Plants',
    HEDGE = 'Hedge Plants',
    MEDICINAL = 'Medicinal Plants',
    MOSS_STICK = 'Moss Stick Plants',
    SCRUB = 'Scrub Plants'
}


export enum PlantLightExporeType {
    BRIGHT_INDIRECT = 'Bright Indirect Light',
    BRIGHT_DIRECT = 'Bright Direct Light',
    LOW_LIGHT = 'Low Light'
}

export enum PlantIdealLocationType {
    OFFICE_DESK = 'Office Desk Plant',
    OFFICE_PREMISES = 'Office Premises Plants',
    LIVING_ROOM_FLOOR = 'Living Room Floor',
    LIVING_ROOM_TABLE = 'Living Room Table',
    SHADED_BALCONY = 'Shaded Balconies',
    SUNNY_BALCONY = 'Sunny Balconies'
}


export enum PlantMaintenanceType {
    HIGH = 'High Maintainance',
    LOW = 'Low Maintainance',
    MEDIUM = 'Medium Maintainace',
}


export enum PlantWateringType {
    EVERY_DAY = 'Once a day',
    ALTERNATE_DAY = 'Once in Two Days',
    EVERY_WEEK = 'Once in a Week',
    TWICE_EVERY_WEEK = 'Twice in a Week',
}

export enum PlantTagsType {
    NEW_ARRIVAL = 'New Arrivals',
    MOST_POPULAR = 'Most Popular',
    TOP_INDOOR = 'Top Indoor',
}