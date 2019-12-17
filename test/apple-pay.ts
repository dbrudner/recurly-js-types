export default function applePay() {
    const applePay = window.recurly.ApplePay({
        country: 'US',
        currency: 'USD',
        label: 'My Subscription',
        total: '29.00',
        pricing: window.recurly.Pricing.Checkout(),
    });

    applePay.ready(function() {
        $('#my-apple-pay-button').on('click', function() {
            applePay.begin();
        });
    });

    applePay.on('error', function(err) {
        console.error('Apple Pay error', err);
    });

    applePay.on('token', function(token) {
        console.log('Apple Pay succeeded. Token:', token.id);
    });
}
