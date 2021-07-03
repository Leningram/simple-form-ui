import "./App.css";

import { Component } from "react";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            showPassword: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.togglePassword = this.togglePassword.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    // Переключение показа/скрытия пароля
    togglePassword() {
        this.setState({ showPassword: !this.state.showPassword });
    }

    // Замена текста кнопки на анимированный спиннер загрузки
    loadButton(e) {
        e.target.className = "button--loading";
        e.target.innerText = "";
        // добавление задержки 2 секунды после нажатия
        setTimeout(() => {
            e.target.innerText = "Sign In";
            e.target.className = "";
        }, 2000);
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="email"
                        className="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <input
                        type={this.state.showPassword ? "text" : "password"}
                        name="password"
                        className="text"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <span className="showPassword" onClick={this.togglePassword}>
                        Показать пароль
                    </span>
                    <button onClick={this.loadButton}>Sign In</button>
                </form>
            </div>
        );
    }
}
