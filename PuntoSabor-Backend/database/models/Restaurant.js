const { db } = require("../firebase");

class Restaurant {
  constructor() {
    this.collection = db.collection("localFood");
  }

  // Create a new restaurant
  async create(restaurantData) {
    try {
      const docRef = await this.collection.add({
        ...restaurantData,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return { id: docRef.id, ...restaurantData };
    } catch (error) {
      throw new Error(`Error creating restaurant: ${error.message}`);
    }
  }

  // Get restaurant by ID
  async getById(id) {
    try {
      const doc = await this.collection.doc(id).get();
      if (!doc.exists) {
        return null;
      }
      return { id: doc.id, ...doc.data() };
    } catch (error) {
      throw new Error(`Error getting restaurant: ${error.message}`);
    }
  }

  // Get all restaurants with dishes
  async getAll(limit, offset) {
    try {
      let query = this.collection;
      if (limit) {
        query = query.limit(parseInt(limit));
      }

      if (offset) {
        query = query.offset(parseInt(offset));
      }

      const restaurantsSnapshot = await query.get();

      if (restaurantsSnapshot.empty) {
        return [];
      }

      const restaurants = [];

      // Procesar cada restaurante
      for (const restaurantDoc of restaurantsSnapshot.docs) {
        const restaurantData = {
          id: restaurantDoc.id,
          data: restaurantDoc.data(),
          dishes: [],
        };

        // Obtener los platillos de cada restaurante
        const dishesSnapshot = await restaurantDoc.ref
          .collection("dishes")
          .get();

        if (!dishesSnapshot.empty) {
          dishesSnapshot.forEach((dishDoc) => {
            restaurantData.dishes.push({
              id: dishDoc.id,
              data: dishDoc.data(),
            });
          });
        }

        restaurants.push(restaurantData);
      }

      return restaurants;
    } catch (error) {
      console.error("Error fetching restaurants from Firebase:", error);
      throw new Error("Error al obtener restaurantes de la base de datos");
    }
  }

  // Search restaurants by name
  async searchByName(name) {
    try {
      const snapshot = await this.collection
        .where("name", ">=", name)
        .where("name", "<=", name + "\uf8ff")
        .get();

      const restaurants = [];
      snapshot.forEach((doc) => {
        restaurants.push({ id: doc.id, ...doc.data() });
      });

      return restaurants;
    } catch (error) {
      throw new Error(`Error searching restaurants: ${error.message}`);
    }
  }

  // Update restaurant
  async update(id, updateData) {
    try {
      await this.collection.doc(id).update({
        ...updateData,
        updatedAt: new Date(),
      });
      return await this.getById(id);
    } catch (error) {
      throw new Error(`Error updating restaurant: ${error.message}`);
    }
  }

  // Delete restaurant
  async delete(id) {
    try {
      await this.collection.doc(id).delete();
      return { message: "Restaurant deleted successfully" };
    } catch (error) {
      throw new Error(`Error deleting restaurant: ${error.message}`);
    }
  }

  // Search restaurants by dish name
  async searchByDish(dishName) {
    try {
      const restaurants = [];
      const restaurantsSnapshot = await this.collection.get();

      for (const restaurantDoc of restaurantsSnapshot.docs) {
        const dishesSnapshot = await restaurantDoc.ref
          .collection("dishes")
          .where("name", ">=", dishName.toLowerCase())
          .where("name", "<=", dishName.toLowerCase() + "\uf8ff")
          .get();

        if (!dishesSnapshot.empty) {
          const dishes = [];
          dishesSnapshot.forEach((dishDoc) => {
            dishes.push({ id: dishDoc.id, ...dishDoc.data() });
          });

          restaurants.push({
            id: restaurantDoc.id,
            ...restaurantDoc.data(),
            matchingDishes: dishes,
          });
        }
      }

      return restaurants;
    } catch (error) {
      throw new Error(`Error searching restaurants by dish: ${error.message}`);
    }
  }
}

module.exports = Restaurant;
