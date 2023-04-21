import { useState } from "react";
import { nationalities } from "./contants";

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
    age: number;
    nationality: number;
  }>({
    gender: 10,
    email: "",
    mobile: null,
    generatedMobile: getRandomMobileNo(),
    birthMonth: "April",
    age: 69,
    nationality: 0,
  });

  return (
    <main className="mx-auto max-w-lg space-y-8 px-4 py-8">
      <div className="space-y-4">
        <div className="">
          <h1 className="text-center text-2xl font-bold">
            Ultimate Form in Ohio
          </h1>
          <p className="text-center">
            Created by:{" "}
            <a href="https://link.bricesuazo.com" target="_blank">
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
          <label htmlFor="nationality">
            Nationality: {nationalities[form.nationality]}
          </label>
          <input
            type="range"
            name="Nationality"
            id="nationality"
            value={form.nationality}
            onChange={(e) =>
              setForm((form) => ({
                ...form,
                nationality: Number(e.target.value),
              }))
            }
            max={nationalities.length}
          />
        </div>

        <div className="">
          <label htmlFor="color">Skin complexion:</label>
          <input type="color" name="Color" id="color" />
        </div>

        <div>
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

        <div>
          <label htmlFor="age">Age: {form.age}</label>
          <div className="grid grid-cols-6 gap-2 3xs:grid-cols-8 2xs:grid-cols-9 xs:grid-cols-10 sm:grid-cols-12">
            {Array.from(Array(100)).map((_, i) => (
              <div key={i} className="flex items-center gap-x-1">
                <input
                  id={`age-${i}`}
                  type="radio"
                  checked={form.age === i}
                  value={i}
                  name="age"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      age: Number(e.target.value),
                    })
                  }
                />
                <label htmlFor={`age-${i}`}>{i}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="email">Email: {form.email}</label>

          <div className="grid grid-cols-3 gap-1 2xs:grid-cols-4 xs:grid-cols-6">
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
      </div>
      <button className="w-full" onClick={() => alert("Submit it in your ass")}>
        Submit
      </button>

      <div className="flex items-center justify-center">
        <a
          href="https://github.com/bricesuazo/ultimate-form"
          target="_blank"
          className="flex items-center gap-x-2 p-2 text-gray-800 hover:no-underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <p className="">GitHub Repo</p>
        </a>
      </div>
    </main>
  );
}
