import { IPermission } from "../../uac-shared/permissions/types";
import { IProduct } from "../product/types";

// Note: we pass the current price to these functions, so that discounts can be combined,
export declare interface IDiscountCalculator {
    // For discounts that only depend on a single product
    productSalePrice: (product:IProduct, price: number) => number;

    // For discounts that depend on the entire cart, such as BOGO or percentage off the entire cart
    cartDiscount: (products:IProduct[], subtotal: number) => number;
}

export declare interface IDiscount {
    id: number;
    name: string;
    type: "product" | "cart";
    amount: number;
    couponCode: string;
    permissionId: number | null;
}
