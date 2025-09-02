import React from 'react';
import { useParams } from 'react-router-dom';
export default function FormulationEditor(){
  const { code } = useParams();
  return (<div style={{padding:20}}><h2>Formulation Editor — {code}</h2><p>Editor UI will be built here.</p></div>);
}
