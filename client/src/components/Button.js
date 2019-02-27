import React, { Component } from 'react'
import { AddItem } from '../actions/action'  
import { bindActionCreators } from 'redux'

class Button extends Component {

    AddItem = (id) => {
        this.props.AddItem(id);
    }

    render() {
        return (
            <div className="cadastro__content">
                <h2 className="header__cadastro">Cadastre um novo usuário</h2>

                <div className="formCadastro">
                    <form onSubmit={this.handleSubmit} className="form__users">
                        <input type="text" name="name" placeholder="Insira o nome" required/>
                        <input type="text" name="username" placeholder="Insira o usuário" required/>
                        <input type="email" name="email" placeholder="Insira o e-mail" required/>
                        <input type="text" name="phone" placeholder="Insira o telefone" required/>
                        <input type="url" name="avatar" placeholder="Insira a URL da imagem" required/>
                        <button type="submit" onClick={ () => this.AddItem(99) } className="add__user">Adicionar usuário</button>
                    </form>
                </div>

                

            </div>
        );
    }

}

export default Button
const mapStateToProps = state => ({isAdd:state.AddItem})
const mapDispatchToProps = dispatch => bindActionCreators({AddItem}, dispatch) 