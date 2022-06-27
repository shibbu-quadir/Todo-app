import react ,{useState} from "react";
/*
const App=()=>{
    const state=useState();
    const[count,setCount]=useState(0);
    const incNum=()=>{
        setCount(count+1z);

        //console.log("Clicked");
    };
    return(
        <>
        <h1>{count}</h1>
        <button onClick={incNum}>Click Here</button>
        </>
    )
}
export default App;
const App=()=>{
    let time=new Date().toLocaleTimeString();
    const [ctime,setCtime]=useState(time);
    const UpdateTime=()=>{
        time=new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(UpdateTime,1000);
    return(
        <>
<h1>{ctime}</h1>
        </>
    );

}*/
/*const App=()=>{
    const purple='#8e44ad';
    const[bg,setBg]=useState(purple);
    const[name,setName]=useState('CLICK ME');
    const bgChange=()=>{
        let newBg="#34495e";
        setBg(newBg);
        setName("WOW 😂")
    
    };
    const backbg=()=>{
        let newBg="#34495e";
        setBg(purple);
        setName("WOW 😂")
    };
    return (
<>
<div style={{backgroundColor:bg}}>
<button onClick={bgChange}  onDoubleClick={backbg}>{name}</button>

</div>
</>
    )
}
const App=()=>{
    const[fullName,setFullName]=useState({
        fname: "",
        lname: "",
            });
    
    const inputEvent=((event)=>{
        console.log(event.target.value);
        const {name,value}=event.target;
    setFullName((preValue)=>{
        return{
            ...preValue,
            [name]:value,
        };
    });
    const onSubmits=(event)=>{
        event.preventDefault();
        //setFullName(name);
        alert('Form Submitted...');
    };
    
    });
           return(
        <>
        <div>
            <form onSubmit={onSubmits}>
            <h1>HI {fullName.fname} {fullName.lname}</h1>
            <input type="text" placeholder="Enter your string" name="fname" onChange={inputEvent} value={fullName.fname} />
            <br />
            <input type="text" placeholder="Enter your string" name="lname" onChange={inputEvent} value={fullName.lname} />
            <button type="submit" >CLICK ME  👍</button>
        
            </form>
            </div>
        </>
    );
}*/

const App=()=>{
    const[inputList,setinputList]=useState();
    const [item,setItem]=useState([]);
    const itemEvent=(event)=>{
        setinputList(event.target.value);
    };
    const listOfitems=()=>{
        if(!inputList){
alert('Please Enter Your List Then Add 😊 ');
        }else{
        setItem((oldItem)=>{
            return [...oldItem,inputList];
        });
    }
        setinputList('');
    };
    const deleteItem=(id)=>{
        const updatedDate=item.filter((elem,ind)=>{
            return ind!=id;
        });
        setItem(updatedDate);
        }
    return(
        <>
        <div className="main_div">
<div className="middle_div">
    <br />
    <h1>TO DO LIST</h1>
    <input type="text" placeholder=" ✍ Enter your list ✍ " value={inputList} onChange={itemEvent}  />
    <button className="add_it" onClick={listOfitems}> ADD </button>
    <ol>
        {item.map((itemval,ind)=>{
            return(
             
                <li key={ind}>{itemval}
                <button className="deletebyOne" onClick={()=> deleteItem(ind)}>❌</button>
                </li>
             
             )
    })}
    </ol>
</div>
        </div>
        </>
    );
}
export default App;