import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://json-api.uz/api/project/t-test",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getProjects: builder.query({
      query: () => `news`,
    }),
    getBlogs: builder.query({
      query: () => `news`,
    }),
  }),
});

export const { useLoginMutation, useGetProjectsQuery, useGetBlogsQuery } =
  authApi;
