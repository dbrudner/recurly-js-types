import RecurlyError from "../error";

// This is modified from ThenPromise https://github.com/then/promise/blob/master/index.d.ts

/**
 * Represents the completion of an asynchronous operation
 */
interface PricingPromise<T, PricingMethods> extends Promise<T> {
    /**
     * Attaches callbacks for the resolution and/or rejection of the PricingPromise.
     * @param onfulfilled The callback to execute when the PricingPromise is resolved.
     * @param onrejected The callback to execute when the PricingPromise is rejected.
     * @returns A PricingPromise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
        onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
        onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): PricingPromise<TResult1 | TResult2, PricingMethods> & PricingMethods;

    /**
     * Attaches a callback for only the rejection of the PricingPromise.
     * @param onrejected The callback to execute when the PricingPromise is rejected.
     * @returns A PricingPromise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: RecurlyError) => TResult | PromiseLike<TResult>) | undefined | null): PricingPromise<T | TResult, PricingMethods> & PricingMethods;


    // Extensions specific to then/promise

    /**
     * Attaches callbacks for the resolution and/or rejection of the PricingPromise, without returning a new promise.
     * @param onfulfilled The callback to execute when the PricingPromise is resolved.
     * @param onrejected The callback to execute when the PricingPromise is rejected.
     */
    done(
        onfulfilled?: ((value: T) => any) | undefined | null,
        onrejected?: ((reason: any) => any) | undefined | null,
    ): T;
}

export default PricingPromise;
