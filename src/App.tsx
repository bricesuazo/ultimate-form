import { useState } from "react";

export default function App() {
  const [form, setForm] = useState<{
    gender: number;
    email: string;
    mobile: string | null;
    generatedMobile: string | null;
  }>({
    gender: 10,
    email: "",
    mobile: null,
    generatedMobile: "09" + Math.floor(Math.random() * 1000000000).toString(),
  });

  console.log("🚀 ~ file: UltimateForm.tsx:10 ~ UltimateForm ~ form:", form);

  return (
    <main className="grid place-items-center h-screen">
      <div className="">
        <h1 className="text-2xl font-bold">Ultimate Form in Ohio</h1>
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
            <div className="flex justify-between">
              <span className="translate-x-[-50%] text-sm text-gray-500">
                Male
              </span>
              <span className="translate-x-[50%] text-sm text-gray-500">
                Female
              </span>
            </div>
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
            <label htmlFor="mobile">Mobile: {form.mobile}</label>

            {form.generatedMobile && (
              <div className="">
                <p>{form.generatedMobile}</p>
                <p>Is this your mobile number?</p>
                <div className="">
                  <button
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
                    type="button"
                    onClick={() =>
                      setForm({
                        ...form,
                        generatedMobile:
                          "09" +
                          Math.floor(Math.random() * 1000000000).toString(),
                      })
                    }
                  >
                    No
                  </button>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
