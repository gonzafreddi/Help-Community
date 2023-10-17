
const {User} = require("../db")
const getUserByEmail = async (userEmail) => {

  console.log("getUserByEmail var userEmail", userEmail )
    try {
      const users = await User.findAll({
        where: { email: userEmail },
        attributes: ["id"],
      });
      if (users.length > 0) {
        // Devuelve el UUID del primer usuario encontrado
        return users[0].id;
      } else {
        // Maneja el caso en el que no se encontró ningún usuario
        console.error("Usuario no encontrado");
        return null; // O puedes lanzar una excepción aquí si es apropiado
      }
    } catch (error) {
      console.error("Error al buscar usuario:", error.message);
      throw error; // Deja que las excepciones se manejen en el controlador que llama a esta función
    }
  };
  
  module.exports = getUserByEmail;