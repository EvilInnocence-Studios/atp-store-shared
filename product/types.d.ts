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

export declare interface IProductFile {
    id: number;
    productId: number;
    fileName: string;
    folder: string;
}

export declare interface IOrder {
    id: number;
    userId: number;
    total: number;
    subtotal: number;
    discount: number;
    status: "pending" | "complete";
    transactionId: string | null;
    couponCode: string;
    createdAt: string;
}

export type NewOrder = Partial<NewObj<IOrder>>;

export declare interface IOrderItem {
    id: number;
    orderId: number;
    productId: number;
    quantity: number;
}

export declare interface IOrderFull extends IOrder {
    items: IProduct[];
    files: IProductFile[];
}

export declare interface IWishlistItem {
    id: number;
    userId: number;
    productId: number;
}

export declare interface IOrderCreateRequest {
    ids: number[];
    couponCode: string;
}