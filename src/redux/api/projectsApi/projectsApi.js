import baseApi from "../baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProject: builder.query({
      query: () => "/project",
      providesTags: ["Projects"],
    }),
    createProject: builder.mutation({
      query: (projectData) => ({
        url: "project",
        method: "POST",
        body: projectData,
      }),
      providesTags: ["Projects"],
    }),
  }),
});

export const { useGetProjectQuery, useCreateProjectMutation } = projectApi;
