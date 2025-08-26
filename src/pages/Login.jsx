import { Link } from "react-router";
import { useEffect } from "react";
import slides from './scipts.js'
import "./Login.scss";

export default function Login() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const startSlider = slides();
      startSlider();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>

    <header className='container-cabeçalho'></header>
        <menu className='container-principal'>
            <section className='container-dentro'>
                    <h1>Login</h1>
            </section>

        </menu>







    </>
  )

}