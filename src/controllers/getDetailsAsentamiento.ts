import {IResponseDetailsAsentamiento, detailsAsentamiento} from "../Graphql/interface/IResponseDetailsAsentamiento";
import Asentamiento from "../Models/AsentamientoModel";

const getDetailsAsentamiento = async(d_asenta: string): Promise<IResponseDetailsAsentamiento> => {
    try {
        
        const result: detailsAsentamiento | null = await Asentamiento.findOne({
            attributes: [
                "c_estado",
                "c_mnpio",
                "c_tipo_asenta",
                "d_CP", "d_estado",
                "D_mnpio",
                "d_tipo_asenta"],
                
            where: {
                d_asenta
            }
        });

    if (!result) return {data: null, message: "No se han encontrado detalles"}    
    
    const response: IResponseDetailsAsentamiento = {
        data: result,
        message: "Se ha encontrado los detalles del Asentamiento"
    }

    return response

    } catch (error) {
        console.log(error);
        return {data: null, message: 'Error interno'}
    }
}

export default getDetailsAsentamiento;