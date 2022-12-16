let productModel = {
    outdated: []
}

const productosActualizar = await productModel.find({outdated: false}); //Solo encuentra los no desactualizados
