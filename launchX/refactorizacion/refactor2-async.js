let productModel = {
    outdated: []
}

const productosActualizar = await productModel.find({outdated: false}); //Solo encuentra los no desactualizados

//Forma sucia
for (const key in productosActualizar){
    const producto = productosActualizar[key];
    producto.outdated = false;
    await producto.save();
}

//Alternativa limpia
await productModel.update({outdated:true}), {
    $set: {
        outdated:false
    }
}