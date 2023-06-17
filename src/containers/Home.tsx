import React from "react";
import "./Home.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface MainFormValues {
  phone: string;
  email: string;
}

const schema = yup.object({
  phone: yup.string().required("Необходимо указать номер телефона"),
  email: yup
    .string()
    .email("Неправильный email")
    .required("Необходимо указать email"),
});

const Home = () => {
  const form = useForm<MainFormValues>({
    defaultValues: {
      phone: "",
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: MainFormValues) => {
    console.log(data);
    console.log("bebe");
  };

  return (
    <div className="form-wrapper">
      <header className="header-main">
        <div>
          <img src="images/avatar.svg" alt="avatar" />
        </div>
        <div className="header-right">
          <h3>Сергей Анисимов</h3>
          <ul>
            <li>
              <a href="https://t.me/aniserg" target="_blank" rel="noreferrer">
                Telegram
              </a>
            </li>
            <li>
              <a
                href="https://github.com/an1serg"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a href="." target="_blank">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </header>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)} className="main-form">
        <div className="form-item">
          <label htmlFor="phone">Номер телефона</label>
          <input
            type="text"
            id="phone"
            {...register("phone")}
            placeholder="+7 977 999-99-99"
          />
          <p>{errors.phone?.message}</p>
        </div>
        <div className="form-item">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="tim.jennings@example.com"
          />
          <p>{errors.email?.message}</p>
        </div>
        <button type="submit" id="button-start" className="primary-button">
          Начать
        </button>
      </form>
    </div>
  );
};

export default Home;
