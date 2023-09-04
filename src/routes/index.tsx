import {Route} from "react-router-dom";
import {lazy} from "react";

const routes =[
    {
        path: "",
        element : lazy(()=> import("../page/HomeTemplate")),
        nested:[
            { path: "", element: lazy(() => import("../page/HomeTemplate/HomePage")) },
            { path: "danhmuckhoahoc", element: lazy(() => import("../page/HomeTemplate/Category"))},
            { path: "blog", element: lazy(() => import("../page/HomeTemplate/Blog")) },
            { path: "sukien", element: lazy(() => import("../page/HomeTemplate/Events")) },
            { path: "thongtin", element: lazy(() => import("../page/HomeTemplate/About")) },
            { path: "danhmuckhoahoc/:id", element: lazy(() => import("../page/HomeTemplate/Course/Template")) },
            { path: "chitiet/:id", element: lazy(() => import("../page/HomeTemplate/Course/DetailProduct")) },
        ]
    },

    {
        path: "admin",
        element : lazy(()=> import("../page/AdminTemplate")),
        nested:[
            { path: "sanpham", element: lazy(() => import("../page/AdminTemplate/ManageProduct")) },
            { path: "nguoidung", element: lazy(() => import("../page/AdminTemplate/ManageUser")) }, 
            { path: "them-sanpham", element: lazy(() => import("../page/AdminTemplate/ManageProduct/AddCourse")) }, 
            { path: "them-nguoidung", element: lazy(() => import("../page/AdminTemplate/ManageUser/AddUser")) }, 
        ]
    },
    { path: "auth", element: lazy(() => import("../page/AdminTemplate/AuthPage")) },
];

const renderRoutes =()=>{
    return routes.map((route)=>{
        if(route.nested){
            return(
                <Route
                key={route.path}
                path ={route.path}
                element= {<route.element/>}
                >
                    {route.nested.map((item)=>{
                         return (
                            <Route
                                key={item.path}
                                path={item.path}
                                element={<item.element />}
                            />
                        )
                    })}
                </Route>
            )
        }else{
            return (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                />
            )
        }
    })
};

export default renderRoutes;