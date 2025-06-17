import axios from "axios";

// Configuración base de la API
const API_BASE_URL = "http://localhost:3000/api/v1";

// Crear instancia de axios
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor de respuestas (response)
apiClient.interceptors.response.use(
  (response) => {
    if (process.env.NODE_ENV === "development") {
      console.log("✅ Response:", {
        status: response.status,
        data: response.data,
      });
    }
    return response;
  },
  (error) => {
    const { response, request, message } = error;

    if (response) {
      const { status, data } = response;

      switch (status) {
        case 401:
          localStorage.removeItem("authToken");
          window.location.href = "/login";
          break;
        case 403:
          console.error("❌ Acceso denegado");
          break;
        case 404:
          console.error("❌ Recurso no encontrado");
          break;
        case 500:
          console.error("❌ Error interno del servidor");
          break;
        default:
          console.error(
            `❌ Error ${status}:`,
            data?.message || "Error desconocido"
          );
      }

      return Promise.reject({
        status,
        message: data?.message || "Error en la respuesta del servidor",
        data: data,
      });
    } else if (request) {
      // Error de red
      console.error("❌ Error de red:", message);
      return Promise.reject({
        status: 0,
        message: "Error de conexión. Verifica tu conexión a internet.",
      });
    } else {
      // Error en la configuración
      console.error("❌ Error de configuración:", message);
      return Promise.reject({
        status: -1,
        message: "Error en la configuración de la petición",
      });
    }
  }
);

// ==================== RESTAURANTES ====================
export async function getRestaurants() {
  try {
    const response = await apiClient.get("/restaurants");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getDishes() {
  try {
    const response = await apiClient.get("/dishes");
    return response.data;
  } catch (error) {
    throw error;
  }
}
