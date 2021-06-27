import 'package:firebase_auth/firebase_auth.dart';

abstract class AuthService {
  User? get currentUser;
  Stream<User?> authStateChanges();
  Future<User?> signInWithEmailAndPassword(String email, String password);
  Future<void> signOut();
}

class FirebaseAuthService implements AuthService {
  final FirebaseAuth auth = FirebaseAuth.instance;

  @override
  User? get currentUser => auth.currentUser;

  @override
  Stream<User?> authStateChanges() {
    // TODO: implement authStateChanges
    return auth.authStateChanges();
  }

  @override
  Future<User?> signInWithEmailAndPassword(String email, String password) async {
    try {
      var userCredential = await auth.signInWithEmailAndPassword(
        email: email,
        password: password,
      );
      print(userCredential);
      print(await userCredential.user?.getIdToken());
      return userCredential.user;
    } on FirebaseAuthException catch (e) {
      // TODO: Add Sentry notification?
      if (e.code == 'user-not-found') {
        print('No user found for that email.');
      } else if (e.code == 'wrong-password') {
        print('Wrong password provided for that user.');
      }
    }
  }

  @override
  Future<void> signOut() {
    return auth.signOut();
  }

}
