const API_BASE_URL = "https://your-render-url.onrender.com";

export const getTasks = () => fetch(`${API_BASE_URL}/tasks`).then(res => res.json());
export const addTask = (task) => fetch(`${API_BASE_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task })
}).then(res => res.json());
