const { db, admin } = require("../firebase");

class User {
  constructor() {
    this.collection = db.collection("users");
  }

  //Create a new user in Firebase Auth and Firestore
  async create(userData) {
    try {
      const { name, email, password } = userData;

      // 1. Create Firebase Auth user
      const authUser = await admin.auth().createUser({
        email,
        password,
        displayName: name,
      });

      // 2. Save to Firestore
      await this.collection.doc(authUser.uid).set({
        uid: authUser.uid,
        name,
        email,
        role: "user",
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      return authUser.uid;
    } catch (error) {
      throw new Error(`User creation failed: ${error.message}`);
    }
  }

  // Promote a user to admin role
  async promoteToAdmin(uid) {
    try {
      // 1. Set Firebase Auth custom claim
      await admin.auth().setCustomUserClaims(uid, { role: "admin" });

      // 2. Update Firestore role
      await this.collection.doc(uid).update({ role: "admin" });
    } catch (error) {
      throw new Error(`Admin promotion failed: ${error.message}`);
    }
  }

  // Find user by email
  async findByEmail(email) {
    const snapshot = await this.collection
      .where("email", "==", email)
      .limit(1)
      .get();

    return snapshot.docs[0]?.data() || null;
  }

  // Get user by UID
  async getById(uid) {
    const doc = await this.collection.doc(uid).get();
    return doc.exists ? doc.data() : null;
  }
}

module.exports = User;
