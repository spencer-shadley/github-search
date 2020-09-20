import { AuthorData } from "./AuthorData";
import { CommiterData } from "./CommiterData";
import { CommitInfo } from "./CommitInfo";

export interface CommitData {
    author: AuthorData,
    comments_url: string,
    commit: CommitInfo,
    committer: CommiterData,
    html_url: string,
    node_id: string,
    sha: string,
    url: string
}
