
import { Component } from '@angular/core';

interface Fruta {
  nombre: string;
  calorias: number;
  carbohidratos: number;
  proteinas: number;
  grasas: number;
  fibra: number;
  imagen: string;
}

@Component({
  selector: 'app-informacionalimentos',
  templateUrl: './informacionalimentos.component.html',
  styleUrls: ['./informacionalimentos.component.css']
})

export class InformacionalimentosComponent {

      datosTabla: Fruta[] = [];
      datosTablaFiltrados: Fruta[] = [];
      pageSize = 5;
      currentPage = 1;
      totalPages = 1;
    
  frutas: Fruta[] = [
    { 
      nombre: 'Manzana Roja', 
      calorias: 52, 
      carbohidratos: 14, 
      proteinas: 0.3, 
      grasas: 0.2, 
      fibra: 2.4, 
      imagen: 'https://via.placeholder.com/100x100?text=Manzana+Roja'
    },
    { 
      nombre: 'Banano', 
      calorias: 89, 
      carbohidratos: 23, 
      proteinas: 1.1, 
      grasas: 0.3, 
      fibra: 2.6, 
      imagen: 'https://via.placeholder.com/100x100?text=Banano'
    },
    { 
      nombre: 'Fresa', 
      calorias: 33, 
      carbohidratos: 100, 
      proteinas: 0.7, 
      grasas: 0.3,fibra: 2.0,
      imagen: 'https://via.placeholder.com/100x100?text=Fresa'
      },
      { 
        nombre: 'Pera', 
        calorias: 57, 
        carbohidratos: 15, 
        proteinas: 0.4, 
        grasas: 0.2, 
        fibra: 3.1, 
        imagen: 'https://via.placeholder.com/100x100?text=Pera'
      },
      { 
        nombre: 'Mango', 
        calorias: 99, 
        carbohidratos: 25, 
        proteinas: 0.8, 
        grasas: 0.4, 
        fibra: 2.6, 
        imagen: 'https://via.placeholder.com/100x100?text=Mango'
      },
      { 
        nombre: 'Sandía', 
        calorias: 30, 
        carbohidratos: 8, 
        proteinas: 0.6, 
        grasas: 0.2, 
        fibra: 0.4, 
        imagen: 'https://via.placeholder.com/100x100?text=Sandía'
      },
      { 
        nombre: 'Melón', 
        calorias: 34, 
        carbohidratos: 8, 
        proteinas: 0.8, 
        grasas: 0.2, 
        fibra: 0.9, 
        imagen: 'https://via.placeholder.com/100x100?text=Melón'
      },
      { 
        nombre: 'Kiwi', 
        calorias: 61, 
        carbohidratos: 15, 
        proteinas: 1.1, 
        grasas: 0.5, 
        fibra: 2.3, 
        imagen: 'https://via.placeholder.com/100x100?text=Kiwi'
      },{ 
        nombre: 'Lechuga', 
        calorias: 15, 
        carbohidratos: 2.9, 
        proteinas: 1.4, 
        grasas: 0.2, 
        fibra: 1.3, 
        imagen: 'https://via.placeholder.com/100x100?text=Lechuga'
      },
      { 
        nombre: 'Espinaca', 
        calorias: 23, 
        carbohidratos: 3.6, 
        proteinas: 2.9, 
        grasas: 0.4, 
        fibra: 2.2, 
        imagen: 'https://via.placeholder.com/100x100?text=Espinaca'
      },
      { 
        nombre: 'Brócoli', 
        calorias: 34, 
        carbohidratos: 6.6, 
        proteinas: 2.8, 
        grasas: 0.4, 
        fibra: 2.6, 
        imagen: 'https://via.placeholder.com/100x100?text=Br%C3%B3coli'
      },
      { 
        nombre: 'Coliflor', 
        calorias: 25, 
        carbohidratos: 5, 
        proteinas: 2, 
        grasas: 0.3, 
        fibra: 2.5, 
        imagen: 'https://via.placeholder.com/100x100?text=Coliflor'
      },
      { 
        nombre: 'Zanahoria', 
        calorias: 41, 
        carbohidratos: 10, 
        proteinas: 0.9, 
        grasas: 0.2, 
        fibra: 2.8, 
        imagen: 'https://via.placeholder.com/100x100?text=Zanahoria'
      },
      { 
        nombre: 'Pimiento', 
        calorias: 20, 
        carbohidratos: 3.9, 
        proteinas: 0.9, 
        grasas: 0.2, 
        fibra: 1.5, 
        imagen: 'https://via.placeholder.com/100x100?text=Pimiento'
      },
      { 
        nombre: 'Cebolla', 
        calorias: 40, 
        carbohidratos: 9, 
        proteinas: 1.1, 
        grasas: 0.1, 
        fibra: 1.7, 
        imagen: 'https://via.placeholder.com/100x100?text=Cebolla'
      },
      { 
        nombre: 'Ajo', 
        calorias: 149, 
        carbohidratos: 33, 
        proteinas: 6, 
        grasas: 0.5, 
        fibra: 2.1, 
        imagen: 'https://via.placeholder.com/100x100?text=Ajo'
      },
      { 
        nombre: 'Calabacín', 
        calorias: 17, 
        carbohidratos: 3.1, 
        proteinas: 1.2, 
        grasas: 0.3, 
        fibra: 1.1, 
        imagen: 'https://via.placeholder.com/100x100?text=Calabac%C3%ADn'
      }
      // Agregar más frutas aquí...
      ];
      
     
      constructor() {
        this.datosTabla = this.frutas;
        this.filtrarTabla('');
      }
      
      ngOnInit(): void {
        this.totalPages = this.getTotalPages();
      }
    
      filtrarTabla(termino: string) {
        if (termino !== '') {
          this.datosTablaFiltrados = this.datosTabla.filter((fruta: Fruta) => {
            return fruta.nombre.toLowerCase().includes(termino.toLowerCase());
          });
        } else {
          this.datosTablaFiltrados = this.datosTabla;
        }
        
        this.currentPage = 1;
        this.paginarTabla();
      }
      
      paginarTabla() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        this.datosTablaFiltrados = this.datosTablaFiltrados.slice(start, end);
        this.totalPages = Math.ceil(this.datosTablaFiltrados.length / this.pageSize);
      }
    
      getTotalPages(): number {
        return Math.ceil(this.datosTablaFiltrados.length / this.pageSize);
      }

      }