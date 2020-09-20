import { CommiterData } from "./CommiterData";
import { VerificationData } from "./VerificationData";

export interface CommitInfo {
    comment_count: number,
    committer: CommiterData,
    message: string,
    // tree: {sha: "3432ce4c1d7ce93fb7e76621ec329f94461484ff",…}
    url: string,
    verification: VerificationData
}