import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


// ClientFacingAtHomePhlebotomyOrder
/** 
 * Schema for a walk-in test order in the client facing API.
 * 
 * To be used as part of a ClientFacingOrder.
**/
export class ClientFacingAtHomePhlebotomyOrder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;
}