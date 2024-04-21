export type Guitar = { // Creamos el type (estructura de datos o agrupar propiedades en un objeto) Guitar 
    id: number
    name: string
    image: string
    description: string
    price: number
}

export type CartItem = Guitar & { // Creamos el type CartItem copiando el type Guitar y agregamos la propiedad quantity
    quantity: number
}