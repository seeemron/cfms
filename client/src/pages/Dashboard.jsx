import React, {useEffect, useState} from 'react';
import axios from 'axios';
export default function Dashboard(){
  const [ings, setIngs] = useState([]);
  useEffect(()=>{
    axios.get('/api/ingredients').then(r=>setIngs(r.data)).catch(()=>{});
  },[]);
  return (<div style={{padding:20}}>
    <h2>Dashboard</h2>
    <h3>Ingredients (from /api/ingredients)</h3>
    <ul>{ings.map(i=> (<li key={i.code}>{i.code} — {i.brand_name} — {i.inci_name} — {i.price_per_unit}{i.price_unit}</li>))}</ul>
  </div>);
}
