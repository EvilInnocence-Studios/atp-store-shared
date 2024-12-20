import { NewObj } from "../../core-shared/express/types";

export declare interface IProduct {
    id: number;
    name: string;
    sku: string;
    url: string;
    description: string;
    descriptionShort: string;
    productType: "digital" | "grouped";
    subscriptionOnly: boolean;
    releaseDate: string;
    brokeredAt: string | null;
    brokerageProductId: string | null;
    price: number;
    enabled: boolean;
    metaTitle: string | null;
    metaDescription: string | null;
    metaKeywords: string | null;
    thumbnail: string | null;
    thumbnailCaption: string | null;
}

export type NewProduct = Partial<NewObj<IProduct>>;