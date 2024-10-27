import Asentamiento from "../Models/AsentamientoModel";
import { IResponseAsentamientos, Asentamientos } from "../Graphql/interface/IResponseAsentamiento";

const getAsentamientosByCP = async (codigoPostal: string): Promise<IResponseAsentamientos> => {
    try {
       
        const result: Asentamientos[] = await Asentamiento.findAll({
            attributes:["d_asenta", "d_tipo_asenta", "c_tipo_asenta", "id_asenta_cpcons"],
            where: {
                d_CP: codigoPostal
            }
        });

        if (result.length === 0) return {data: null, message: "No se han encontrado asentamientos para este código postal"}
 

        return { data: result, message: "Asentamientos encontrados" }

    } catch (error) {
        console.log(error);
        return { data: null, message: "Error interno" }
    }
}

export default getAsentamientosByCP;