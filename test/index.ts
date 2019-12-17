import elements from './elements';
import subscriptionPricing from './pricing/checkout';
import paypal from './paypal';
import adyen from './adyen';
import threeDSecure from './3d-secure';
import applePay from './apple-pay';
import giftCard from './gift-card';
import bankAccount from './bank-account';

threeDSecure();
adyen();
applePay();
elements();
giftCard();
paypal();
subscriptionPricing();
bankAccount();
