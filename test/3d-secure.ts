export default function threeDSecure() {
    const risk = window.recurly.Risk();
    const threeDSecure = risk.ThreeDSecure({
        actionTokenId: 'token',
    });

    threeDSecure.on('token', function(token) {});

    threeDSecure.on('error', function(error) {});

    threeDSecure.attach(document.querySelector('#my-auth-container'));
}
