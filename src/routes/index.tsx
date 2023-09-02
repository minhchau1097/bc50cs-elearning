import {Route} from "react-router-dom";
import {lazy} from "react";

const routes =[
    {
        path: "",
        element : lazy(()=> import("../page/HomeTemplate")),
        nested:[
            { path: "", element: lazy(() => import("../page/HomeTemplate/HomePage")) },
            { path: "danhmuckhoahoc", element: lazy(() => import("../page/HomeTemplate/Category"))},
            { path: "BackEnd", element: lazy(() => import("../page/HomeTemplate/Course/BackEnd"))},
            {path: "FrontEnd",element: lazy(()=> import("../page/HomeTemplate/Course/FrontEnd"))},
            {path: "Design", element: lazy(()=> import("../page/HomeTemplate/Course/Design"))},
            {path: "FullStack",element: lazy(()=> import("../page/HomeTemplate/Course/FullStack"))},
            {path: "DiDong", element: lazy(()=> import("../page/HomeTemplate/Course/Mobile"))},
            {path: "TuDuy", element: lazy(()=> import("../page/HomeTemplate/Course/Thinking"))},
            { path: "blog", element: lazy(() => import("../page/HomeTemplate/Blog")) },
            { path: "sukien", element: lazy(() => import("../page/HomeTemplate/Events")) },
            { path: "thongtin", element: lazy(() => import("../page/HomeTemplate/About")) },
            { path: "khoahoc/:id", element: lazy(() => import("../page/HomeTemplate/Course/Template")) },
        ]
    },

    {
        path: "admin",
        element : lazy(()=> import("../page/AdminTemplate")),
        nested:[
            { path: "sanpham", element: lazy(() => import("../page/AdminTemplate/ManageProduct")) },
            { path: "nguoidung", element: lazy(() => import("../page/AdminTemplate/ManageUser")) },         
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