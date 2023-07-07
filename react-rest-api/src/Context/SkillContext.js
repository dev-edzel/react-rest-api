import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

const SkillContext = createContext();

export const SkillProvider = ({ children }) => {
    const [formValues, setFormValues] = useState({
        name: "",
        slug: "",
    });

    const [skills, setSkills] = useState([]);
    const [skill, setSkill] = useState([]);
    const navigate = useNavigate();

    const onChange = (e) => {
        const { name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    };

    const getSkills = async () => {
        const apiSkills = await axios.get("skills");
        setSkills(apiSkills.data.data);
    };
    const getSkill = async (id) => {
        const response = await axios.get("skills/" + id);
        setSkill(response.data.data);
    }
    
    const storeSkill = async (e) => {
        e.preventDefault();
        try{
            await axios.post("skills", formValues);
            getSkills();
            navigate("/skills");
        } catch(e){}
    }

    return <SkillContext.Provider value={{skill, skills, getSkill, getSkills, onChange, formValues}}>{children}</SkillContext.Provider>
}

export default SkillContext;