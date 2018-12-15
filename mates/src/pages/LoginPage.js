import React, { Component } from 'react'
import LoginEmail from '../components/LoginPage/LoginEmail'
import LoginPassword from '../components/LoginPage/LoginPassword'
import LoginButton from '../components/LoginPage/LoginButton'
import RegisterEmail from '../components/LoginPage/RegisterEmail'
import RegisterUsername from '../components/LoginPage/RegisterUsername'
import RegisterPassword from '../components/LoginPage/RegisterPassword'
import RegisterPasswordConfim from '../components/LoginPage/RegisterPaswordConfim'
import RegisterButton from '../components/LoginPage/RegisterButton'


export default class LoginPage extends Component {
  render() {
    return (
      <div>

          <div class="background-image">
	<h1 >Mates </h1>

	<div class="main">
		
		<div class="">
			<div class="signin-form profile">

				<div id="login" class="container shadow-lg p-3 mb-5 bg-white rounded">
					<h3>Login</h3>
					<div class="login-form">
						<form action="/" method="post">
							
							<LoginEmail />
                            <LoginPassword />
								

							<div class="tp">
									

									<LoginButton />
								
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div class="agile">
			<div class="signin-form profile">
				<div id="login" class="container shadow-lg p-3 mb-5 bg-white rounded">

					<h3>Register</h3>

					<div class="login-form">
						<form action="/" method="post">
							<RegisterEmail />
                            <RegisterUsername />
                            <RegisterPassword />
                            <RegisterPasswordConfim />
                         
							

								<RegisterButton />
						</form>
					</div>	
				</div>
			</div>
		</div>
		<div class="clear"></div>
	
	</div>


</div>
        
      </div>
    )
  }
}
