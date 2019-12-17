// from https://github.com/recurly/recurly-js-examples/blob/master/public/adyen/index.html

export default function adyen() {
    const adyen = window.recurly.Adyen();

    adyen.on('token', function(response) {
        console.log({ response });
    });

    const payload = { invoiceUuid: 'aasdf1234', skinCode: '1234asdf', countryCode: 'PL', shopperLocale: 'en_PL' };

    adyen.start(payload);
}
