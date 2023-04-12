class lapiz{
    #marca
    constructor({color = "#702323",
        dimension="19",
        marca="Mongo",
        borrador="true",
        material="Madera"
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
 }
 let obj = undefined;
 let color = document.querySelector(`[name="color"]`)
 addEventListener("DOMContentLoaded", (e)=>{
    obj = new lapiz({});
    color.value = obj.color;
 }) 