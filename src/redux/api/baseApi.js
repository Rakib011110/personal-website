import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/api",
    baseUrl:
      "https://persional-web-backend-jjz5i1kop-rakib011110s-projects.vercel.app/api",
  }),
  tagTypes: ["Blog", "Projects"],
  endpoints: () => ({}),
});

export default baseApi;
