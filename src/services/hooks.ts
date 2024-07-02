import { Context, useContext } from "react";
import { ContextData } from "./ContextData";

const useSafeContext = <T>(contextType: Context<T>) => {
    const context = useContext(contextType);
    if (context === undefined) {
        throw new Error(`use${contextType.displayName} must be used within a Provider`);
    }
    return context;
}

export const useContextData: any = () => useSafeContext(ContextData);
