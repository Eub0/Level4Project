import { ReactNode, createContext, useContext, useMemo, useState } from "react";

interface GuestContextType{
    isGuest: boolean,
    setIsGuest: (isGuest: boolean) => void
}

const guestContext = createContext<GuestContextType>({} as GuestContextType);

export function GuestProvider({
    children,
    } : 
    {
      children: ReactNode;
    }): 
    JSX.Element {
        const [isGuest, setIsGuest] = useState<boolean>(false);
        const memoedValue = useMemo(
        () => ({
          isGuest,
          setIsGuest
        }),
        [isGuest]
      );
    return (
        <guestContext.Provider value={memoedValue}>
          {children}
        </guestContext.Provider>
    )
}

export default function useGuestHook() {
    return useContext(guestContext);
  }