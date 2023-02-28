import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingOrderEvent } from "./clientfacingorderevent";
import { LabInDB } from "./labindb";
import { LabTestMethodEnum } from "./labtestmethodenum";
import { LabTestSampleTypeEnum } from "./labtestsampletypeenum";
import { MarkerInDB } from "./markerindb";
import { OrderClientNameEnum } from "./orderclientnameenum";
import { OrderV2TopLevelStatusEnum } from "./orderv2toplevelstatusenum";
import { PhysicianClientFacing } from "./physicianclientfacing";
import { Expose, Transform, Type } from "class-transformer";


// VitalCoreSchemasDBSchemasLabTestOrderv2ClientFacingOrderLabTestInDB
/** 
 * Schema for a LabTest in the database.
**/
export class VitalCoreSchemasDBSchemasLabTestOrderv2ClientFacingOrderLabTestInDB extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "is_active" })
  isActive: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "lab" })
  @Type(() => LabInDB)
  lab?: LabInDB;

  @SpeakeasyMetadata()
  @Expose({ name: "lab_id" })
  labId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "lab_test_provider_id" })
  labTestProviderId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "logistics_provider" })
  logisticsProvider: OrderClientNameEnum;

  @SpeakeasyMetadata({ elemType: MarkerInDB })
  @Expose({ name: "markers" })
  @Type(() => MarkerInDB)
  markers?: MarkerInDB[];

  @SpeakeasyMetadata()
  @Expose({ name: "method" })
  method: LabTestMethodEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "price" })
  price: number;

  @SpeakeasyMetadata()
  @Expose({ name: "sample_csv_url" })
  sampleCsvUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sample_pdf_url" })
  samplePdfUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sample_type" })
  sampleType: LabTestSampleTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "skus" })
  skus?: Record<string, any>[];

  @SpeakeasyMetadata()
  @Expose({ name: "slug" })
  slug: string;

  @SpeakeasyMetadata()
  @Expose({ name: "turnaround_time_lower" })
  turnaroundTimeLower?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "turnaround_time_upper" })
  turnaroundTimeUpper?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;
}

// VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrderPatientAddressCompatible
/** 
 * Patient Address
**/
export class VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrderPatientAddressCompatible extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city: string;

  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country: string;

  @SpeakeasyMetadata()
  @Expose({ name: "phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "receiver_name" })
  receiverName?: string;

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

// VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrderPatientDetailsCompatible
/** 
 * Patient Details
**/
export class VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrderPatientDetailsCompatible extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dob" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dob: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "gender" })
  gender: string;

  @SpeakeasyMetadata()
  @Expose({ name: "last_name" })
  lastName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "phone_number" })
  phoneNumber?: string;
}

export class VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrder extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  details: any;

  @SpeakeasyMetadata({ elemType: ClientFacingOrderEvent })
  @Expose({ name: "events" })
  @Type(() => ClientFacingOrderEvent)
  events: ClientFacingOrderEvent[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "lab_test" })
  @Type(() => VitalCoreSchemasDBSchemasLabTestOrderv2ClientFacingOrderLabTestInDB)
  labTest: VitalCoreSchemasDBSchemasLabTestOrderv2ClientFacingOrderLabTestInDB;

  @SpeakeasyMetadata()
  @Expose({ name: "notes" })
  notes?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "patient_address" })
  @Type(() => VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrderPatientAddressCompatible)
  patientAddress: VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrderPatientAddressCompatible;

  @SpeakeasyMetadata()
  @Expose({ name: "patient_details" })
  @Type(() => VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrderPatientDetailsCompatible)
  patientDetails: VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrderPatientDetailsCompatible;

  @SpeakeasyMetadata()
  @Expose({ name: "physician" })
  @Type(() => PhysicianClientFacing)
  physician?: PhysicianClientFacing;

  @SpeakeasyMetadata()
  @Expose({ name: "sample_id" })
  sampleId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: OrderV2TopLevelStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "team_id" })
  teamId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "user_id" })
  userId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "user_key" })
  userKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "wheel_consult_id" })
  wheelConsultId?: string;
}