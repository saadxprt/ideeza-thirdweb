import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThirdwebProvider} from "@thirdweb-dev/react"
import { ReactNode } from "react";
import { ThirdwebProvider as ThirdwebProviderV5 } from "thirdweb/react"

const queryClient = new QueryClient();

interface ProvidersProps {
  children: ReactNode;
}


export function Providers({ children }: ProvidersProps) {




  return (
    <QueryClientProvider client={queryClient}>
        <ThirdwebProvider activeChain={"base-sepolia-testnet"} clientId={process.env.NEXT_PUBLIC_CLIENT_ID!}>
        <ThirdwebProviderV5>
        {children}
      </ThirdwebProviderV5>
      </ThirdwebProvider>
    </QueryClientProvider>
  );
} 