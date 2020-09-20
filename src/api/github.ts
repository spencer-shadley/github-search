import axios from 'axios';

export function findRepos(org: string) {
    return axios.get(`https://api.github.com/orgs/${org}/repos`);
}
