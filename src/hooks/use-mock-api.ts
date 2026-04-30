// Because this is a static portfolio with hardcoded data and no backend is required,
// we export empty/mock hooks just to satisfy the pattern and any potential future expansion.

import { useQuery, useMutation } from "@tanstack/react-query";

export function useMockData() {
  return useQuery({
    queryKey: ["mock-data"],
    queryFn: async () => {
      return { status: "ok" };
    },
    staleTime: Infinity,
  });
}

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: Record<string, any>) => {
      // simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { success: true, data };
    },
  });
}
