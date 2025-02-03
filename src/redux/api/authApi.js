import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://json-api.uz/api/project/t-test",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
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
    deleteBlogs: builder.mutation({
      query: (id) => ({
        url: `/news/${id}`,
        method: "DELETE",
      }),
    }),
    deleteProjects: builder.mutation({
      query: (id) => ({
        url: `/news/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetProjectsQuery,
  useGetBlogsQuery,
  useDeleteBlogsMutation,
  useDeleteProjectsMutation,
} = authApi;
