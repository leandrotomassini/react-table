import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';




function App() {

  const data = [
    {
      nombre: 'Juan',
      apellido: 'Perez',
      edad: 25
    },
    {
      nombre: 'Maria',
      apellido: 'Ausy',
      edad: 30
    },
    {
      nombre: 'Puan',
      apellido: 'Perez',
      edad: 25
    },
    {
      nombre: 'Maria',
      apellido: 'Ausy',
      edad: 30
    },
    {
      nombre: 'Tuan',
      apellido: 'Perez',
      edad: 25
    },
    {
      nombre: 'Laria',
      apellido: 'Ausy',
      edad: 30
    },
    {
      nombre: 'Kuan',
      apellido: 'Perez',
      edad: 25
    },
    {
      nombre: 'Zaria',
      apellido: 'Ausy',
      edad: 30
    },
    {
      nombre: 'Juan',
      apellido: 'Perez',
      edad: 25
    },
    {
      nombre: 'Maria',
      apellido: 'Ausy',
      edad: 30
    },
    {
      nombre: 'Puan',
      apellido: 'Perez',
      edad: 25
    },
    {
      nombre: 'Maria',
      apellido: 'Ausy',
      edad: 30
    },
    {
      nombre: 'Tuan',
      apellido: 'Perez',
      edad: 25
    },
    {
      nombre: 'Laria',
      apellido: 'Ausy',
      edad: 30
    },
    {
      nombre: 'Kuan',
      apellido: 'Perez',
      edad: 25
    },
    {
      nombre: 'Zaria',
      apellido: 'Ausy',
      edad: 30
    },
    {
      nombre: 'Juan',
      apellido: 'Perez',
      edad: 25
    },
    {
      nombre: 'Maria',
      apellido: 'Ausy',
      edad: 30
    },
    {
      nombre: 'Puan',
      apellido: 'Perez',
      edad: 25
    },
    {
      nombre: 'Maria',
      apellido: 'Ausy',
      edad: 30
    },
    {
      nombre: 'Tuan',
      apellido: 'Perez',
      edad: 25
    },
    {
      nombre: 'Laria',
      apellido: 'Ausy',
      edad: 30
    },
    {
      nombre: 'Kuan',
      apellido: 'Perez',
      edad: 25
    },
    {
      nombre: 'Zaria',
      apellido: 'Ausy',
      edad: 30
    },
  ];

  const [ records, setRecords ] = useState( data );
  const [ loading, setLoading ] = useState( true );

  useEffect( () => {

    const timeOut = setTimeout( () => {
      setRecords( data );
      setLoading( false );
    }, 2000 );

    return () => clearTimeout( timeOut );
  }, [] );


  const columns = [
    {
      name: 'Nombre',
      selector: row => row.nombre,
      sortable: true
    },
    {
      name: 'Apellido',
      selector: row => row.apellido,
      sortable: true
    },
    {
      name: 'Edad',
      selector: row => row.edad,
      sortable: true
    },
  ];



  const handleChange = ( e ) => {
    const searchTerm = e.target.value.toLowerCase();

    const filteredRecord = data.filter( ( record ) => {
      return (
        record.nombre.toLowerCase().includes( searchTerm ) ||
        record.apellido.toLowerCase().includes( searchTerm ) ||
        record.edad.toString().includes( searchTerm )
      );
    } );

    setRecords( filteredRecord );
  };

  return (
    <>
      <input type="text" onChange={ handleChange } />

      <DataTable
        title='Datos de los usuarios'
        columns={ columns }
        data={ records }
        selectableRows
        pagination
        // paginationPerPage={ 4 }
        onSelectedRowsChange={ data => console.log( data ) }
        fixedHeader
        progressPending={ loading }
        progressComponent={ <h1>Cargando...</h1> }
      >
      </DataTable>
    </>
  );
}

export default App;
