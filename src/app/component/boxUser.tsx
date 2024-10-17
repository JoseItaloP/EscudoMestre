import Link from "next/link";
import { userMesas } from "../types/UserMesasType";

export default function BoxUser({tittle, description, id}: userMesas){
    return(
        <div key={id} className="p-5 bg-color1-1-200 text-color1-2-100 w-60 h-60 flex flex-col items-center justify-center rounded">
            <p>box: {tittle}</p>
            <p>Desc: {description}</p>
            <Link href={`/mesas/${id}`} className="text-color1-1-500">GO</Link>
        </div>
    )
}