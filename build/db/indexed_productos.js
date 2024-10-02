// db/indexed_productos.js

let db;
const dbName = 'ProductosDB';
const storeName = 'productos';

export function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);
        
        request.onerror = event => reject("Error al abrir DB");
        
        request.onsuccess = event => {
            db = event.target.result;
            resolve(db);
        };
        
        request.onupgradeneeded = event => {
            const db = event.target.result;
            const objectStore = db.createObjectStore(storeName, { keyPath: "CODPROD" });
            objectStore.createIndex("DESPROD", "DESPROD", { unique: false });
        };
    });
}

export function saveProductos(productos) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], "readwrite");
        const objectStore = transaction.objectStore(storeName);
        
        productos.forEach(producto => {
            producto.cantidad = 0; // Inicializamos la cantidad en 0
            const request = objectStore.put(producto);
            request.onerror = event => reject("Error al guardar producto");
        });
        
        transaction.oncomplete = event => resolve("Productos guardados");
    });
}

export function updateProductoCantidad(idProducto, nuevaCantidad) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], "readwrite");
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.get(idProducto);
        
        request.onerror = event => reject("Error al obtener producto");
        
        request.onsuccess = event => {
            const producto = event.target.result;
            producto.cantidad = nuevaCantidad;
            const updateRequest = objectStore.put(producto);
            
            updateRequest.onerror = event => reject("Error al actualizar producto");
            updateRequest.onsuccess = event => resolve(producto);
        };
    });
}

export function getAllProductos() {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], "readonly");
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.getAll();
        
        request.onerror = event => reject("Error al obtener productos");
        request.onsuccess = event => resolve(event.target.result);
    });
}