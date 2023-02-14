import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum WebhookDispositionEnum {
    Diagnosed = "diagnosed",
    ReferredOut = "referred-out",
    AutoReferredOut = "auto-referred-out",
    PatientNoShow = "patient-no-show",
    PatientCancellation = "patient-cancellation",
    LabOrderApproved = "lab-order-approved",
    LabOrderRejected = "lab-order-rejected",
    LabFollowUpComplete = "lab-follow-up-complete",
    LabFollowUpNeedsAttention = "lab-follow-up-needs-attention"
}