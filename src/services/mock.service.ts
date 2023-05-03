import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  private getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  public getData() {
    return of(this.mapData([
      {
        "fechaSaldo": "Actual",
        "empresa": {
          "codigo": "199",
          "descripcion": "Repsol"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "GO",
          "descripcion": "Operativo GNAS y GOS"
        },
        "instalacion": {
          "codigo": "I140",
          "descripcion": "Instalacion I140"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-01",
        "empresa": {
          "codigo": "199",
          "descripcion": "Repsol"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "GO",
          "descripcion": "Operativo GNAS y GOS"
        },
        "instalacion": {
          "codigo": "I140",
          "descripcion": "Instalacion I140"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-02",
        "empresa": {
          "codigo": "199",
          "descripcion": "Repsol"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "GO",
          "descripcion": "Operativo GNAS y GOS"
        },
        "instalacion": {
          "codigo": "I140",
          "descripcion": "Instalacion I140"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-03",
        "empresa": {
          "codigo": "199",
          "descripcion": "Repsol"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "GO",
          "descripcion": "Operativo GNAS y GOS"
        },
        "instalacion": {
          "codigo": "I140",
          "descripcion": "Instalacion I140"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-01",
        "empresa": {
          "codigo": "199",
          "descripcion": "Repsol"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "GO",
          "descripcion": "Operativo GNAS y GOS"
        },
        "instalacion": {
          "codigo": "I270",
          "descripcion": "Instalacion I270"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-02",
        "empresa": {
          "codigo": "199",
          "descripcion": "Repsol"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "GO",
          "descripcion": "Operativo GNAS y GOS"
        },
        "instalacion": {
          "codigo": "I270",
          "descripcion": "Instalacion I270"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-03",
        "empresa": {
          "codigo": "199",
          "descripcion": "Repsol"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "GO",
          "descripcion": "Operativo GNAS y GOS"
        },
        "instalacion": {
          "codigo": "I140",
          "descripcion": "Instalacion I270"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "Actual",
        "empresa": {
          "codigo": "3104",
          "descripcion": "Cepsa"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "GO",
          "descripcion": "Operativo GNAS y GOS"
        },
        "instalacion": {
          "codigo": "I140",
          "descripcion": "Instalacion I140"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-01",
        "empresa": {
          "codigo": "3104",
          "descripcion": "Cepsa"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "GO",
          "descripcion": "Operativo GNAS y GOS"
        },
        "instalacion": {
          "codigo": "I140",
          "descripcion": "Instalacion I140"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-02",
        "empresa": {
          "codigo": "3104",
          "descripcion": "Cepsa"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "GO",
          "descripcion": "Operativo GNAS y GOS"
        },
        "instalacion": {
          "codigo": "I140",
          "descripcion": "Instalacion I140"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-03",
        "empresa": {
          "codigo": "3104",
          "descripcion": "Cepsa"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "GO",
          "descripcion": "Operativo GNAS y GOS"
        },
        "instalacion": {
          "codigo": "I140",
          "descripcion": "Instalacion I140"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-01",
        "empresa": {
          "codigo": "3104",
          "descripcion": "Cepsa"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "GO",
          "descripcion": "Operativo GNAS y GOS"
        },
        "instalacion": {
          "codigo": "I270",
          "descripcion": "Instalacion I270"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-02",
        "empresa": {
          "codigo": "3104",
          "descripcion": "Cepsa"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "GO",
          "descripcion": "Operativo GNAS y GOS"
        },
        "instalacion": {
          "codigo": "I270",
          "descripcion": "Instalacion I270"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-03",
        "empresa": {
          "codigo": "3104",
          "descripcion": "Cepsa"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "GO",
          "descripcion": "Operativo GNAS y GOS"
        },
        "instalacion": {
          "codigo": "I140",
          "descripcion": "Instalacion I270"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "Actual",
        "empresa": {
          "codigo": "3104",
          "descripcion": "Cepsa"
        },
        "producto": {
          "codigo": "103",
          "descripcion": "GNA-98"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "GO",
          "descripcion": "Operativo GNAS y GOS"
        },
        "instalacion": {
          "codigo": "I140",
          "descripcion": "Instalacion I140"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-01",
        "empresa": {
          "codigo": "3104",
          "descripcion": "Cepsa"
        },
        "producto": {
          "codigo": "103",
          "descripcion": "GNA-98"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "GO",
          "descripcion": "Operativo GNAS y GOS"
        },
        "instalacion": {
          "codigo": "I140",
          "descripcion": "Instalacion I140"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-02",
        "empresa": {
          "codigo": "3104",
          "descripcion": "Cepsa"
        },
        "producto": {
          "codigo": "103",
          "descripcion": "GNA-98"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "GO",
          "descripcion": "Operativo GNAS y GOS"
        },
        "instalacion": {
          "codigo": "I140",
          "descripcion": "Instalacion I140"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-03",
        "empresa": {
          "codigo": "3104",
          "descripcion": "Cepsa"
        },
        "producto": {
          "codigo": "103",
          "descripcion": "GNA-98"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "GO",
          "descripcion": "Operativo GNAS y GOS"
        },
        "instalacion": {
          "codigo": "I140",
          "descripcion": "Instalacion I140"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-01",
        "empresa": {
          "codigo": "3104",
          "descripcion": "Cepsa"
        },
        "producto": {
          "codigo": "103",
          "descripcion": "GNA-98"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "GO",
          "descripcion": "Operativo GNAS y GOS"
        },
        "instalacion": {
          "codigo": "I270",
          "descripcion": "Instalacion I270"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-02",
        "empresa": {
          "codigo": "3104",
          "descripcion": "Cepsa"
        },
        "producto": {
          "codigo": "103",
          "descripcion": "GNA-98"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "GO",
          "descripcion": "Operativo GNAS y GOS"
        },
        "instalacion": {
          "codigo": "I270",
          "descripcion": "Instalacion I270"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-03",
        "empresa": {
          "codigo": "3104",
          "descripcion": "Cepsa"
        },
        "producto": {
          "codigo": "103",
          "descripcion": "GNA-98"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "GO",
          "descripcion": "Operativo GNAS y GOS"
        },
        "instalacion": {
          "codigo": "I140",
          "descripcion": "Instalacion I270"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "Actual",
        "empresa": {
          "codigo": "199",
          "descripcion": "Repsol"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "Q0",
          "descripcion": "Operativo Querosenos"
        },
        "instalacion": {
          "codigo": "I140",
          "descripcion": "Instalacion I140"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-01",
        "empresa": {
          "codigo": "199",
          "descripcion": "Repsol"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "Q0",
          "descripcion": "Operativo Querosenos"
        },
        "instalacion": {
          "codigo": "I140",
          "descripcion": "Instalacion I140"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-02",
        "empresa": {
          "codigo": "199",
          "descripcion": "Repsol"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "Q0",
          "descripcion": "Operativo Querosenos"
        },
        "instalacion": {
          "codigo": "I140",
          "descripcion": "Instalacion I140"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-03",
        "empresa": {
          "codigo": "199",
          "descripcion": "Repsol"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "Q0",
          "descripcion": "Operativo Querosenos"
        },
        "instalacion": {
          "codigo": "I140",
          "descripcion": "Instalacion I140"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-01",
        "empresa": {
          "codigo": "199",
          "descripcion": "Repsol"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "Q0",
          "descripcion": "Operativo Querosenos"
        },
        "instalacion": {
          "codigo": "I270",
          "descripcion": "Instalacion I270"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-02",
        "empresa": {
          "codigo": "199",
          "descripcion": "Repsol"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "Q0",
          "descripcion": "Operativo Querosenos"
        },
        "instalacion": {
          "codigo": "I270",
          "descripcion": "Instalacion I270"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-03",
        "empresa": {
          "codigo": "199",
          "descripcion": "Repsol"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "Q0",
          "descripcion": "Operativo Querosenos"
        },
        "instalacion": {
          "codigo": "I140",
          "descripcion": "Instalacion I270"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "Actual",
        "empresa": {
          "codigo": "2035",
          "descripcion": "BP"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "Q0",
          "descripcion": "Operativo Querosenos"
        },
        "instalacion": {
          "codigo": "I140",
          "descripcion": "Instalacion I140"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-01",
        "empresa": {
          "codigo": "2035",
          "descripcion": "BP"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "Q0",
          "descripcion": "Operativo Querosenos"
        },
        "instalacion": {
          "codigo": "I140",
          "descripcion": "Instalacion I140"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-02",
        "empresa": {
          "codigo": "2035",
          "descripcion": "BP"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "Q0",
          "descripcion": "Operativo Querosenos"
        },
        "instalacion": {
          "codigo": "I140",
          "descripcion": "Instalacion I140"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-03",
        "empresa": {
          "codigo": "2035",
          "descripcion": "BP"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "Q0",
          "descripcion": "Operativo Querosenos"
        },
        "instalacion": {
          "codigo": "I140",
          "descripcion": "Instalacion I140"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-01",
        "empresa": {
          "codigo": "2035",
          "descripcion": "BP"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "Q0",
          "descripcion": "Operativo Querosenos"
        },
        "instalacion": {
          "codigo": "I270",
          "descripcion": "Instalacion I270"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-02",
        "empresa": {
          "codigo": "2035",
          "descripcion": "BP"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "Q0",
          "descripcion": "Operativo Querosenos"
        },
        "instalacion": {
          "codigo": "I270",
          "descripcion": "Instalacion I270"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      },
      {
        "fechaSaldo": "2023-01-03",
        "empresa": {
          "codigo": "2035",
          "descripcion": "BP"
        },
        "producto": {
          "codigo": "101",
          "descripcion": "GNA-95"
        },
        "tipoCuenta": "Cuentas en destino",
        "tipoStock": "Stock Operativo",
        "contrato": {
          "codigo": "Q0",
          "descripcion": "Operativo Querosenos"
        },
        "instalacion": {
          "codigo": "I140",
          "descripcion": "Instalacion I270"
        },
        "situacion": "DISPONIBLE",
        "saldo": 0
      }
    ]))
  }

  private mapData(array: any[]): any[] {
    return array.map(element => (
      {
        ...element,
        saldo: this.getRandomInt(1500, 90000),
        empresa: `(${element.empresa.codigo}) ${element.empresa.descripcion}`,
        producto: `(${element.producto.codigo}) ${element.producto.descripcion}`,
        contrato: `(${element.contrato.codigo}) ${element.contrato.descripcion}`,
        instalacion: `(${element.instalacion.codigo}) ${element.instalacion.descripcion}`
      }))
  }
}
