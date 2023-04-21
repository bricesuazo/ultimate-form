import UltimateForm from "./UltimateForm";

export default function Home() {
  return (
    <main className="grid place-items-center h-screen">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-xl mb-4">The ultimate form in Ohio</h1>
        <div className="">
          <UltimateForm />
        </div>
      </div>
    </main>
  );
}
