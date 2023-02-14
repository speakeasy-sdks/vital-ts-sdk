import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum OrderV2TopLevelStatusEnum {
    Received = "received",
    CollectingSample = "collecting_sample",
    SampleWithLab = "sample_with_lab",
    Completed = "completed",
    Cancelled = "cancelled",
    Failed = "failed"
}