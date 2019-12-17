export default function giftCard() {
    window.recurly.giftCard({ code: 'basic' }, (error, giftcard) => {
        if (error) {
            throw error.message;
        } else {
            console.log(giftcard);
        }
    });
}
