"use client";

import type React from "react";
import { useState } from "react";
import {
  CrossmintProvider,
  CrossmintEmbeddedCheckout,
  CrossmintCheckoutProvider,
} from "@crossmint/client-sdk-react-ui";
import Minting from "./Minting";

const Crossmint: React.FC = () => {
  const [orderIdentifier] = useState<string | null>(null);

  const collectionId = process.env.NEXT_PUBLIC_COLLECTION_ID as string;
  const clientApiKey = process.env.NEXT_PUBLIC_CLIENT_API_KEY as string;

  return (
    <CrossmintProvider apiKey={clientApiKey}>
      <CrossmintCheckoutProvider>
        <div className="sm:col-span-3">
          {orderIdentifier === null ? (
            <CrossmintEmbeddedCheckout
              lineItems={{
                collectionLocator: `crossmint:${collectionId}`,
                callData: {
                  totalPrice: "0.001",
                  quantity: 1,
                },
              }}
              payment={{
                crypto: { enabled: true },
                fiat: { enabled: true },
              }}
            />
          ) : (
            <Minting orderIdentifier={orderIdentifier} />
          )}
        </div>
      </CrossmintCheckoutProvider>
    </CrossmintProvider>
  );
};

export default Crossmint;
