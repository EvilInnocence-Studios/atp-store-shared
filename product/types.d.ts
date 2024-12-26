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
    thumbnailId: number | null;
    mainImageId: number | null;
}

export declare interface IProductFull extends IProduct {
    tags: string[];
    thumbnailUrl: string;
}

export type NewProduct = Partial<NewObj<IProduct>>;

export declare interface IProductMedia {
    id: number;
    productId: number;
    url: string;
    caption: string;
    order: number;
}