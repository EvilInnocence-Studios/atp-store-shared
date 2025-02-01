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

export declare interface ICartTotals {
    subtotal: number;
    discount: number;
    total: number;
}
