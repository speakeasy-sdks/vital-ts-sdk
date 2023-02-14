import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingOrderEvent } from "./clientfacingorderevent";
import { LabInDB } from "./labindb";
import { LabTestMethodEnum } from "./labtestmethodenum";
import { LabTestSampleTypeEnum } from "./labtestsampletypeenum";
import { MarkerInDB } from "./markerindb";
import { OrderClientNameEnum } from "./orderclientnameenum";
import { OrderV2TopLevelStatusEnum } from "./orderv2toplevelstatusenum";
import { PhysicianClientFacing } from "./physicianclientfacing";


// VitalCoreSchemasDBSchemasLabTestOrderv2ClientFacingOrderLabTestInDB
/** 
 * Schema for a LabTest in the database.
**/
export class VitalCoreSchemasDBSchemasLabTestOrderv2ClientFacingOrderLabTestInDB extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=is_active" })
  isActive: boolean;

  @SpeakeasyMetadata({ data: "json, name=lab" })
  lab?: LabInDB;

  @SpeakeasyMetadata({ data: "json, name=lab_id" })
  labId: number;

  @SpeakeasyMetadata({ data: "json, name=lab_test_provider_id" })
  labTestProviderId?: string;

  @SpeakeasyMetadata({ data: "json, name=logistics_provider" })
  logisticsProvider: OrderClientNameEnum;

  @SpeakeasyMetadata({ data: "json, name=markers", elemType: MarkerInDB })
  markers?: MarkerInDB[];

  @SpeakeasyMetadata({ data: "json, name=method" })
  method: LabTestMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price: number;

  @SpeakeasyMetadata({ data: "json, name=sample_csv_url" })
  sampleCsvUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=sample_pdf_url" })
  samplePdfUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=sample_type" })
  sampleType: LabTestSampleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=skus" })
  skus?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=turnaround_time_lower" })
  turnaroundTimeLower?: number;

  @SpeakeasyMetadata({ data: "json, name=turnaround_time_upper" })
  turnaroundTimeUpper?: number;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;
}

// VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrderPatientAddressCompatible
/** 
 * Patient Address
**/
export class VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrderPatientAddressCompatible extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=receiver_name" })
  receiverName?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: string;

  @SpeakeasyMetadata({ data: "json, name=street" })
  street: string;

  @SpeakeasyMetadata({ data: "json, name=street_number" })
  streetNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip: string;
}

// VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrderPatientDetailsCompatible
/** 
 * Patient Details
**/
export class VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrderPatientDetailsCompatible extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dob" })
  dob: Date;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;
}

export class VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details: any;

  @SpeakeasyMetadata({ data: "json, name=events", elemType: ClientFacingOrderEvent })
  events: ClientFacingOrderEvent[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=lab_test" })
  labTest: VitalCoreSchemasDBSchemasLabTestOrderv2ClientFacingOrderLabTestInDB;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=patient_address" })
  patientAddress: VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrderPatientAddressCompatible;

  @SpeakeasyMetadata({ data: "json, name=patient_details" })
  patientDetails: VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrderPatientDetailsCompatible;

  @SpeakeasyMetadata({ data: "json, name=physician" })
  physician?: PhysicianClientFacing;

  @SpeakeasyMetadata({ data: "json, name=sample_id" })
  sampleId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OrderV2TopLevelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=team_id" })
  teamId: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId: string;

  @SpeakeasyMetadata({ data: "json, name=user_key" })
  userKey?: string;

  @SpeakeasyMetadata({ data: "json, name=wheel_consult_id" })
  wheelConsultId?: string;
}