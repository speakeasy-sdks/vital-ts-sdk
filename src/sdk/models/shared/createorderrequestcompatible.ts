import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Consent } from "./consent";
import { PatientAddressCompatible } from "./patientaddresscompatible";
import { PatientDetailsCompatible } from "./patientdetailscompatible";
import { PhysicianBase } from "./physicianbase";
import { QuestionnaireItem } from "./questionnaireitem";
import { RelatedPerson } from "./relatedperson";


// CreateOrderRequestCompatible
/** 
 * Schema for the create Order endpoint.
**/
export class CreateOrderRequestCompatible extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consents", elemType: Consent })
  consents?: Consent[];

  @SpeakeasyMetadata({ data: "json, name=intakes", elemType: QuestionnaireItem })
  intakes?: QuestionnaireItem[];

  @SpeakeasyMetadata({ data: "json, name=lab_test_id" })
  labTestId: string;

  @SpeakeasyMetadata({ data: "json, name=patient_address" })
  patientAddress: PatientAddressCompatible;

  @SpeakeasyMetadata({ data: "json, name=patient_details" })
  patientDetails: PatientDetailsCompatible;

  @SpeakeasyMetadata({ data: "json, name=physician" })
  physician?: PhysicianBase;

  @SpeakeasyMetadata({ data: "json, name=related_person", elemType: RelatedPerson })
  relatedPerson?: RelatedPerson[];

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId: string;
}