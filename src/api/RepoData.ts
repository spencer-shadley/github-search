import { OwnerData } from "./OwnerData";

export interface RepoData {
    archived: boolean,
    created_at: Date,
    description: string,
    fork: boolean,
    forks: number,
    forks_count: number,
    full_name: string,
    git_commits_url: string,
    git_url: string,
    id: number,
    name: string,
    open_issues_count: number,
    owner: OwnerData,
    pushed_at: Date,
    size: number,
    stargazers_count: number,
    stargazers_url: string,
    updated_at: Date,
    url: string,
    watchers: number
}

export function createRepoData(data: {[key: string]: number | string | boolean | Date}): RepoData {
    return {
        archived: !!data['archived'],
        created_at: data['created_at'] as Date,
        description: data['description'] as string,
        fork: !!data['fork'],
        forks: data['forks'] as number,
        forks_count: data['forks_count'] as number,
        full_name: data['full_name'] as string,
        git_commits_url: data['git_commits_url'] as string,
        git_url: data['git_url'] as string,
        id: data['id'] as number,
        name: data['name'] as string,
        open_issues_count: data['open_issues_count'] as number,
        owner: data['owner'] as unknown as OwnerData,
        pushed_at: data['pushed_at'] as Date,
        size: data['size'] as number,
        stargazers_count: data['stargazers_count'] as number,
        stargazers_url: data['stargazers_url'] as string,
        updated_at: data['updated_at'] as Date,
        url: data['url'] as string,
        watchers: data['watchers'] as number,
    };
}