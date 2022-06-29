
import './App.css';

const App=()=> {
  var txt=[];
  
  for(let i=1;i<101;i++){ 
    var flag= 0;
    for(let j=2;j<i;j++){
      if(i%j===0){
        flag++;
        break;
      }
    
    }
    if(flag===0 && i!==1){
        txt.push(i);
        txt.push(" , ");
       
    }
  }
  return (
    <div className="App">
      {txt} 
    </div>
  );
}

export default App;
