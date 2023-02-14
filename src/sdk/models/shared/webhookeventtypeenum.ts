import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum WebhookEventTypeEnum {
    ConsultAmendment = "consult.amendment",
    ConsultAppointmentCancelled = "consult.appointment.cancelled",
    ConsultAssigned = "consult.assigned",
    ConsultMessageNew = "consult.message.new",
    ConsultStatusChange = "consult.statusChange",
    ConsultVerificationFailed = "consult.verification.failed",
    ConsultUnassigned = "consult.unassigned"
}