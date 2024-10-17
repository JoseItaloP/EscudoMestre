import NewBox from "../component/NewBox";

export default function layoutMesas({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <main
      className="w-3/4 h-full bg-color1-2-100
        PC:w-9/12">
      <section className="text-center flex flex-col items-center">
        <h1 className="text-4xl mb-2 mt-4">
          Todas as suas mesas, <span>USER</span>
        </h1>
        <NewBox />
      </section>
      <article
        className="
        grid grid-cols-1 gap-2 mt-5 justify-items-center
        tablet:grid-cols-2
        laptop:grid-cols-3
        PC:grid-cols-4
        largePC:grid-cols-5
        "
      >
        {children}
      </article>
    
        {modal}
    </main>
  );
}
