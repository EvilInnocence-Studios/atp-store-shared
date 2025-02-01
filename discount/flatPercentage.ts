import { prop } from "ts-functional";
import { IDiscount, IDiscountCalculator } from "./types";
import { IPermission } from "../../uac-shared/permissions/types";
import { debugPort } from "process";

export const FlatPercentageProductDiscount = (percentage: number, permissionId:number | null, userPermissions: IPermission[]):IDiscountCalculator => ({
    name: "FlatPercentageProductDiscount",
    productSalePrice: (product, price) =>
        (!permissionId || userPermissions.map(prop("id")).includes(permissionId)) && !product.brokeredAt
            ? price * (1 - percentage)
            : price,
    cartDiscount: (_products, _subtotal, _discount) => 0.0,
});

export const FlatPercentageCartDiscount = (percentage: number, permissionId: number | null, userPermissions: IPermission[]):IDiscountCalculator => ({
    name: "FlatPercentageCartDiscount",
    productSalePrice: (_product, _price) => 0.0,
    cartDiscount: (_products, subtotal, discount) => {
        return !permissionId || userPermissions.map(prop("id")).includes(permissionId)
            ? discount + (subtotal - discount) * percentage
            : discount;
    },
});

export const getCalculator = (discount:IDiscount, userPermissions:IPermission[]):IDiscountCalculator => 
    discount.type === "product"
        ? FlatPercentageProductDiscount(discount.amount, discount.permissionId, userPermissions)
        : FlatPercentageCartDiscount(discount.amount, discount.permissionId, userPermissions);
