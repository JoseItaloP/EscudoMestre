export default function MesaPage({params}: {params: {section: string}}) {
  return (
    <div>
        <h1>Mesa: {params.section} </h1>
    </div>
  )
}
