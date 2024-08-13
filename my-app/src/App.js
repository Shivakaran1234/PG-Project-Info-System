// import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,Navigate,RouterProvider} from "react-router-dom"
import Rootlayout from './components/Rootlayout';
import Home from './components/home/Home';
import SignUp from './components/signup/SignUp';
import SignIn from './components/signIn/SignIn';
import StudentProfile from './components/studentprofile/StudentProfile';
import TeacherProfile from './components/teacherProfile/TeacherProfile';
import ProjectForm from './components/ProjectForm';
import Projects from './components/projects/Projects';
import Permission from './components/permission/Permission';
import Permissionrequest from './components/permissionrequests/Permissionrequest';
import SearchComponent from './components/search/SearchComponent';
import MyProjects from './components/myProjects/MyProjects';
import ProjectById from './components/projectById/ProjectById';
import CircularForm from './components/CircularForm/CircularForm';
import StudentDashboard from './components/studentDashboard/StudentDashboard';

function App() {
  let router=createBrowserRouter([{
    path:'',
    element:<Rootlayout/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'/search',
        element:<SearchComponent/>
      },
      {
        path:'permission-requests',
        element:<Permissionrequest />
      },
      {
        path:'/signup',
        element:<SignUp/>
      },{
        path:'/signin',
        element:<SignIn/>
      },
      {
        path:'projects/:projectId',
        element:<ProjectById/>
      },
      {
        path:'/studentprofile',
        element:<StudentProfile/>,
        children:[
          {
            path:'permission',
            element:<Permission/>
          },
          {path:'ProjectForm',
            element:<ProjectForm/>
          },{
            path:'projects',
            element:<Projects/>
          },{
            path:'my-projects',
            element:<MyProjects/>
          },
          {
            path:'circular',
            element:<StudentDashboard/>
          },
          {
            path:'projects/:projectId',
            element:<ProjectById/>
          },
          {
            path:'studentDashboard',
            element:<StudentDashboard/>
          },
          {
            path:'',
            element:<Navigate to='projects'/>
          }
        ]
      },
      {
        path:'/teacherprofile',
        element:<TeacherProfile/>,
        children:[
          {
            path:'projects',
            element:<Projects/>
          },
          {
            path:'ProjectForm',
            element:<ProjectForm/>
          },
          {
            path:'permission-requests',
            element:<Permissionrequest />
          },
          {
            path:'my-projects',
            element:<MyProjects/>
          },
          {
            path:'projects/:projectId',
            element:<ProjectById/>
          },
          {
            path:'CircularForm',
            element:<CircularForm/>
          },
          {
            path:'',
            element:<Navigate to='projects'></Navigate>
          }
         
        ]
      }
    ]
  }])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
