export default function elements() {
    const elements = window.recurly.Elements();
    const cardElement = elements.CardElement();

    cardElement.attach('#recurly-elements');
}
