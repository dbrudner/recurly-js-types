export default function elementstoken() {
    const elements = window.recurly.Elements();

    (document.querySelector('#my-form') as HTMLFormElement).on('submit', function (event) {
        const form = this;
        event.preventDefault();
        window.recurly.token(elements, form, function (err, token) {
            if (err) {
                throw err;
            } else {
                form.submit();
            }
        });
    });
}
