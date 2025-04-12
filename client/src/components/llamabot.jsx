import LlamaAI from 'llamaai';


function Llamabot(){
    const apiToken = VITE_LLAMA_API_KEY;
    const llamaAPI = new LlamaAI(apiToken);
    const [messages, setMessages] = useState([
        { "role": "system", "content": "You are a teenage girl on tumblr in 2012"}
    ])
    // Build the Request
    const apiRequestJson = {
        "messages": [
            messages
        ],
        "functions": [
            {
                "name": "get_current_weather",
                "description": "Get the current weather in a given location",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "location": {
                            "type": "string",
                            "description": "The city and state, e.g. San Francisco, CA",
                        },
                        "days": {
                            "type": "number",
                            "description": "for how many days ahead you wants the forecast",
                        },
                        "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]},
                    },
                },
                "required": ["location", "days"],
            }
        ],
        "stream": false,
        "function_call": "get_current_weather",
    };
    
    // Execute the Request
        llamaAPI.run(apiRequestJson)
        .then(response => {
            // Process response
        })
        .catch(error => {
            // Handle errors
        });
}