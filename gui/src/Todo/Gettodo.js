
export const data = []

export const todos_fixed = [
    {
        id: 1,
        title: 'Learn React',
        completed: false
    },
    {
        id: 2,
        title: 'Build a Todo App',
        completed: true
    },
    {
        id: 3,
        title: 'Deploy the App',
        completed: false
    }
]


export const todos = async () => {
    try {
        const res = await fetch('http://localhost:8000/api/todos');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};