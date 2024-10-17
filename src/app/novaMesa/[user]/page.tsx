
export default function novaMesa() {
  return (
      <main className="w-full h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl text-color1-1-300 mb-4">Criando uma nova mesa</h1>
          <form
            action=""
            className="flex flex-col items-center p-5 h-96 w-96 bg-color1-2-500 text-zinc-900"
          >
            <label htmlFor="Titulo" className="text-2xl mt-2">
              Titulo
            </label>
            <input type="text" name="Titulo" id="Titulo" className="w-full p-2" />
            <label htmlFor="Sistema" className="text-2xl mt-2">
              Sistema
            </label>
            <input type="text" name="Sistema" id="Sistema" className="w-full p-2" />
            <label htmlFor="Descrição" className="text-2xl mt-2">
              Descrição
            </label>
            <textarea name="Descrição" id="Descrição" className="w-full h-32 p-2" />

            <button className="p-2 bg-color1-1-200 text-color1-2-300 font-medium mt-2 w-full">Criar minha mesa!</button>
          </form>
      </main>
  );
}
