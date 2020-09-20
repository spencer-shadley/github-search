import axios from 'axios';

export function findRepos(org: string) {
    return axios.get(`https://api.github.com/orgs/${org}/repos`);
}

export function findCommits(owner: string, repo: string) {
    return axios.get(`https://api.github.com/repos/${owner}/${repo}/commits`);
}
