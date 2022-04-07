import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom"

import { IProduct } from "../types/product";


type ProductProps = {
    products: IProduct[];
}

const Home = (props: ProductProps) => {
    return (<div>
        <div className="font-bold my-3 flex justify-between w-[100%]" >
            <h3 className="text-red-600">CÁC SẢN PHẨM NỔI BẬT</h3>
        </div>
        <div className="grid grid-cols-3 gap-5">
            {props.products.map((item, index) => {
                return <div key={index} className=" shadow-md  py-2 px-3 hover:text-red-600 hover:shadow-2xl">
                    <Link to={'/products/' + item._id} className="hover:text-stone-500" >
                        <div>
                            <img src={item.image} alt="" width={150} className="mx-auto w-[286px] h-[270px]" />
                            <p className="text-red-500 font-bold">{item.name}</p>
                            <p >{item.price}.000 VNĐ</p>
                        </div>
                    </Link>
                </div>
            })}

        </div>
    </div>)


}

export default Home