import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const gitHubUsersApi = createApi({
  reducerPath: 'gitHubUsersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (builder) => ({
    getGitHubUserByName: builder.query({
      query: (name) => `users/${name}`,
    }),
    getGitHubUserByRepos: builder.query({
      query: (name) => `users/${name}/repos`,
    }),
  }),
});

export const { useGetGitHubUserByNameQuery, useGetGitHubUserByReposQuery } = gitHubUsersApi;
