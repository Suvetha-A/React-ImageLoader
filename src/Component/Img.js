import React,{useState} from "react";



const Img=() =>{

    const [currentUser, setCurrentUser] = useState([])
    const [usersData, setUsersData] = useState([
        {
          img1: "",
          img2: "",
          img3: ""
        }
      ])
    
      function handleimg1(e) {
        setUsersData({...usersData,[e.target.name]:e.target.value})
      }
    
    
      let img1=usersData.img1;
      let img2=usersData.img2;
      let img3=usersData.img3;

      function handleNew(e) {
       
        e.preventDefault();
        setCurrentUser([...currentUser,{img1,img2,img3}])
        setUsersData({img1:"",img2:"",img3:""})
      }

    return(
        <div className="Sample">
            <h1>Image Loader</h1>
            <form>

                <label>Image URL 1</label><br/>
                <input type="url"name="img1" value={usersData.img1} onChange={handleimg1} placeholder="Enter the Image URL 1" ></input><br/>
                <label>Image URL 2</label><br/>
                <input type="url" name="img2" value={usersData.img2}  onChange={handleimg1} placeholder="Enter the Image URL 2" ></input><br/>
                <label>Image URL 3</label><br/>
                <input type="url" name="img3"  value={usersData.img3} onChange={handleimg1} placeholder="Enter the Image URL 3"></input><br/>
                <button onClick={handleNew} >Create </button>
                            
            </form>
            <div1 className="s1">
              <div2 className="s2">
              {
                currentUser.map((info,ind)=>{
                    return(
                        <div key={ind}>
                          <div className="box">
                            <img src={info.img1} alt="new" />
                          </div>
                          <div className="box">
                            <img src={info.img2}  alt="new"/>
                          </div>
                          <div className="box">
                            <img src={info.img3} alt="new"/>
                          </div>
                        
                        </div>
                    )
                }
                )
                }
                </div2>
            </div1>   
        </div>
    )
}

export default Img