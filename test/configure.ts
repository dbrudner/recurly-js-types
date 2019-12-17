export default function configure() {
    // configuring with a string
    window.recurly.configure('ewr1-BrfKUWEllwCxdpRZvZloaJ');

    // configuring with a blog
    window.recurly.configure({
        cors: true,
        currency: 'USD',
        fraud: {
            braintree: {
                deviceData: 'my-device-data',
            },
            kount: {
                dataCollector: false,
            },
            litle: {
                sessionId: 'my-session-id',
            },
        },
        publicKey: 'my-public-key',
        required: ['cvv'],
        timeout: 60000,
    });
}
