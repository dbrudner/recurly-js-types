import Emitter from './emitter';
import { Recurly } from './recurly';

type ThreeDSecureEvent = 'token' | 'error';

interface ThreeDSecureEmitter extends Emitter<ThreeDSecureEvent> {
    attach: (el: HTMLElement) => void;
}

type RiskOptions = {
    actionTokenId?: string;
};

type ThreeDSecure = (riskOptions: RiskOptions) => ThreeDSecureEmitter;

type Risk = () => { ThreeDSecure: ThreeDSecure; recurly: Recurly };

export default Risk;
