import 'package:app/features/sign-in/auth-service.dart';
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  final AuthService authService;

  const HomePage({required this.authService});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
        actions: [
          IconButton(
            onPressed: authService.signOut,
            icon: Icon(Icons.logout),
          ),
        ],
      ),
    );
  }
}
