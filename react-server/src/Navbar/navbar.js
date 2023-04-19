import React from "react";
import { AiOutlineBank } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="w-1/5 h-screen shadow-2xl pl-8 ">
      <div className="flex flex-col gap-6 mt-7">
        <div className="flex text-3xl items-center gap-6 ">
          <div className="">
            <AiOutlineBank />
          </div>
          <div>INTERBANK</div>
        </div>
        <div className="flex gap-4">
          <div>Denem2</div>
          <div>Dashboard</div>
        </div>
        <div className="flex gap-4">
          <div>Denem2</div>
          <div>Profilim</div>
        </div>
        <div className="flex gap-4">
          <div>Denem2</div>
          <div>Aktif Rezerv</div>
        </div>
        <div className="flex gap-4">
          <div>Denem2</div>
          <div>Geçmiş Rezerv</div>
        </div>
        <div className="flex gap-4">
          <div>Denem2</div>
          <div>Onay Bekl</div>
        </div>
        <div className="flex gap-4">
          <div>Denem2</div>
          <div>Yeni Rezerv</div>
        </div>
      </div>
    </div>
  );
}
