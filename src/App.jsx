import ButtonPrimary from "./Components/Buttons/ButtonPrimary";

export default function App() {
  return (
    <div className="p-4">
      <div className="my-4">
        <h1 className="text-2xl font-bold">Botones</h1>
      </div>
      <div className="my-4">
        <h3 className="text-lg font-bold">Extra Small</h3>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <div className="bg-slate-900 border-2 border-slate-800 rounded-lg p-4 shadow-md flex items-center justify-center">
          <ButtonPrimary
            text="Button Component"
            size="xsm"
            bgColor="wewak-500"
            className="transition-colors hover:bg-wewak-700 hover:text-white"
          />
        </div>
        <div className="bg-slate-900 border-2 border-slate-800 rounded-lg p-4 shadow-md flex items-center justify-center">
          <ButtonPrimary
            text="Button Component"
            size="xsm"
            bgColor="biloba-flower-500"
            textColor="white"
            // width="150px"
          />
        </div>
        <div className="bg-slate-900 border-2 border-slate-800 rounded-lg p-4 shadow-md flex items-center justify-center">
          <ButtonPrimary
            text="Button Component"
            size="xsm"
            bgColor="perano-500"
            textColor="perano-500"
          />
        </div>
        <div className="bg-slate-900 border-2 border-slate-800 rounded-lg p-4 shadow-md flex items-center justify-center">
          <ButtonPrimary
            text="Button Component"
            size="xsm"
            bgColor="water-leaf-500"
            textColor="black"
            // width="200px"
          />
        </div>
        <div className="bg-slate-900 border-2 border-slate-800 rounded-lg p-4 shadow-md flex items-center justify-center">
          <ButtonPrimary
            text="Button Component"
            size="xsm"
            bgColor="granny-smith-apple-500"
            // textColor="white"
            // width="200px"
          />
        </div>
      </div>
      <div className="my-4">
        <h3 className="text-lg font-bold">Small</h3>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <div className="bg-slate-900 border-2 border-slate-800 rounded-lg p-4 shadow-md flex items-center justify-center">
          <ButtonPrimary
            text="Button Component"
            size="sm"
            bgColor="zombie-500"
            textColor="white"
            // width="100px"
          />
        </div>
        <div className="bg-slate-900 border-2 border-slate-800 rounded-lg p-4 shadow-md flex items-center justify-center">
          <ButtonPrimary
            text="Button Component"
            size="sm"
            bgColor="sea-pink-500"
            textColor="white"
            // width="150px"
          />
        </div>
        <div className="bg-slate-900 border-2 border-slate-800 rounded-lg p-4 shadow-md flex items-center justify-center">
          <ButtonPrimary
            text="Button Component"
            size="sm"
            // bgColor="red-500"
            // textColor="white"
          />
        </div>
        <div className="bg-slate-900 border-2 border-slate-800 rounded-lg p-4 shadow-md flex items-center justify-center">
          <ButtonPrimary
            text="Button Component"
            size="sm"
            // bgColor="yellow-400"
            // textColor="black"
            // width="200px"
          />
        </div>
        <div className="bg-slate-900 border-2 border-slate-800 rounded-lg p-4 shadow-md flex items-center justify-center">
          <ButtonPrimary
            text="Button Component"
            size="sm"
            // bgColor="gray-600"
            // textColor="white"
            // width="200px"
          />
        </div>
      </div>
    </div>
  );
}
