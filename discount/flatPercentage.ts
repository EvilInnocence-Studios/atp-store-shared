import { prop } from "ts-functional";
import { IDiscount, IDiscountCalculator } from "./types";
import { IPermission } from "../../uac-shared/permissions/types";

export const FlatPercentageProductDiscount = (percentage: number, permissionId:number | null, userPermissions: IPermission[]):IDiscountCalculator => ({
    productSalePrice: (product, price) =>
        (!permissionId || userPermissions.map(prop("id")).includes(permissionId)) && !product.brokeredAt
            ? price * (1 - percentage)
            : price,
    cartDiscount: (_products, _subtotal) => 0.0,
});

export const FlatPercentageCartDiscount = (percentage: number, permissionId: number | null, userPermissions: IPermission[]):IDiscountCalculator => ({
    productSalePrice: (_product, price) => price,
    cartDiscount: (_products, subtotal) => 
        !permissionId || userPermissions.map(prop("id")).includes(permissionId)
            ? subtotal * percentage
            : 0.0,
});

export const getCalculator = (discount:IDiscount, userPermissions:IPermission[]):IDiscountCalculator => 
    discount.type === "product"
        ? FlatPercentageProductDiscount(discount.amount, discount.permissionId, userPermissions)
        : FlatPercentageCartDiscount(discount.amount, discount.permissionId, userPermissions);
