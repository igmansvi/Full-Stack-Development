import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router'

const UserPage = () => {
    const { id } = useParams();
    const { state } = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name') || 'Anonymous';
    const navigate = useNavigate();

    const users = [
        { id: 1, name: 'Alice', role: 'Developer' },
        { id: 2, name: 'Bob', role: 'Designer' },
        { id: 3, name: 'Charlie', role: 'Manager' },
        { id: 4, name: 'Diana', role: 'Analyst' }
    ];

    const currentUser = users.find(user => user.id === parseInt(id)) || { id: parseInt(id), name: name, role: 'Unknown' };

    useEffect(() => {
        if (name !== currentUser.name) {
            setSearchParams({ name: currentUser.name });
        }
    }, [currentUser.name, name, setSearchParams]);

    const handleNextUser = () => {
        const nextId = (parseInt(id) % users.length) + 1;
        navigate(`/user/${nextId}?name=${users.find(u => u.id === nextId)?.name || 'Unknown'}`, {
            state: { from: `User ${id}`, message: 'Navigated to next user' }
        });
    };

    const handlePrevUser = () => {
        const prevId = parseInt(id) > 1 ? parseInt(id) - 1 : users.length;
        navigate(`/user/${prevId}?name=${users.find(u => u.id === prevId)?.name || 'Unknown'}`, {
            state: { from: `User ${id}`, message: 'Navigated to previous user' }
        });
    };

    const handleEditName = () => {
        const newName = prompt('Enter new name:', currentUser.name);
        if (newName) {
            setSearchParams({ name: newName });
        }
    };

    return (
        <div className="p-5 border border-gray-300 m-5 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">User Profile</h2>
            <p className="mb-2"><strong className="font-semibold">ID:</strong> {currentUser.id}</p>
            <p className="mb-2"><strong className="font-semibold">Name:</strong> {currentUser.name} (from URL params)</p>
            <p className="mb-2"><strong className="font-semibold">Role:</strong> {currentUser.role}</p>
            {state && (
                <p className="mb-4 text-sm text-gray-600"><strong className="font-semibold">Navigation Info:</strong> {state.message} from {state.from}</p>
            )}
            <div className="flex gap-2 mt-4">
                <button onClick={handlePrevUser} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Previous User</button>
                <button onClick={handleNextUser} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Next User</button>
                <button onClick={handleEditName} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Edit Name</button>
                <button onClick={() => navigate(-1)} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Back to Previous Page</button>
            </div>
        </div>
    )
}

export default UserPage