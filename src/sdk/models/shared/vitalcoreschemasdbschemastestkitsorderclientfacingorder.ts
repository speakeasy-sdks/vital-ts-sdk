import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OrderStatusEnum } from "./orderstatusenum";
import { TestkitClientFacing } from "./testkitclientfacing";


// VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrderPatientAddress
/** 
 * Patient Address
**/
export class VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrderPatientAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber: string;

  @SpeakeasyMetadata({ data: "json, name=receiver_name" })
  receiverName: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: string;

  @SpeakeasyMetadata({ data: "json, name=street" })
  street: string;

  @SpeakeasyMetadata({ data: "json, name=street_number" })
  streetNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip: string;
}

// VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrderPatientDetails
/** 
 * Patient Details
**/
export class VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrderPatientDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dob" })
  dob: Date;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender: string;
}

export class VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_on" })
  createdOn: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=inbound_courier" })
  inboundCourier?: string;

  @SpeakeasyMetadata({ data: "json, name=inbound_tracking_number" })
  inboundTrackingNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=inbound_tracking_url" })
  inboundTrackingUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=outbound_courier" })
  outboundCourier?: string;

  @SpeakeasyMetadata({ data: "json, name=outbound_tracking_number" })
  outboundTrackingNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=outbound_tracking_url" })
  outboundTrackingUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=patient_address" })
  patientAddress: VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrderPatientAddress;

  @SpeakeasyMetadata({ data: "json, name=patient_details" })
  patientDetails: VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrderPatientDetails;

  @SpeakeasyMetadata({ data: "json, name=sample_id" })
  sampleId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OrderStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=team_id" })
  teamId: string;

  @SpeakeasyMetadata({ data: "json, name=testkit" })
  testkit: TestkitClientFacing;

  @SpeakeasyMetadata({ data: "json, name=testkit_id" })
  testkitId: string;

  @SpeakeasyMetadata({ data: "json, name=updated_on" })
  updatedOn: Date;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId: string;

  @SpeakeasyMetadata({ data: "json, name=user_key" })
  userKey?: string;
}