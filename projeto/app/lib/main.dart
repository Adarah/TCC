import 'package:app/features/landing-page.dart';
import 'package:app/features/sign-in/auth-service.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

Future<void> main() async {
  await Future.wait([initHiveForFlutter(),
    Firebase.initializeApp(),
  ]);
  runApp(PoliLab());
}

class PoliLab extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'PoliLab',
      theme: _poliTheme(),
      home: GraphQLProvider(
        client: _client(),
        child: LandingPage(
          authService: FirebaseAuthService(),
        ),
      ),
    );
  }

  ValueNotifier<GraphQLClient> _client() {
    final HttpLink _httpLink = HttpLink(
      'http://localhost:8080',
    );

    final AuthLink _authLink = AuthLink(
      getToken: () => 'Bearer foo',
    );

    final Link _link = _authLink.concat(_httpLink);

    return ValueNotifier(GraphQLClient(
      cache: GraphQLCache(
        store: HiveStore(),
      ),
      link: _link,
    ));
  }

  ThemeData _poliTheme() {
    const Color primary = Color.fromRGBO(1, 33, 105, 1);
    const Color accent = Color.fromRGBO(254, 221, 0, 1);
    return ThemeData.light().copyWith(
      primaryColor: primary,
      accentColor: accent,
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(primary: accent),
      ),
    );
  }
}
