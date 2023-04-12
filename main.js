class lapiz{
    #marca
    constructor({color = "#702323",
        dimension="10",
        marca="Mongo",
        borrador="Tiene",
        material= "Madera",
    }){
        this.color = color;
        this.dimension = dimension;
        this.borrador = borrador;
        this.material = material;
        this.#marca = marca;
    }
    getColor(){
        return this.color;
    }
    getDimension(){
        return this.dimension;
    }
    getMarca(){
        return this.marca;
    }
    getBorrador(){
        return this.borrador;
    }
    getMaterial(){
        return this.material;
    }

 }
 let obj = undefined;
 let color = document.querySelector(`[name="color"]`)
 let dimension = document.querySelector(`[name="dimension"]`)
 let marca = Mongo.checked = true ;
 let borrador = True.checked = true ;
 let material = Madera.checked = true ;

 addEventListener("DOMContentLoaded", (e)=>{
    obj = new lapiz({});
    color.value = obj.color;
    dimension.value = obj.dimension;
    document.getElementById("Mongo").innerHTML = obj.material;
    document.getElementById("True").innerHTML = obj.material;
    document.getElementById("Madera").innerHTML = obj.material;
 }) 