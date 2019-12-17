export default function hostedFieldToken() {
    (document.querySelector('#my-form') as HTMLFormElement).on('submit', function(event) {
        const form = this;
        event.preventDefault();
        window.recurly.token(form, function(err, token) {
            if (err) {
                throw err.message;
            } else {
                form.submit();
            }
        });
    });
}
