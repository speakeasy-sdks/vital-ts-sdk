import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum OrderStatusEnum {
    Ordered = "ordered",
    TransitCustomer = "transit_customer",
    OutForDelivery = "out_for_delivery",
    WithCustomer = "with_customer",
    TransitLab = "transit_lab",
    DeliveredToLab = "delivered_to_lab",
    ProcessingLab = "processing_lab",
    Completed = "completed",
    FailureToDeliverToCustomer = "failure_to_deliver_to_customer",
    FailureToDeliverToLab = "failure_to_deliver_to_lab",
    Cancelled = "cancelled",
    DoNotProcess = "do_not_process",
    Unknown = "unknown",
    Rejected = "rejected",
    Lost = "lost"
}