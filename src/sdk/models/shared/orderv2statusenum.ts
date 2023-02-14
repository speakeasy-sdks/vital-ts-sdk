import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum OrderV2StatusEnum {
    ReceivedWalkInTestRequisitionCreated = "received.walk_in_test.requisition_created",
    CompletedWalkInTestOrderCompleted = "completed.walk_in_test.order_completed",
    FailedWalkInTestSampleError = "failed.walk_in_test.sample_error",
    ReceivedTestkitOrdered = "received.testkit.ordered",
    ReceivedTestkitRequisitionCreated = "received.testkit.requisition_created",
    CollectingSampleTestkitTransitCustomer = "collecting_sample.testkit.transit_customer",
    CollectingSampleTestkitOutForDelivery = "collecting_sample.testkit.out_for_delivery",
    CollectingSampleTestkitWithCustomer = "collecting_sample.testkit.with_customer",
    CollectingSampleTestkitTransitLab = "collecting_sample.testkit.transit_lab",
    SampleWithLabTestkitDeliveredToLab = "sample_with_lab.testkit.delivered_to_lab",
    CompletedTestkitCompleted = "completed.testkit.completed",
    FailedTestkitFailureToDeliverToCustomer = "failed.testkit.failure_to_deliver_to_customer",
    FailedTestkitFailureToDeliverToLab = "failed.testkit.failure_to_deliver_to_lab",
    FailedTestkitSampleError = "failed.testkit.sample_error",
    FailedTestkitLost = "failed.testkit.lost",
    CancelledTestkitCancelled = "cancelled.testkit.cancelled",
    CancelledTestkitDoNotProcess = "cancelled.testkit.do_not_process"
}