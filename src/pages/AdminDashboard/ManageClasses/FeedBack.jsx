import React, { useState } from "react";
import useApi from "../../../api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import SectionHead from "../../Shared/SectionHead/SectionHead";

const FeedBack = ({ id, isOpen, setIsOpen, refetch }) => {
  const [inputValue, setInputValue] = useState("");
  console.log(isOpen);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const { feedbackClass } = useApi();
  const queryClient = useQueryClient();
  const { mutate: feedBackClassMutaion } = useMutation({
    mutationFn: feedbackClass,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["classes"],
      });
      setInputValue("");
      setIsOpen(false);
      //   refetch();
    },
  });

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white flex justify-center items-center flex-col gap-1 w-1/2 p-6 rounded shadow">
            <SectionHead className="mb-9" title="Feedback for class" />
            <div className="flex gap-1">
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter your input"
                className="block border border-gray-300 p-2 mb-4 input input-bordered input-warning w-full max-w-xs"
              />
              <button
                type="submit"
                className="btn btn-warning ml-1"
                onClick={() =>
                  feedBackClassMutaion({ id, feedback: inputValue })
                }
              >
                Submit
              </button>
            </div>
            <button
              className="btn btn-error ml-1 w-full"
              onClick={() => setIsOpen(false)}
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedBack;
