import styled from "styled-components";
import {useState} from 'react';
import{useEffect} from 'react';    
import SearchResults from "./Components/SearchResults/SearchResults.jsx"; 


 export const BASE_URL="https://foodies-gamma.vercel.app/";

const App=()=> {
  const[data ,setData]=useState(null);
  const[filterdData, setFilteredData ] =useState(null);
  const[loading,setLoading]=useState(false);
  const[error ,setError] = useState(null);
  const[selectedBtn, setSelectedBtn] =useState("all")
 

useEffect(() => {
const fetchFoodData = async() =>{
    try {
     const response = await fetch(BASE_URL);

     const json = await response.json();

     setData(json);
     setFilteredData(json);
     setLoading(false)
     
   } catch (error) {
     setError("Unable to fetch data")
   }
};
fetchFoodData();
},[]);

const searchFood =(e)=>{
  const searchValue = e.target.value;
  if(searchValue === ""){
    setFilteredData(null);
  }

  const filter =data?.filter((food)=>
  food.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  setFilteredData(filter);

};

const filterFood = (type) =>{
 if(type==="all"){
  setFilteredData(data);
  setSelectedBtn("all");
  return;
 }
 const filter =data?.filter((food)=>
 food.type.toLowerCase().includes(type.toLowerCase())
 );
setFilteredData(filter);
setSelectedBtn(type);

};

if (error) return <div>{error}</div>
if (loading) return <div>loading......</div>

  return (
    <>
    <Container>
        <TopContainer>
         <div className="logo">
              <img src="/logo.svg" alt="logo" />
         </div>
         <div className="search">
            <input onChange={searchFood} placeholder="Search Food"/>
         </div>
    
       </TopContainer>
       <FilterContainer>
        
        <Button onClick={()=>filterFood ("all")}>All</Button>
        <Button onClick={()=>filterFood ("breakfast")}>Breakfast</Button>
        <Button onClick={()=>filterFood ("lunch")}>lunch</Button>
        <Button onClick={()=>filterFood ("dinner")}>Dinner</Button>
      
       </FilterContainer>
    </Container>
     <SearchResults data={filterdData}/>
     </>
    
  );
}
export default App;

 export const Container = styled.div`
max-width: 1200px;
margin:0 auto;
`;
const TopContainer = styled.div`
height: 140px;
display: flex;
justify-content: space-between;
padding: 16px;
align-items: center;

.search{
  input{
    background-color: transparent;
    border: 1px solid red;
    border-radius: 5px;
    height: 40px;
    width: 240px;
    font-size: 16px;
    color: white;
    padding:0 10px;
    &::placeholder{
      color: white;
      
    }
  }
}
@media(0<width<600px){
  flex-direction: column;
  height:120px;

}
  
`;
 const FilterContainer= styled.div`
 display:flex ;
 justify-content: center;
 gap: 10px;
 padding-bottom: 30px;
 `;

  export const Button= styled.button`
  
  background-color: #ff4343;
  border-radius:5px;
  padding: 5px 12px;
  border:none;
  color:white;
  gap:10px;
  cursor: pointer;
  &:hover{
    background-color:black;
  }
  `;



