<!-- Start SDK Example Usage -->
```typescript
import { Vital, withSecurity} from "@vital/sdk";
import { DeregisterGarminV2DataWebhookDeregisterGarminPostRequest, DeregisterGarminV2DataWebhookDeregisterGarminPostResponse } from "@vital/sdk/src/sdk/models/operations";
import { AxiosError } from "axios";


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