import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoals, addGoal, removeGoal } from "../redux/goalSlice";

const GoalList = () => {
  const [newGoal, setNewGoal] = useState("");
  const dispatch = useDispatch();
  const { goals, loading, error } = useSelector((state) => state.goals);

  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  const handleAdd = () => {
    if (newGoal.trim() !== "") {
      dispatch(addGoal(newGoal));
      setNewGoal("");
    }
  };

  const handleRemove = (goalId) => {
    dispatch(removeGoal(goalId));
  };

  return (
    <div className="container mt-4">
      <h3>Metas Personales</h3>

      <div className="mb-3 d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Agregar una meta"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
        />
        <button onClick={handleAdd} className="btn btn-primary">
          Agregar
        </button>
      </div>

      {loading && <p>Cargando metas...</p>}
      {error && <p className="text-danger">Error: {error}</p>}

      <ul className="list-group">
        {goals.map((goal) => (
          <li
            key={goal._id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {goal.goal}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleRemove(goal._id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalList;
