import { useState } from "react"
import axios from "axios"

export default function Image() {
    
    const key = "44904856-5c7d4b1953ecaa283859e9e97"
    const url = "https://pixabay.com/api/?key="+key
    const [q,setQ] = useState("");
    const [images,setImages]=useState([])

    function handleSubmit(e){
        e.preventDefault();
        let u = url+"&q="+q;
        axios.get(u).then((res)=>{console.log(res.data.hits); setImages(res.data.hits)})
    }

  return (
    <>
    <div className="banner text-white text-capitalize">
        <p className="display-5 fw-bold">Stunning roylity free images</p>
        <p className="fs-5">high quality stock images for your Website/App</p>
        <form className="w-50 m-auto mt-5">
            <div className="input-group">
                <input type="text" placeholder="Type keyword" className="form-control"
                onChange={(e)=>setQ(e.target.value)}/>
                <button className="btn btn-light" onClick={handleSubmit}>Search</button>
            </div>
        </form>
    </div>
        <div className="container mt-5">
            <div className="row">
            { images.map((image)=>(  
                <div className="col-md-4" key={image.id}>
                    <img src={image.largeImageURL} alt="" className="w-100" style={{"height":'250px'}} />
                </div>
            ))}
            </div>
        </div>
    
    </>
  )
}
