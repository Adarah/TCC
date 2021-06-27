import 'package:flutter/material.dart';

class SignInButton extends StatelessWidget {
  const SignInButton({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton.icon(
      onPressed: () =>
          authService.signInWithEmailAndPassword(
              'foo@gmail.com', 'foobar'),
      icon: Icon(Icons.login),
      label: Text(
        'Acessar',
        style: TextStyle(
          fontSize: 20.0,
        ),
      ),
    )
    ,
  }
}

