<!-- Start SDK Example Usage -->
```typescript
import {
  DeregisterGarminV2DataWebhookDeregisterGarminPostRequest,
  DeregisterGarminV2DataWebhookDeregisterGarminPostResponse 
} from "@vital/sdk/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Vital } from "@vital/sdk";


const sdk = new Vital();
    
const req: DeregisterGarminV2DataWebhookDeregisterGarminPostRequest = {
  request: {
    "deserunt": "porro",
    "nulla": "id",
    "vero": "perspiciatis",
  },
};

sdk.dataWebhook.deregisterGarminV2DataWebhookDeregisterGarminPost(req).then((res: DeregisterGarminV2DataWebhookDeregisterGarminPostResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->