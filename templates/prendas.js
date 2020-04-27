import React from "react"
import { graphql } from 'gatsby' 
import ilustracion from "../src/imgs/primer-camisa.jpg"
import equisd from "../src/imgs/x.png"
export default (props) => {
    const pageData = props.data.prendasJson
    
    return(
        <div>
            <header className="py-12 border-purple-500 border-solid border-t-8">
                <div className="max-w-4xl mx-auto flex">
                    <img className="h-32 w-32 flex-shrink-0" src={equisd} alt="primera prenda"></img>  
                    <h1 className="capitalize text-6xl font-bold">{pageData.title}</h1>
                </div>
            </header>
 
            <ul>
                {
            pageData.items.map((item, index)=>(
                <li className="bg-white shadow mt-4 flex" key={index}>
                    <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
                        <img className="h-32 w-32 flex-shrink-0" src={ilustracion} alt="primera prenda"></img>
                        <div className="px-6 py-4">
                        <h3 className="text-lg font-semibold text-gray-800">{item.nombreprenda }</h3>
                        <p className="text-gray-600">{ item.nombreprenda } / night average</p>
                        <div className="mt-4">
                            <a href="#" className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">Explore {item.nombreprenda } properties</a>
                        </div>
                        </div>
                    </div>
                    <div className="flex items-center flex-1 p-8">
                        <h3 className="flex-1">{item.nombreprenda}</h3>
                    </div>
                </li>                      
            ))
}
            </ul>
        </div>
    )
}

export const query =  graphql`
    query($slug: String){
        prendasJson(slug: {eq: $slug}) {
            title
            description
            items{
                nombreprenda
                tallas
                precio
            }
        }
    }
`