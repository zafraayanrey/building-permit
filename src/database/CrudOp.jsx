import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// import toast from "react-hot-toast";
import { supabase } from "./supabase";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  authRepDisable,
  corpAddDisable,
  proInfoDisable,
  setHlurbRadio,
  setLocalAddress,
  setZoningRadio,
  updateAddress,
} from "../redux/applicationSlice";
import { clearAddress, clearLocalAddress } from "../utils/customStyling";

function CrudOp() {
  const dispatch = useDispatch();
  // Fetch data (Read)
  function useItems() {
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
  function useCreateItem(reset) {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: async (newItem) => {
        const { data, error } = await supabase.from("bpData").insert([newItem]);
        // if (error) console.log(error);
        if (error) {
          toast.error("Write N/A if not applicable");
          return;
        }
        toast.success("Successfully Added!");
        dispatch(setHlurbRadio(true));
        dispatch(setZoningRadio(true));
        dispatch(setLocalAddress(clearLocalAddress));
        dispatch(updateAddress(clearAddress));
        dispatch(corpAddDisable(false));
        dispatch(authRepDisable(false));
        dispatch(proInfoDisable(false));
        reset();
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

  return { useItems, useCreateItem };
}

export default CrudOp;
