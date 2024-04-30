import HeaderPage from "@/components/sharedUi/HeaderPage";
import Reservation from "@/components/template/Reservation";
import React from "react";

function ReservationPage() {
  return <div>
  <HeaderPage route={"reservation"}/>
  <Reservation/>
  </div>
}

export default ReservationPage;
