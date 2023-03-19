import { db } from "../config/free"
import {uid} from 'uid';
import {set, ref, onValue, remove} from 'firebase/database'
import {useState,useEffect} from 'react'
import{Row} from 'react-bootstrap'
const Project = () => {
    const [project,setProject] =useState([])
    const [isEdit,setEdit] = useState(false)
    const [ tempid,setTempid]= useState('')
    
    useEffect( ()=>{
        onValue(ref(db),async (snapshot)=>{
            const data = await snapshot.val().projects
            console.log(typeof([data]))
            setProject([...data])
        })
    },[])
    console.log("by project",project)
    // update
    const handleUpdate=(item)=>{
        setEdit(true)
        setTempid(item.id)
    }


    return (
        <>
            <h1 className="text-center">PROJECTS</h1><hr/>
            
            <div>
            <div>
                <Row clas>

                </Row>
            </div>
                {project.map((item)=>
                <>
                <h1>{item.name}</h1>
                </>
                )}               
            </div>
        </>
    )
}
export default Project