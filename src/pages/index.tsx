
import {  ConnectButton } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { createThirdwebClient } from "thirdweb";


export default function Home() {
  const wallets = [
    createWallet("io.metamask"),
    createWallet("io.rabby"),
    inAppWallet(
      // built-in auth methods
      {
        auth: {
          options: [
            "google",
            "x",
            "apple",
            "discord",
            "facebook",
            "farcaster",
            "telegram",
            "coinbase",
            "line",
            "email",
            "phone",
            "passkey",
            "guest",
          ],
        },
      },
      // or bring your own auth endpoint
    ),

   
    
  ];
  const client = createThirdwebClient({ 
    clientId: "a539ebe1741880c7cbd95ac1d45ebfe6"
  
});
  
  
  
  
  return (
 

    <div>

      <ConnectButton 
        client={client}
        wallets={wallets} 
             
      />
    </div>

  );
}
