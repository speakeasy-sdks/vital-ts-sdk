import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OrderStatusEnum } from "./orderstatusenum";
import { TestkitClientFacing } from "./testkitclientfacing";
import { Expose, Transform, Type } from "class-transformer";


// VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrderPatientAddress
/** 
 * Patient Address
**/
export class VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrderPatientAddress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city: string;

  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country: string;

  @SpeakeasyMetadata()
  @Expose({ name: "phone_number" })
  phoneNumber: string;

  @SpeakeasyMetadata()
  @Expose({ name: "receiver_name" })
  receiverName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state: string;

  @SpeakeasyMetadata()
  @Expose({ name: "street" })
  street: string;

  @SpeakeasyMetadata()
  @Expose({ name: "street_number" })
  streetNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "zip" })
  zip: string;
}

// VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrderPatientDetails
/** 
 * Patient Details
**/
export class VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrderPatientDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dob" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dob: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "gender" })
  gender: string;
}

export class VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrder extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_on" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdOn: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "inbound_courier" })
  inboundCourier?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "inbound_tracking_number" })
  inboundTrackingNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "inbound_tracking_url" })
  inboundTrackingUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "notes" })
  notes?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "outbound_courier" })
  outboundCourier?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "outbound_tracking_number" })
  outboundTrackingNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "outbound_tracking_url" })
  outboundTrackingUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "patient_address" })
  @Type(() => VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrderPatientAddress)
  patientAddress: VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrderPatientAddress;

  @SpeakeasyMetadata()
  @Expose({ name: "patient_details" })
  @Type(() => VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrderPatientDetails)
  patientDetails: VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrderPatientDetails;

  @SpeakeasyMetadata()
  @Expose({ name: "sample_id" })
  sampleId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: OrderStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "team_id" })
  teamId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "testkit" })
  @Type(() => TestkitClientFacing)
  testkit: TestkitClientFacing;

  @SpeakeasyMetadata()
  @Expose({ name: "testkit_id" })
  testkitId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_on" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedOn: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "user_id" })
  userId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "user_key" })
  userKey?: string;
}