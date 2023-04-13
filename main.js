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
        return this.#marca;
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
 
 /* Show Table*/
const form = document.querySelector("#form")
 const table = document.querySelector("#table tbody")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const colorData = formData.get("color");
    const dimensionData = formData.get("dimension");
    const marcaData = formData.get("marca");
    const borradorData = formData.get("borrador");
    const materialData = formData.get("material");

    const pencil = new lapiz({color: colorData, dimension: dimensionData, marca: marcaData, borrador:borradorData, material:materialData})

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td style= "background-color: ${pencil.getColor()}">${pencil.getColor()}</td>
        <td>${pencil.getDimension()}</td>
        <td>${pencil.getMarca()}</td>
        <td>${pencil.getBorrador()}</td>
        <td>${pencil.getMaterial()}</td>
        `;
    table.appendChild(newRow);
    console.log(pencil);

})