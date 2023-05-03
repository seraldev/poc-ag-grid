import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MockService } from 'src/services';

import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, ColGroupDef, ColumnApi, GridApi, GridReadyEvent, SideBarDef } from 'ag-grid-community';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Each Column Definition results in one Column.
  public columnDefs: (ColDef | ColGroupDef)[] = [
    {
      headerName: ' ',
      headerCheckboxSelection: false,
      checkboxSelection: false,
      floatingFilter: false,
      suppressMenu: true,
      minWidth: 55,
      maxWidth: 55,
      width: 55,
      flex: 0,
      resizable: false,
      sortable: false,
      editable: false,
      filter: false,
      suppressColumnsToolPanel: true,
    },
    { field: 'fechaSaldo', enablePivot: true, enableRowGroup: true },
    { field: 'empresa', enablePivot: true, enableRowGroup: true },
    { field: 'producto', enablePivot: true, enableRowGroup: true },
    { field: 'tipoCuenta', enablePivot: true, enableRowGroup: true },
    { field: 'tipoStock', enablePivot: true, enableRowGroup: true },
    { field: 'contrato', enablePivot: true, enableRowGroup: true },
    { field: 'instalacion', enablePivot: true, enableRowGroup: true },
    { field: 'situacion', enablePivot: true, enableRowGroup: true },
    { field: 'saldo', enablePivot: true, aggFunc: 'sum', enableRowGroup: true },
  ];

  public rowSelection: 'single' | 'multiple' = 'multiple';

  public defaultColDef: ColDef = {
    editable: true,
    sortable: true,
    minWidth: 100,
    filter: true,
    resizable: true,
    floatingFilter: true,
    flex: 1,
  };

  public sideBar: SideBarDef | string | string[] | boolean | null = {
    toolPanels: ['columns', 'filters'],
    defaultToolPanel: '',
  };

  public pivotPanelShow: 'always' | 'onlyWhenPivoting' | 'never' = 'always';

  private gridApi: GridApi;
  private gridColumnApi: ColumnApi;

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private http: HttpClient, private mockService: MockService) {
    this.gridApi = {} as GridApi<any>;
    this.gridColumnApi = {} as ColumnApi;
  }

  // Example load data from server
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.mockService.getData();
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    // this.agGrid.api.deselectAll();
  }

  // onGetPivotData() {
  //   console.log('this.gridColumnApi: ', this.gridColumnApi);

  //   // const pivotColumns = this.gridColumnApi.getColumnGroupColumns();
  //   const pivotColumns = this.gridColumnApi.getColumnGroup;
  //   const rowGroupColumns = this.gridColumnApi.getRowGroupColumns();
  //   const valueColumns = this.gridColumnApi.getValueColumns();

  //   console.log('Pivot Columns:', pivotColumns);
  //   console.log('Row Group Columns:', rowGroupColumns);
  //   console.log('Value Columns:', valueColumns);
  // }
}
