import { NewObj } from "../../core-shared/express/types";

export declare interface IProduct {
    id: string;
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
    thumbnailId: string | null;
    mainImageId: string | null;
}

export declare interface IProductFull extends IProduct {
    tags: string[];
    thumbnailUrl: string;
}

export type NewProduct = Partial<NewObj<IProduct>>;

export declare interface IProductMedia {
    id: string;
    productId: string;
    url: string;
    caption: string;
    order: number;
}

export declare interface IProductFile {
    id: string;
    productId: string;
    fileName: string;
    folder: string;
}
