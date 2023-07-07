import { useContext } from "react";
import SkillContext from "../../Context/SkillContext";

export const SkillCreate = () => {
    const { formValues, onChange, storeSkill, } = useContext(SkillContext);

    return (
        <div className="mt-12">
            <form onSubmit={storeSkill} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm">
                <div className="space-y-6">
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium"> Name </label>
                        <input name="name" value={formValues["name"]} onChange={onChange} className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"></input>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="slug" className="block mb-2 text-sm font-medium"> Slug </label>
                        <input name="slug" value={formValues["slug"]} onChange={onChange} className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"></input>
                    </div>
                </div>
                <div className="my-4">
                    <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                        Store
                    </button>
                </div>
            </form>
        </div>
    )
};