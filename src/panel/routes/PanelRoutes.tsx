import { Navigate, Route, Routes } from 'react-router-dom';
import { Panel } from '../Panel';

export const PanelRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/panel" element={<Panel />} />
        <Route path="/*" element={<Navigate to="/panel" />} />
      </Routes>
    </div>
  );
};
