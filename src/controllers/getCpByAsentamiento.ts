import IAsentamientoData from "../Graphql/interface/IAsentamientoData";
import IResponseCP from "../Graphql/interface/IResponseCP";
import Asentamiento from "../Models/AsentamientoModel";

const getCpByAsentamiento = async (d_asenta: string): Promise<IResponseCP> => {
    try {

        const result: IAsentamientoData | null = await Asentamiento.findOne({
            where: {
                d_asenta
            }
        })

        if (!result) return {cp: null, message: "Asentamiento no encontrado"}

        const response: IResponseCP = {
            cp: result.d_CP,
            message: 'Asentamiento encontradp'
        }

        return response
    } catch (error) {
        console.log(error)
        return { cp: null, message: 'Error interno' }
    }
}

export default getCpByAsentamiento;