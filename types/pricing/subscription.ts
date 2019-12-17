import { PricingInstance } from '.';
import Address from '../address';
import PricingPromise from './promise';

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
};

type AddonOptions = {
    quantity?: number;
};

type SubscriptionPricingStateTax = {
    tax_type: string;
    region: string;
    rate: string;
};

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
                [addon: string]: string;
            };
        };
        addons: {
            [addon: string]: string;
        };
        currency: {
            code: string;
            symbol: string;
        };
        taxes: SubscriptionPricingStateTax[];
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

interface SubscriptionPricingPromise
    extends SubscriptionPricingInstance,
        PricingPromise<SubscriptionPricingState, Omit<SubscriptionPricingInstance, 'attach'>> {}

type SubscriptionPricing = () => SubscriptionPricingInstance;

export default SubscriptionPricing;
