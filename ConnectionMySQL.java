import java.sql.*;

public class ConnectionMySQL {
    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;

        try {
            System.out.println("Cargando el driver JDBC...");
            // Cargar el driver JDBC de MySQL
            Class.forName("com.mysql.cj.jdbc.Driver");
            System.out.println("Driver cargado exitosamente.");

            // URL de conexión, usuario y contraseña
            String url = "jdbc:mysql://ep-dry-tooth-a5191qq7.us-east-2.aws.neon.tech:3306/projectIo";
            String user = "projectIO_owner";
            String password = "hcjlpoe8nTv1";

            System.out.println("Intentando conectar a la base de datos...");

            // Establecer la conexión
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("Conexión exitosa a la base de datos.");

            // Crear un Statement
            stmt = conn.createStatement();

        } catch (ClassNotFoundException e) {
            System.out.println("Error: El driver JDBC no fue encontrado.");
            e.printStackTrace();
        } catch (SQLException e) {
            System.out.println("Error: No se pudo conectar a la base de datos. Verifica los detalles de la conexión.");
            e.printStackTrace();
        } finally {
            try {
                // Cerrar recursos
                if (stmt != null) stmt.close();
                if (conn != null) conn.close();
                System.out.println("Conexión cerrada correctamente.");
            } catch (SQLException e) {
                System.out.println("Error al cerrar la conexión o recursos.");
                e.printStackTrace();
            }
        }
    }
}
