import { AuthorData } from "./AuthorData";

export interface CommitData {
    author: AuthorData,
    comments_url: string,
    // commit: {author: {name: "David Liu", email: "qiang.david.liu@gmail.com", date: "2018-11-19T22:18:19Z"},…}
    // committer: {login: "web-flow", id: 19864447, node_id: "MDQ6VXNlcjE5ODY0NDQ3",…}
    html_url: string,
    node_id: string,
    sha: string,
    url: string
}
