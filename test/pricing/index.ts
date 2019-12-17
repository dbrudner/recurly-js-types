export default function pricing() {
    const subscriptionPricing = window.recurly.Pricing.Subscription();

    subscriptionPricing
        .plan('basic', { quantity: 1 })
        .addon('addon1', { quantity: 2 })
        .catch(function(err) {
            // err.code
        })
        .done();
}
