import Emitter from './emitter';

export type CommonElementStyle = {
    fontColor?: string;
    fontFamily?: string;
    fontFeatureSettings?: string;
    fontKerning?: string;
    fontSize?: string;
    fontSmooth?: string;
    fontStretch?: string;
    fontStyle?: string;
    fontVariant?: string;
    fontWeight?: string;
    letterSpacing?: string;
    lineHeight?: string;
    textAlign?: string;
    textDecoration?: string;
    textRendering?: string;
    textShadow?: string;
    textTransform?: string;
};

type InputType = 'text' | 'mobileSelect' | 'select';

export type CardElementOptions = {
    displayIcon?: boolean;
    inputType?: InputType;
    tabIndex?: string;
    style?: CommonElementStyle & {
        invalid?: CommonElementStyle;
        placeholder?: {
            color?: string;
            content?: {
                number?: string;
                expiry?: string;
                cvv?: string;
            };
        };
    };
};

export type IndividualElementOptions = {
    inputType?: InputType;
    tabIndex?: string;
    style?: CommonElementStyle & {
        invalid: CommonElementStyle;
        padding?: string;
        placeholder?: {
            color?: string;
            content?: string;
        };
    };
};

type Attach<ElementType> = (el: string | HTMLElement) => ElementType;

type ElementEvent = 'change' | 'focus' | 'blur' | 'submit' | 'attach' | 'remove';

interface CardElement extends Emitter<ElementEvent> {
    attach: Attach<CardElement>;
    remove: () => CardElement;
    configure: (options: CardElementOptions) => CardElement;
}

interface IndividualElement extends Emitter<ElementEvent> {
    attach: Attach<IndividualElement>;
    remove: () => Element;
    configure: (options: IndividualElementOptions) => Element;
}

type ElementsInstanceEvents = 'submit';

export interface ElementsInstance extends Emitter<ElementsInstanceEvents> {
    CardElement: (cardElementOptions?: CardElementOptions) => CardElement;
    CardNumberElement: (cardNumberElementOptions?: IndividualElement) => IndividualElement;
    CardMonthElement: (cardMonthElementOptions?: IndividualElement) => IndividualElement;
    CardYearElement: (cardYearElementOptions?: IndividualElement) => IndividualElement;
    CardCvvElement: (cardCvvElementOptions?: IndividualElement) => IndividualElement;
}

type Elements = () => ElementsInstance;

export default Elements;
