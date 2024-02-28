'use client'
import React, { useState } from 'react';
const AdminMenu = () => {
  return (
    <div className="w-[1440px] h-[1024px] relative bg-white">
    <div className="w-[1157px] h-[120px] px-6 left-[283px] top-[102px] absolute justify-start items-center gap-4 inline-flex">
        <div className="grow shrink basis-0 self-stretch p-6 bg-zinc-100 rounded-lg border border-gray-300 flex-col justify-center items-start gap-2 inline-flex">
            <div className="justify-start items-center gap-1 inline-flex">
                <div className="w-5 h-5 relative" />
                <div className="text-slate-800 text-sm font-normal font-['Inter']">Total Pengunjung</div>
            </div>
            <div className="text-neutral-900 text-[28px] font-semibold font-['Inter']">25,2k</div>
        </div>
        <div className="grow shrink basis-0 self-stretch p-6 bg-zinc-100 rounded-lg border border-gray-300 flex-col justify-center items-start gap-2 inline-flex">
            <div className="justify-start items-center gap-1 inline-flex">
                <div className="w-5 h-5 relative" />
                <div className="text-slate-800 text-sm font-normal font-['Inter']">Total Pendapatan</div>
            </div>
            <div className="text-neutral-900 text-[28px] font-semibold font-['Inter']">25,2k</div>
        </div>
        <div className="grow shrink basis-0 self-stretch p-6 bg-zinc-100 rounded-lg border border-gray-300 flex-col justify-center items-start gap-2 inline-flex">
            <div className="justify-start items-center gap-1 inline-flex">
                <div className="w-5 h-5 relative" />
                <div className="text-slate-800 text-sm font-normal font-['Inter']">Total Bangunan</div>
            </div>
            <div className="text-neutral-900 text-[28px] font-semibold font-['Inter']">25,2k</div>
        </div>
    </div>
    <div className="w-[283px] h-full px-6 pb-6 left-0 top-0 absolute bg-neutral-900 flex-col justify-between items-center inline-flex">
        <div className="flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch py-6 justify-between items-center inline-flex">
                <div className="justify-start items-end gap-2 flex">
                    <div className="w-[26px] h-[26px] relative" />
                    <div className="text-white text-xl font-medium font-['Neue Montreal'] tracking-tight">Perkotaan.io</div>
                </div>
                <div className="w-4 h-4 relative" />
            </div>
            <div className="flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch h-[220px] flex-col justify-start items-start flex">
                    <button className="self-stretch h-11 py-3  rounded-md shadow justify-start items-center gap-3 inline-flex">
                        <div className="justify-start items-center gap-2 flex">
                            <div className="w-5 h-5 relative" />
                            <div className="text-white text-sm font-medium font-['Inter']">Dashboard</div>
                        </div>
                    </button>
                    <button className="self-stretch p-3 justify-start items-center inline-flex">
                        <div className="justify-start items-center gap-2 flex">
                            <div className="w-5 h-5 relative" />
                            <div  className="text-gray-200 text-sm font-medium font-['Inter']">Data Pelanggan</div>
                        </div>
                    </button>
                    <button className="self-stretch p-3 justify-start items-center inline-flex">
                        <div className="justify-start items-center gap-2 flex">
                            <div className="w-5 h-5 relative" />
                            <div className="text-gray-200 text-sm font-medium font-['Inter']">Total Pendapatan</div>
                        </div>
                    </button>
                    <button className="self-stretch p-3 justify-start items-center inline-flex">
                        <div className="justify-start items-center gap-2 flex">
                            <div className="w-5 h-5 relative" />
                            <div className="text-gray-200 text-sm font-medium font-['Inter']">Data Proyek pembangunan</div>
                        </div>
                    </button>
                    <button className="self-stretch p-3 justify-start items-center inline-flex">
                        <div className="justify-start items-center gap-2 flex">
                            <div className="w-5 h-5 relative" />
                            <div className="text-gray-200 text-sm font-medium font-['Inter']">Data Mitra Perusahaan</div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <button className="self-stretch p-3 rounded-md justify-start items-center gap-2 inline-flex">
            <div className="w-5 h-5 relative" />
            <div className="text-gray-200 text-sm font-medium font-['Inter']">Pegaturan Umum</div>
        </button>
    </div>
    <div className="w-[1157px] p-6 left-[283px] top-0 absolute justify-between items-center inline-flex">
        <div className="flex-col justify-start items-start gap-2 inline-flex">
            <div className="justify-start items-center gap-2 inline-flex">
                <div className="text-zinc-900 text-2xl font-semibold font-['Inter']">Dashboard</div>
            </div>
            <div className="w-[237px] text-slate-600 text-sm font-normal font-['Inter']">Lihat perkembangan website disini</div>
        </div>
        <div className="justify-start items-center gap-6 flex">
            <div className="h-11 p-3 bg-zinc-100 rounded-lg justify-start items-end flex">
                <div className="justify-start items-center gap-2 flex">
                    <div className="w-5 h-5 relative" />
                    <div className="text-gray-500 text-sm font-normal font-['Inter']">Cari apapun disini</div>
                </div>
            </div>
            <div className="justify-start items-start gap-[18px] flex">
                <div className="justify-start items-start gap-2.5 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-3.5 h-3.5 p-1.5 bg-red-600 rounded-[28px] flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="text-white text-[10px] font-normal font-['Inter']">2</div>
                    </div>
                </div>
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                </div>
                <div className="justify-start items-center flex">
                    <div className="h-6 justify-start items-center gap-2 flex">
                        <div className="w-6 h-6 relative" />
                        <div className="text-zinc-900 text-sm font-normal font-['Inter']">IND</div>
                    </div>
                </div>
            </div>
            <div className="justify-start items-end gap-2.5 flex">
                <div className="w-11 h-11 p-2.5 bg-blue-600 rounded-full shadow-inner justify-center items-center gap-2.5 flex">
                    <div className="text-white text-base font-semibold font-['Inter']">JK</div>
                </div>
            </div>
        </div>
    </div>
    <div className="h-[720px] p-6 left-[283px] top-[222px] absolute flex-col justify-start items-start gap-3 inline-flex">
        <div className="self-stretch justify-between items-center inline-flex">
            <div className="text-zinc-900 text-xl font-semibold font-['Inter']">Data Pelanggan</div>
            <div className="justify-end items-center gap-3 flex">
                <div className="py-2 bg-white rounded-lg border border-gray-200 justify-start items-center gap-3 flex">
                    <div className="ml-5 text-gray-500 text-sm font-normal font-['Inter']">Filter</div>
                    <div className="w-4 h-4 relative" />
                </div>
                <div className="py-2 bg-neutral-900 rounded-lg shadow-inner justify-center items-center  flex">
                    <div className="w-4 h-4 relative" />
                    <div className="mr-5 text-white text-sm font-semibold font-['Inter']">Download PDF</div>
                </div>
            </div>
        </div>
        <div className="self-stretch rounded-lg border border-gray-200 justify-between items-start inline-flex">
            <div className="w-[250px] flex-col justify-start items-start inline-flex">
                <div className="self-stretch p-3 bg-gray-50 rounded-tl-lg border-b border-gray-200 justify-start items-center gap-2.5 inline-flex">
                    <div className="text-gray-500 text-xs font-normal font-['Inter']">Nama Pelanggan</div>
                </div>
                <div className="self-stretch h-[72px] px-3 py-[15px] border-b border-gray-200 justify-start items-center gap-3 inline-flex">
                    <div className="w-9 h-9 p-[10.29px] bg-slate-100 rounded-[857.14px] shadow-inner justify-center items-center gap-[8.57px] flex">
                        <img className="w-[26px] h-[26px]" src="https://via.placeholder.com/26x26" />
                    </div>
                    <div className="flex-col justify-center items-start gap-1.5 inline-flex">
                        <div className="text-zinc-900 text-sm font-medium font-['Inter']">Indra Wijaya</div>
                        <div className="text-gray-500 text-xs font-normal font-['Inter']">EV004</div>
                    </div>
                </div>
            </div>
            <div className="w-[250px] grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div className="self-stretch p-3 bg-gray-50 border-b border-gray-200 justify-start items-center gap-2.5 inline-flex">
                    <div className="text-gray-500 text-xs font-normal font-['Inter']">Asal Daerah</div>
                </div>
                <div className="self-stretch h-[72px] px-3 py-[15px] border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                    <div className="text-zinc-900 text-sm font-normal font-['Inter']">Banyumas,Jawa Tengah</div>
                </div>
            </div>
            <div className="w-[250px] flex-col justify-start items-start inline-flex">
                <div className="self-stretch p-3 bg-gray-50 border-b border-gray-200 justify-start items-center gap-2.5 inline-flex">
                    <div className="text-gray-500 text-xs font-normal font-['Inter']">Status</div>
                </div>
            </div>
            <div className="w-[168px] flex-col justify-start items-start inline-flex">
                <div className="self-stretch p-3 bg-gray-50 rounded-tr-lg border-b border-gray-200 justify-start items-center gap-2.5 inline-flex">
                    <div className="text-gray-500 text-xs font-normal font-['Inter']">Action</div>
                </div>
                <div className="self-stretch h-[72px] px-3 py-2.5 border-b border-gray-200 flex-col justify-center items-start gap-2.5 flex">
                    <div className="self-stretch justify-start items-center gap-2 inline-flex">
                        <button className="p-1.5 rounded-md border border-gray-200 justify-start items-center gap-1.5 flex">
                            <div className="w-4 h-4 relative" />
                            <div className="text-slate-600 text-sm font-normal font-['Inter']">Edit</div>
                        </button>
                        <button className="p-1.5 rounded-md border border-gray-200 justify-center items-center gap-1.5 flex">
                            <div className="w-4 h-4 relative" />
                            <div className="text-slate-600 text-sm font-normal font-['Inter']">Hapus</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default AdminMenu;
