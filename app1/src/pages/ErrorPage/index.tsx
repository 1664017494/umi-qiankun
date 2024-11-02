import { useEffect, type FC } from "react";


const ErrorPage:FC = () => {

  async function getData() {
    throw new Error("抛出了一个异常") 
  }

  useEffect(() => {
    getData()
  }, []);

  return <>ErrorPage</>
}

export default ErrorPage;