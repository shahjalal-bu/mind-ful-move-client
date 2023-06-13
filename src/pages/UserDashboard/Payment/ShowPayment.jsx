import React, { useEffect, useState } from "react";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import GlobalSpinner from "../../Shared/GlobalSpinner/GlobalSpinner";
import moment from "moment/moment";
import usePayments from "../../../hooks/usePayments";

const ShowPayment = () => {
  const [payments, isLoading, refetch] = usePayments();

  if (isLoading) return <GlobalSpinner />;
  if (payments)
    return (
      <div className="bg-gray-200 dark:text-white dark:bg-slate-900 rounded-md p-5">
        <SectionHead title="Payment history" />
        <div className="divider my-0"></div>
        <div className="overflow-y-auto h-[82vh]">
          <table className="table">
            <thead className="sticky bg-gray-300 dark:bg-black  top-0 text-black dark:text-white">
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Tax ID</th>
                <th>Paid Amount</th>
                <th>Paid Date</th>
              </tr>
            </thead>
            <tbody className="">
              {payments?.map((el, index) => (
                <tr key={el?._id}>
                  <th>{index + 1}</th>
                  <td>{el?.classData?.className}</td>
                  <td>{el?.transactionId}</td>
                  <td>{el?.paymentAmount}</td>
                  <td>{moment(el?.date).format("MMM Do YY")}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center"></div>
        </div>
      </div>
    );
};

export default ShowPayment;
