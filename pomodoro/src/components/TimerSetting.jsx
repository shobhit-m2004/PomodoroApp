import React, { useState, useContext } from "react";
import { GrSettingsOption } from "react-icons/gr";
import { TimerContext } from "./contextApi/TimerContext";
import { useForm } from "react-hook-form";

const TimerSetting = () => {
  const [visible, setVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Added reset
  } = useForm();
  const { setInitialTime } = useContext(TimerContext);

  const onSubmit = (data) => {
    const hours = parseInt(data.hours) || 0;
    const minutes = parseInt(data.minutes) || 0;
    const seconds = parseInt(data.seconds) || 0;
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    setInitialTime(totalSeconds);
    reset(); // Clear input fields
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div
        className="bg-transparent flex w-[50px] h-[50px] rounded-full mx-auto mt-4 items-center justify-center shadow-lg cursor-pointer"
        onClick={() => setVisible(!visible)}
      >
        <GrSettingsOption className="text-3xl" />
      </div>

      <form
        className={`${
          visible ? "flex" : "hidden"
        } h-[100px] md:w-[500px] sm:w-[400px] bg-transparent items-start justify-center rounded-lg shadow-lg transition-all duration-300 ease-in-out border border-white gap-6 p-4`}
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Hours */}
        <div className="flex flex-col items-start space-y-1">
          <input
            type="number"
            placeholder="HH"
            {...register("hours", {
              //required: "Field needs to be filled",
              min: { value: 0, message: "Only positive numbers allowed" },
              validate: (value) => !value || value.toString().length <= 2,
              messsage: "Only 2 digits allowed",
            })}
            className="border border-gray-400 px-3 py-2 rounded w-[70px]"
          />
          {errors.hours && (
            <p className="text-red-500 text-sm">{errors.hours.message}</p>
          )}
        </div>

        {/* Minutes */}
        <div className="flex flex-col items-start space-y-1">
          <input
            type="number"
            placeholder="MM"
            {...register("minutes", {
              // required: "Field needs to be filled",
              min: { value: 0, message: "Only positive numbers allowed" },
              validate: (value) =>
                !value ||
                value.toString().length <= 2 ||
                "Only 2 digits allowed",
            })}
            className="border border-gray-400 px-3 py-2 rounded w-[70px]"
          />
          {errors.minutes && (
            <p className="text-red-500 text-sm">{errors.minutes.message}</p>
          )}
        </div>

        {/* Seconds */}
        <div className="flex flex-col items-start space-y-1">
          <input
            type="number"
            placeholder="SS"
            {...register("seconds", {
              //  required: "Field needs to be filled",
              min: { value: 0, message: "Only positive numbers allowed" },
              validate: (value) =>
                !value ||
                value.toString().length <= 2 ||
                "Only 2 digits allowed",
            })}
            className="border border-gray-400 px-3 py-2 rounded w-[70px]"
          />
          {errors.seconds && (
            <p className="text-red-500 text-sm">{errors.seconds.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-3 py-2 ml-4 rounded-3xl w-[70px] h-[40px]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TimerSetting;
