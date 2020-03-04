import { PricingInstance } from '.';
import Address from '../address';
import PricingPromise from './promise';
import { SubscriptionPricingState } from './subscription';

type ItemAdjustment = {
    itemCode: string;
    quantity: number;
    currency?: string;
    id?: string;
}

type NonItemAdjustment = {
    amount: number;
    quantity: number;
    currency?: string;
    taxExempt: boolean;
    taxCode: string;
    id?: string;
}

type Adjustment = ItemAdjustment | NonItemAdjustment;

type Tax = {
    tax_code: string;
    vat_number: string;
    amounts: {
        now: string;
        next: string;
    };
};

type Item = {
    type: string;
    id: string;
    amount: string;
    setupFee: string;
    addons: string;
    plan: string;
};

type CheckoutPricingState = {
    price: {
        now: {
            items: Item[]
            subscriptions: string;
            adjustments: string;
            discount: string;
            subtotal: string;
            taxes: string;
            giftCard: string;
            total: string;
        };
        next: {
            items: Item[]
            subscriptions: string;
            adjustments: string;
            discount: string;
            subtotal: string;
            taxes: string;
            giftCard: string;
            total: string;
        };
        currency: {
            code: string;
            symbol: string;
        };
        taxes: any[] // not sure what this type should be
    };
};

export interface CheckoutPricingInstance extends PricingInstance<CheckoutPricingPromise> {
    attach: (element: string | HTMLElement) => void;
    address: (address: Address) => CheckoutPricingPromise;
    adjustment: (adjustment: Adjustment) => CheckoutPricingPromise;
    coupon: (coupon: string) => CheckoutPricingPromise;
    currency: (currency: string) => CheckoutPricingPromise;
    giftCard: (giftcard: string) => CheckoutPricingPromise;
    shippingAddress: (address: Address) => CheckoutPricingPromise;
    tax: (tax: Tax) => CheckoutPricingPromise;
    subscription: (subscriptionPricing: SubscriptionPricingState | void) => CheckoutPricingPromise;
}

export interface CheckoutPricingPromise extends CheckoutPricingInstance, PricingPromise<CheckoutPricingState, CheckoutPricingInstance> {}

type CheckoutPricing = () => CheckoutPricingInstance;

export default CheckoutPricing;
