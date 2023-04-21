"use client";

import { useState } from "react";

export default function UltimateForm() {
  const [form, setForm] = useState({
    gender: 10,
    email: "",
  });
  console.log("🚀 ~ file: UltimateForm.tsx:10 ~ UltimateForm ~ form:", form);
  return (
    <form>
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
      </div>

      <div className="flex flex-col">
        <label htmlFor="email">Email: {form.email}</label>

        <div className="flex overflow-auto">
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
                  .map((e, i) => i + 65)
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
    </form>
  );
}
