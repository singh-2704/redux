import React from 'react';
import HappyIncrementor from './HappyIncrementor';
import HappyTracker from './HappyTracker';
import SadTracker from './SadTracker';
import SadIncrementor from './SadIncrementor';
import ProductListPage from './ProductListPage';
import {Routes, Route} from 'react-router-dom';
import OrderListPage from './OrderListPage';
import OrderDetailPage from './OrderDetailPage';

export default function App() {

  return (
    <div className="space-y-4">
    {/* <HappyTracker/>
    <SadTracker/>
    <HappyIncrementor/>
    <SadIncrementor/> */}
    
    <Routes>
      <Route index element={<ProductListPage/>}></Route>
      <Route path="/orders" element={<OrderListPage/>}></Route>
      <Route path="/orders/:orderId" element={<OrderDetailPage/>}></Route>
    </Routes>
    </div>
  )
}
