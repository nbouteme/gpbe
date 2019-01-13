import axios from 'axios';
import { repository } from './config';

export interface GithubRepoEntry {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: "dir" | "file";
  _links: {
    self: string;
    git: string;
    html: string;
  }
}

axios.defaults.baseURL = 'https://api.github.com';

export interface GithubEntryDetails extends GithubRepoEntry {
  content: string;
  encoding: "base64";
}

export let getArticles = async () : Promise<GithubRepoEntry[]> => {
  let res = await axios.get<GithubRepoEntry[]>(`/repos/${repository.user}/${repository.name}/contents/articles`);
  return res.data.filter(v => v.name.match(/\.md$/) && v.type == 'file').reverse();
};

export let getArticle = async (entry: GithubRepoEntry) : Promise<GithubEntryDetails> => {
  let res = await axios.get<GithubEntryDetails>(entry.url);
  return res.data;
};

export let tryGetArticle = async (path: string) : Promise<GithubEntryDetails> => {
  let res = await axios.get<GithubEntryDetails>(`/repos/${repository.user}/${repository.name}/contents/${path}`);
  return res.data;
};
