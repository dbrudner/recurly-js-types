export default function paypal() {
    const paypal = window.recurly.PayPal();

    paypal.on('token', token => {
        console.log({ token });
    });

    paypal.on('error', error => {
        console.log({ error });
    });

    const el = document.querySelector('#paypal');

    el.addEventListener('click', () => paypal.start());
}
