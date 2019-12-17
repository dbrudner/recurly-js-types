type Listener<EventName> = (EventName, ...args) => void;

interface Emitter<Event = string> {
    on(event: Event, listener: Listener<Event>): Emitter<Event>;
    once(event: Event, listener: Listener<Event>): Emitter<Event>;
    off(event?: Event, listener?: Listener<Event>): Emitter<Event>;
    emit(event: Event, ...args: any[]): Emitter<Event>;
    listeners(event: Event): Listener<Event>[];
    hasListeners(event: Event): boolean;
}

declare const Emitter: {
    (obj?: object): Emitter;
    new (obj?: object): Emitter;
};

export = Emitter;
