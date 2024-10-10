import java.sql.*;

public class ConnectionMySQL {
    public static void main(String[] args) {
        try {
            // Cargar el driver JDBC de MySQL
            Class.forName("com.mysql.cj.jdbc.Driver");

            // URL de conexión, usuario y contraseña
            String url = "jdbc:mysql://ep-dry-tooth-a5191qq7.us-east-2.aws.neon.tech:3306/projectIo";  // Corregido
            String user = "projectIO_owner";
            String password = "hcjlpoe8nTv1";

            // Establecer la conexión
            Connection conn = DriverManager.getConnection(url, user, password);

            // Crear un Statement
            Statement stmt = conn.createStatement();

            // Cerrar recursos
            stmt.close();
            conn.close();
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }
}