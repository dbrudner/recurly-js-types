import { PricingInstance } from '.';
import Address from '../address';
import PricingPromise from "./promise";

type Tax = {
    tax_code: string;
    vat_number: string;
    amounts: {
        now: string;
        next: string;
    };
};

type PlanOptions = {
    quantity?: number;
}

type AddonOptions = {
    quantity?: number;
}

export type SubscriptionPricingState = {
    price: {
        now: {
            subtotal: string;
            plan: string;
            addons: string;
            setup_fee: string;
            discount: string;
            tax: string;
            total: string;
        };
        next: {
            subtotal: string;
            plan: string;
            addons: string;
            setup_fee: string;
            discount: string;
            tax: string;
            total: string;
        };
        base: {
            plan: {
                unit: string;
                setup_fee: string;
            };
            addons: {
                addon: string;
            };
        };
        addons: {
            addon: string;
        };
        currency: {
            code: string;
            symbol: string;
        };
        taxes: any[]; // not sure what this type should be
    };
};

export interface SubscriptionPricingInstance extends PricingInstance<SubscriptionPricingPromise> {
    attach: (element: string | HTMLElement) => void;
    addon: (addonCode: string, addonOptions?: AddonOptions) => SubscriptionPricingPromise;
    address: (address: Address) => SubscriptionPricingPromise;
    coupon: (coupon: string) => SubscriptionPricingPromise;
    currency: (currency: string) => SubscriptionPricingPromise;
    giftcard: (giftcard: string) => SubscriptionPricingPromise;
    plan: (plan: string, planOptions?: PlanOptions) => SubscriptionPricingPromise;
    shippingAddress: (address: Address) => SubscriptionPricingPromise;
    tax: (tax: Tax) => SubscriptionPricingPromise;
}

interface SubscriptionPricingPromise extends SubscriptionPricingInstance, PricingPromise<SubscriptionPricingState, SubscriptionPricingInstance> {}

type SubscriptionPricing = () => SubscriptionPricingInstance;

export default SubscriptionPricing;
