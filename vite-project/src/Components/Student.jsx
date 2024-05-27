import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Sympo from "./Sympo";

const Student = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Drop");
  };

  return (
    <div className=" p-5 flex justify-center items-center">
      <div className="max-w-lg w-full   max-sm:max-w-[320px] max-sm:mx-auto ">
        <h1 className="font-jomolhari text-3xl text-center border-2">
          Student Form
        </h1>
        <form onSubmit={handleSubmit} className="py-8 border-2  px-2">
          <div className="flex flex-col gap-8">
            <div className="flex justify-between">
              <label htmlFor="username" className="text-xl">
                Name:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Name"
                className="text-center rounded-xl outline-none mt-1"
                required
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="rollNo" className="text-xl">
                Roll no:
              </label>
              <input
                type="text"
                id="rollNo"
                placeholder="Roll no"
                className="text-center rounded-xl outline-none mt-1"
                required
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="registerNo" className="text-xl">
                Register no:
              </label>
              <input
                type="text"
                id="registerNo"
                placeholder="Register no"
                className="text-center rounded-xl outline-none mt-1"
                required
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="email" className="text-xl">
                Email ID:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email ID"
                className="text-center rounded-xl outline-none mt-1"
                required
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="age" className="text-xl">
                Age:
              </label>
              <input
                type="number"
                id="age"
                placeholder="Age"
                className="text-center rounded-xl outline-none mt-1"
                required
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="dob" className="text-xl">
                Date of birth:
              </label>
              <input
                type="date"
                id="dob"
                className="text-center rounded-xl outline-none mt-1"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xl">Gender:</label>
              <div className="flex justify-around">
                <label className="text-xl">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="mr-2"
                    required
                  />
                  Male
                </label>
                <label className="text-xl">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="mr-2"
                    required
                  />
                  Female
                </label>
              </div>
            </div>

            <div className="flex justify-between">
              <label htmlFor="studentPhone" className="text-xl">
                Student Phone no:
              </label>
              <input
                type="tel"
                id="studentPhone"
                placeholder="Student phone no"
                className="text-center rounded-xl outline-none mt-1"
                required
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="fatherName" className="text-xl">
                Father Name:
              </label>
              <input
                type="text"
                id="fatherName"
                placeholder="Father Name"
                className="text-center rounded-xl outline-none mt-1"
                required
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="fatherPhone" className="text-xl">
                Father phone no:
              </label>
              <input
                type="tel"
                id="fatherPhone"
                placeholder="Father phone no"
                className="text-center rounded-xl outline-none mt-1"
                required
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="motherName" className="text-xl">
                Mother Name:
              </label>
              <input
                type="text"
                id="motherName"
                placeholder="Mother Name"
                className="text-center rounded-xl outline-none mt-1"
                required
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="motherPhone" className="text-xl">
                Mother phone no:
              </label>
              <input
                type="tel"
                id="motherPhone"
                placeholder="Mother phone no"
                className="text-center rounded-xl outline-none mt-1"
                required
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="address" className="text-xl">
                Address:
              </label>
              <input
                type="text"
                id="address"
                placeholder="Address"
                className="text-center rounded-xl outline-none mt-1"
                required
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="mark10" className="text-xl">
                Enter your 10th mark and percentage:
              </label>
              <input
                type="text"
                id="mark10"
                placeholder="10th Mark"
                className="text-center rounded-xl outline-none mt-1"
                required
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="markSheet10" className="text-xl">
                Your 10th mark Sheet:
              </label>
              <input
                type="file"
                id="markSheet10"
                className="text-center rounded-xl outline-none mt-1"
                required
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="mark12" className="text-xl">
                Enter your 12th mark and percentage:
              </label>
              <input
                type="text"
                id="mark12"
                placeholder="12th Mark"
                className="text-center rounded-xl outline-none mt-1"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="markSheet12" className="text-xl">
                Your 12th mark Sheet:
              </label>
              <input
                type="file"
                id="markSheet12"
                className="text-center rounded-xl  outline-none mt-1"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="mark12" className="text-xl">
                Enter your polytechnic mark and percentage:
              </label>
              <input
                type="text"
                id="mark12"
                placeholder="12th Mark"
                className="text-center rounded-xl outline-none mt-1"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="markSheet12" className="text-xl">
                Your polytechnic mark Sheet:
              </label>
              <input
                type="file"
                id="markSheet12"
                className="text-center rounded-xl  outline-none mt-1"
              />
            </div>
            <button className="py-2 mt-8 flex items-center justify-center gap-2 bg-blue2 hover:bg-black text-white px-6 rounded-2xl duration-300 hover:duration-500">
              Click
              <FaArrowRight />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Student;
