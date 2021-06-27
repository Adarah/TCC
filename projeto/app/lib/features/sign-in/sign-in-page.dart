import 'package:app/features/sign-in/auth-service.dart';
import 'package:flutter/material.dart';

class SignInPage extends StatelessWidget {
  final AuthService authService;

  SignInPage({required this.authService});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(
          child: Text('Sign In'),
        ),
      ),
      body: Container(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            // mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Image.asset('assets/minerva.png'),
              Text(
                'Poli Lab',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 50.0,
                  fontWeight: FontWeight.bold,
                ),
              ),
              _signInButton(),
              _signUpButton(),
            ],
          ),
        ),
      ),
    );
  }

  Widget _signInButton(BuildContext context) {
    return ElevatedButton.icon(
      onPressed: () => Navigator.of(context).push('/'),
      icon: Icon(Icons.login),
      label: Text(
        'Cadastrar',
        style: TextStyle(
          fontSize: 20.0,
        ),
      ),
      style: ButtonStyle(backgroundColor: jkkkk),
    );
  }

  Widget _signUpButton() {
    return ElevatedButton.icon(
      onPressed: () =>
          authService.signInWithEmailAndPassword('foo@gmail.com', 'foobar'),
      icon: Icon(Icons.login),
      label: Text(
        'Cadastrar',
        style: TextStyle(
          fontSize: 20.0,
        ),
      ),
      style: ButtonStyle(backgroundColor: jkkkk),
    );
  }
}
