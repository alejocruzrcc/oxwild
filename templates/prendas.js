import React from "react"
import { graphql } from 'gatsby' 

export default (props) => {
    const pageData = props.data.prendasJson
    return(
        <div>
            <header className="py-12 border-purple-500 border-solid border-t-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="capitalize text-6xl font-bold">{pageData.title}</h1>
                </div>
            </header>
            <ul>
                {
            pageData.items.map((item, index)=>(
                <li className="bg-white shadow mt-4 flex" key={index}>
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