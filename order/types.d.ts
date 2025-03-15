import { IProductFile } from "@store-shared/product/types";

export declare interface IOrder {
    id: string;
    userId: string;
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
    id: string;
    orderId: string;
    productId: string;
    quantity: number;
}

export declare interface IOrderFull extends IOrder {
    items: IProduct[];
    files: IProductFile[];
}

export declare interface IWishlistItem {
    id: string;
    userId: string;
    productId: string;
}

export declare interface IOrderCreateRequest {
    ids: string[];
    couponCode: string;
}

export declare interface ICartTotals {
    subtotal: number;
    discount: number;
    total: number;
}
