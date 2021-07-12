import React,{useState} from 'react';

const Tab = ({tab}) => {
	const [tabSelected,setTabSelected] = useState({})
	const handlePage = (e) =>{
		e.preventDefault();
		setTabSelected({...tab[e.target.id]})

	}
  return (
    <div>
   		{
   			tab.map((t,i) =>{
   				return (
  					<button id={i} key={i} onClick={handlePage} style={{marginLeft:"10px"}}
  					 className="btn btn-primary btn-lg active">{t.label}</button>
  					)
   			})
   		}
   		<div>{tabSelected.content}</div>
    </div>
  )
}

export default Tab;