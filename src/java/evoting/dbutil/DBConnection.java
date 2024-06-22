/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package evoting.dbutil;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author ASUS
 */
public class DBConnection {
    private static Connection conn=null;
    static
    {
        try {
            Class.forName("oracle.jdbc.OracleDriver");
            conn=DriverManager.getConnection("jdbc:oracle:thin:@//RB-PC:1521/XE", "evoting", "evoting");
        } catch (ClassNotFoundException | SQLException ex) {
            ex.printStackTrace();
        }
    }
    public static Connection getConnection()throws SQLException
    {
        return conn;
    }
    public static void closeConnection() throws SQLException
    {
        if(conn!=null)
        {
            conn.close();
        }
    }
}
