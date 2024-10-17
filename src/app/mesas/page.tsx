import { userMesas } from "../types/UserMesasType";
import BoxUser from "../component/boxUser";

export default function Teste() {
  const userMesas: userMesas[] = [
    {
      tittle: "tittle",
      description: "description",
      id: 1234,
    },
    {
      tittle: "tittle2",
      description: "description2",
      id: 4322,
    },
    {
      tittle: "tittle3",
      description: "description3",
      id: 4323,
    },
    {
      tittle: "tittle3",
      description: "description3",
      id: 4324,
    },
    {
      tittle: "tittle4",
      description: "description4",
      id: 4312,
    },
  ];
  return (
    <>
      {userMesas.map((mesa) => (
        <BoxUser
          tittle={mesa.tittle}
          description={mesa.description}
          id={mesa.id}
          key={mesa.id}
        />
      ))}
    </>
  );
}
