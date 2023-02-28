import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Consent } from "./consent";
import { PatientAddressCompatible } from "./patientaddresscompatible";
import { PatientDetailsCompatible } from "./patientdetailscompatible";
import { PhysicianBase } from "./physicianbase";
import { QuestionnaireItem } from "./questionnaireitem";
import { RelatedPerson } from "./relatedperson";
import { Expose, Type } from "class-transformer";


// CreateOrderRequestCompatible
/** 
 * Schema for the create Order endpoint.
**/
export class CreateOrderRequestCompatible extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Consent })
  @Expose({ name: "consents" })
  @Type(() => Consent)
  consents?: Consent[];

  @SpeakeasyMetadata({ elemType: QuestionnaireItem })
  @Expose({ name: "intakes" })
  @Type(() => QuestionnaireItem)
  intakes?: QuestionnaireItem[];

  @SpeakeasyMetadata()
  @Expose({ name: "lab_test_id" })
  labTestId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "patient_address" })
  @Type(() => PatientAddressCompatible)
  patientAddress: PatientAddressCompatible;

  @SpeakeasyMetadata()
  @Expose({ name: "patient_details" })
  @Type(() => PatientDetailsCompatible)
  patientDetails: PatientDetailsCompatible;

  @SpeakeasyMetadata()
  @Expose({ name: "physician" })
  @Type(() => PhysicianBase)
  physician?: PhysicianBase;

  @SpeakeasyMetadata({ elemType: RelatedPerson })
  @Expose({ name: "related_person" })
  @Type(() => RelatedPerson)
  relatedPerson?: RelatedPerson[];

  @SpeakeasyMetadata()
  @Expose({ name: "user_id" })
  userId: string;
}