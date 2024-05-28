import { SaibaMaisInicio } from './SaibaMaisInicio';

export const ProcessosInicio = () => {
  return (
    <div className="w-[400px] bg-[#F9FAFC] rounded-r-3xl flex flex-col justify-between items-center">
      <div className="mt-20">
        <h1 className="text-3xl font-black italic text-blue-color-text">
          Processos
        </h1>

        <div className="flex justify-between items-start mr-5 my-5">
          <div>
            <h2 className="text-lg font-medium">Roberto [Caso 171]</h2>
            <p className="text-sm font-medium text-txt-menu-color">
              Status: Esperando aval do
              <br />
              juiz para...
            </p>
          </div>

          <span className="text-3xl font-extrabold ml-10 cursor-pointer">
            ...
          </span>
        </div>
        <div className="flex justify-between items-start mr-5 my-5">
          <div>
            <h2 className="text-lg font-medium">Roberto [Caso 171]</h2>
            <p className="text-sm font-medium text-txt-menu-color">
              Status: Esperando aval do
              <br />
              juiz para...
            </p>
          </div>

          <span className="text-3xl font-extrabold ml-10 cursor-pointer">
            ...
          </span>
        </div>
        <div className="flex justify-between items-start mr-5 my-5">
          <div>
            <h2 className="text-lg font-medium">Roberto [Caso 171]</h2>
            <p className="text-sm font-medium text-txt-menu-color">
              Status: Esperando aval do
              <br />
              juiz para...
            </p>
          </div>

          <span className="text-3xl font-extrabold ml-10 cursor-pointer">
            ...
          </span>
        </div>
      </div>

      <div>
        <SaibaMaisInicio />
      </div>
    </div>
  );
};
