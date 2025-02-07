// supabaseFunctions.js

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// import toast from "react-hot-toast";
import { supabase } from "./supabase";
import toast from "react-hot-toast";

// Fetch data (Read)

export function useItems() {
  return useQuery({
    queryKey: ["bpData"],
    queryFn: async () => {
      const { data, error } = await supabase.from("bpData").select("*");
      if (error) throw error;
      return data;
    },
  });
}

// Create Item (Post)
export function useCreateItem() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newItem) => {
      const { data, error } = await supabase.from("bpData").insert([newItem]);
      if (error) return toast.error("Something went wrong");
      toast.success("Successfully Added!");
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["bpData"]);
    },
  });
}

// // Update Item (Put)
// export const useUpdateItem = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: async (updatedItem) => {
//       const { data, error } = await supabase
//         .from("bpData")
//         .update({ fbName: updatedItem.name })
//         .eq("id", updatedItem.id);
//       if (error) throw error;
//       return data;
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(["bpData"]);
//     },
//   });
// };

// // Delete Item (Delete)
// export const useDeleteItem = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: async (id) => {
//       const { data, error } = await supabase
//         .from("bpData")
//         .delete()
//         .eq("id", id);
//       if (error) throw error;
//       return data;
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(["bpData"]);
//     },
//   });
// };
