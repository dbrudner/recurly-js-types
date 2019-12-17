export default function checkoutPricing() {
    const subscriptionPricing = window.recurly.Pricing.Subscription();

    subscriptionPricing
        .plan('basic', { quantity: 1 })
        .then(x => x)
        .addon('addon1', { quantity: 2 })
        .catch(function(err) {
            if (err) {
                throw err;
            }
        })
        .done(x => {
            if (x) {
                x.price.now;
            }
        });
}
