import { useState } from "react";
import { Link } from "react-router-dom";

export default function App() {
  const getRandomMobileNo = () => {
    return (
      "09" +
      Math.floor(
        Math.pow(10, 9 - 1) + Math.random() * 9 * Math.pow(10, 9 - 1)
      ).toString()
    );
  };
  const [form, setForm] = useState<{
    gender: number;
    email: string;
    mobile: string | null;
    generatedMobile: string | null;
    birthMonth: string;
  }>({
    gender: 10,
    email: "",
    mobile: null,
    generatedMobile: getRandomMobileNo(),
    birthMonth: "April",
  });

  return (
    <main className="mx-auto max-w-lg px-4 py-8">
      <div className="space-y-4">
        <div className="">
          <h1 className="text-center text-2xl font-bold">
            Ultimate Form in Ohio
          </h1>
          <p className="text-center">
            Created by:{" "}
            <a href="https://github.com/bricesuazo" target="_blank">
              Brice Suazo
            </a>
          </p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="gender">
            Gender:{" "}
            {form.gender === 10
              ? null
              : Math.abs(form.gender - 10) * 10 +
                "% " +
                (form.gender < 10 ? "Male" : "Female")}
          </label>
          <input
            id="gender"
            type="range"
            name="Gender"
            value={form.gender}
            onChange={(e) =>
              setForm((form) => ({
                ...form,
                gender: Number(e.target.value),
              }))
            }
            min={0}
            max={20}
          />
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Male</span>
            <span className="text-sm text-gray-500">Female</span>
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="email">Email: {form.email}</label>

          <div className="flex flex-wrap gap-y-1">
            {form.email
              .split("")
              .concat("")
              .map((x, i) => (
                <select
                  key={i}
                  name="Email"
                  id="email"
                  value={x}
                  onChange={(e) =>
                    setForm((form) => ({
                      ...form,
                      email:
                        form.email.slice(0, i) +
                        e.target.value +
                        form.email.slice(i + 1),
                    }))
                  }
                  required
                >
                  <option disabled value="">
                    Letter
                  </option>
                  <option value=".">.</option>
                  <option value="@">@</option>
                  {Array.from(Array(26))
                    .map((_, i) => i + 65)
                    .map((x) => (
                      <option
                        key={x}
                        value={String.fromCharCode(x).toLowerCase()}
                      >
                        {String.fromCharCode(x)}
                      </option>
                    ))}
                  {Array.from(Array(10).keys()).map((x) => (
                    <option key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </select>
              ))}
          </div>
          {form.email && (
            <button
              onClick={() =>
                setForm((form) => ({
                  ...form,
                  email: "",
                }))
              }
            >
              Clear email
            </button>
          )}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-x-2">
            <label htmlFor="mobile">Mobile Number: {form.mobile}</label>
            {form.mobile && (
              <button
                className="rounded-full px-2 py-1 text-xs"
                onClick={() =>
                  setForm({
                    ...form,
                    mobile: null,
                    generatedMobile: getRandomMobileNo(),
                  })
                }
              >
                Clear
              </button>
            )}
          </div>
          {form.generatedMobile && (
            <div className="space-y-2">
              <p>
                {form.generatedMobile} {"<-- Is this your mobile number?"}
              </p>
              <div className="flex gap-x-2">
                <button
                  className="flex-grow"
                  onClick={() =>
                    setForm({
                      ...form,
                      mobile: form.generatedMobile,
                      generatedMobile: "",
                    })
                  }
                >
                  Yes
                </button>
                <button
                  className="flex-grow"
                  onClick={() =>
                    setForm({
                      ...form,
                      generatedMobile: getRandomMobileNo(),
                    })
                  }
                >
                  No
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="">
          <label htmlFor="birth-month">Birth month: {form.birthMonth}</label>

          <select
            name="Birth Month"
            id="birth-month"
            value={form.birthMonth}
            onChange={(e) =>
              setForm((form) => ({
                ...form,
                birthMonth: e.target.value,
              }))
            }
            required
          >
            <option disabled value="">
              Month
            </option>
            {[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ]
              .sort()
              .map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
          </select>
        </div>
      </div>
    </main>
  );
}
