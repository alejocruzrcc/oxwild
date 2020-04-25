import React from "react"


export default () => (
    <form classname="mt-16 text-center">
        <label for="contact-content" className="block text-gray-700 text-xl font-bold mb-2">Envíanos un mensaje</label>
        <div className="flex shadow rounded bg-white border p-2" >
            <textarea 
            id="contact-content"
            name="contact-content"
            className="flex-1 py-2 px-3 text-gray-700 focuso:utline-none focus:shadow-outline"> </textarea>
            <button>Enviar</button>
        </div> 
    </form>
)