import React from "react"
import ilustracion from "../imgs/1_1.svg"
import Form from "../components/contactform"

export default () => (
    <header>
        <div className="bg-gray-600">
            <div className="container mx-auto p-12 max-w-4xl">
                <div className="flex-1">
                    <img src ={ilustracion} alt="logo oxwild"></img>
                </div>
            </div>
        </div>
        <div className="container mx-auto p-12 max-w-4xl">
            <Form/>
        </div>
    </header>

        
)