import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidHlwZSI6ImFkbWluIiwiaWF0IjoxNzM4NzMwNjAxLCJleHAiOjE3Mzg3MzQyMDF9.UJ4JYqujjmaiDO39P0h4_wdWO13RSD-SQy8LZBhIErs"
// const token = localStorage.getItem("access_token");
export const newsApi = createApi({
  reducerPath: "newsApi",
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
    getNews: builder.query({
      query: () => ({
        url: "/news",
        method: "GET",
      }),
    }),
    getNewsById: builder.query({
      query: (id) => ({
        url: `/news/${id}`,
        method: "GET",
      }),
    }),
    createNews: builder.mutation({
      query: (newNews) => ({
        url: "/news",
        method: "POST",
        body: JSON.stringify(newNews),
      }),
    }),
    updateNews: builder.mutation({
      query: (updateData) => ({
        url: `/news/${updateData.id}`,
        method: "PATCH",
        body: JSON.stringify(updateData),
      }),
    }),
    deleteNews: builder.mutation({
      query: (id) => ({
        url: `/news/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetNewsQuery,
  useGetNewsByIdQuery,
  useCreateNewsMutation,
  useUpdateNewsMutation,
  useDeleteNewsMutation,
} = newsApi;
