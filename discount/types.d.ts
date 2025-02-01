import { IPermission } from "../../uac-shared/permissions/types";
import { IProduct } from "../product/types";

export declare interface IDiscountCalculator {
    name: string;
    // For discounts that only depend on a single product
    // The function should return the new price based on the product and current discounted price
    productSalePrice: (product:IProduct, price: number) => number;

    // For discounts that depend on the entire cart, such as BOGO or percentage off the entire cart
    // The function should return the new discount based on the product, undiscounted subtotal, and current discount
    cartDiscount: (products:IProduct[], subtotal: number, discount: number) => number;
}

export declare interface IDiscount {
    id: number;
    name: string;
    type: "product" | "cart";
    amount: number;
    couponCode: string;
    permissionId: number | null;
}

export type NewDiscount = Omit<IDiscount, "id">;