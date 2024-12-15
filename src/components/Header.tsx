import * as React from "react";
import { Button } from "./ui/button";


const Header = () => {
  return (
    <div>
      <div className="w-full flex bg-transparent">
        <div className="container flex py-4 items-center text-white">
          <div className="">
            <a href="/">
              <p className="text-lg">logo</p>
            </a>
          </div>
          <div className="flex ml-auto">
            <div className="flex space-x-12 text-lg justify-center items-center">
              <a
                href="#countries"
                className="hover:underline"
                // onClick={() => handleNavigation("/", "#countries")}
              >
                Главная
              </a>
              <a
                href="#services"
                className="hover:underline"
                // onClick={() => handleNavigation("/", "#services")}
              >
                О нас
              </a>
              <a
                href="#services"
                className="hover:underline"
                // onClick={() => handleNavigation("/", "#services")}
              >
                Цена
              </a>
              <a
                href="#services"
                className="hover:underline"
                // onClick={() => handleNavigation("/", "#services")}
              >
                Отзывы
              </a>
              <a
                href="#footer"
                className="hover:underline"
                // onClick={() => handleNavigation("/", "#footer")}
              >
                Свяжитесь с нами
              </a>
              <div className="flex space-x-1 justify-end items-center">
                <Button variant='secondary'>Зарегистрироваться</Button>
                <Button>Войти</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
