import { TokenHandler } from "token";

export default function bankAccount() {
    const tokenHandler: TokenHandler = (err, token) => {
        if (err) {
            throw err.message
        } else {
            console.log(token.id, token.type)
        }
    }

    window.recurly.bankAccount.token(document.querySelector('form'), tokenHandler);
}
