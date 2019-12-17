export default function subscriptionPricing() {
    const checkoutPricing = window.recurly.Pricing.Checkout();

    checkoutPricing
        .adjustment({
            id: '0',
            amount: 10.0,
            quantity: 1,
            taxExempt: true,
            taxCode: 'my-tax-code',
        })
        .then(x => x)
        .catch(console.log)
        .coupon('my-coupon-code')
        .giftCard('my-gift-card-code')
        .address({
            country: 'US',
            postal_code: '90210',
            first_name: "hey",
            last_name: "hey"
        })
        .tax({
            tax_code: 'digital',
            vat_number: '',
            amounts: {
                now: '0.99',
                next: '1.99',
            },
        })
        .subscription(window.recurly.Pricing.Subscription()
            .plan('basic', { quantity: 1 })
            .addon('addon1', { quantity: 2 })
            .catch(function(err) {
                if (err) {
                    throw err;
                }
            })
            .done())
        .then(x => {
            return x;
        })
        .coupon('my-coupon-code')
        .catch(function(err) {
            throw err.message;
        })
        .done(function(pricing) {
            if (pricing) {
                pricing.price.base.addons;
            }
        });
}
