import 'package:app/features/home-page.dart';
import 'package:app/features/sign-in/auth-service.dart';
import 'package:app/features/sign-in/sign-in-page.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class LandingPage extends StatelessWidget {
  final AuthService authService;

  const LandingPage({required this.authService});

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<User?>(
      stream: authService.authStateChanges(),
      builder: (context, snapshot) {
        if (snapshot.connectionState != ConnectionState.active) {
          return CircularProgressIndicator();
        }

        if (snapshot.data == null) {
          return SignInPage(
            authService: authService,
          );
        }

        return HomePage(
          authService: authService,
        );
      },
    );
  }
}
