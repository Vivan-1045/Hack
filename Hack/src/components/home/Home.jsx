import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import html2pdf from "html2pdf.js";
import Modal from "./Model";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const Home = () => {
  const { register, handleSubmit, reset } = useForm();
  const [expenses, setExpenses] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const onSubmit = (data) => {
    const { category, amount, time, date } = data;
    setExpenses((prevExpenses) => {
      const existingCategory = prevExpenses.find(
        (exp) => exp.category === category
      );
      if (existingCategory) {
        return prevExpenses.map((exp) =>
          exp.category === category
            ? { ...exp, amount: exp.amount + parseFloat(amount), date, time }
            : exp
        );
      }
      return [
        ...prevExpenses,
        { category, amount: parseFloat(amount), date, time },
      ];
    });
    reset();
  };

  const data = {
    labels: expenses.map((exp) => exp.category),
    datasets: [
      {
        data: expenses.map((exp) => exp.amount),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF5733",
          "#33FF57",
        ],
      },
    ],
  };

  const generateReceipt = () => {
    setModalOpen(true);
  };

  const handleDownload = () => {
    const element = document.getElementById("receipt-content");
    const options = {
      margin: 1,
      filename: "expenses-receipt.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf()
      .from(element)
      .set(options)
      .save()
      .then(() => {
        setModalOpen(false);
      });
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center mt-2">
         Manage Your Daily Expences
      </h1>
      <div className="mt-8 flex justify-center">
        <div className="w-80 h-80">
          <Pie data={data} />
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-4 rounded-lg shadow-lg mb-6"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Category:</label>
          <input
          type="text"
          maxLength={20}
            {...register("category", { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Expenses"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Date:</label>
          <input
            type="date"
            {...register("date", { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Date"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Time:</label>
          <input
            type="time"
            {...register("time", { required: false })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Time"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Amount:</label>
          <input
            type="number"
            {...register("amount", { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Amount"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Expense
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">All Expenses</h2>
        <ul className="bg-white p-4 rounded-lg shadow-lg">
          {expenses.map((expense, index) => (
            <li
              key={index}
              className="flex justify-between border-b last:border-0 py-2"
            >
              <span>{expense.category}</span>
              <span>{expense.amount.toFixed(0)}/</span>
              <span>
                {expense.date}
                {"  "}
                {expense.time}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={generateReceipt}
          className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Download Receipt
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div id="receipt-content" className="p-4">
          <h1>
            <input
              type="text"
              className="text-2xl font-bold mb-4"
              placeholder="Enter Your Receipt title"
            />
          </h1>

          <ul>
            {expenses.map((expense, index) => (
              <li
                key={index}
                className="flex justify-between border-b last:border-0 py-2"
              >
                <span>{expense.category}</span>
                <span>{expense.amount.toFixed(1)}/</span>
                <span>
                  {expense.date}
                  {"  "}
                  {expense.time}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="font-medium">
              Total:{" "}
              {expenses.reduce((sum, exp) => sum + exp.amount, 0).toFixed(1)}/-
            </p>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            onClick={handleDownload}
            className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Download PDF
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
