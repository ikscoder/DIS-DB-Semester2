/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ImageUploadService;

import java.sql.*;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
/**
 *
 * @author iks
 */
public class ImagesList {
      static final String DB_URL = "jdbc:postgresql://localhost:5432/ris";
    static final String USER = "iks";
    static final String PASS = "123456";

    public static Image findImage(String imageName){
        return (Image)images.get(imageName);
    }
    
    public static boolean deleteImage(String name){
        if (images.containsKey(name)){
            Connection connection = null;
            Statement stmt=null;
            try {
                connection = DriverManager
                        .getConnection(DB_URL, USER, PASS);

                stmt = connection.createStatement();
                String sql="delete from images where name=\'"+name+"\';";
                int delete = stmt.executeUpdate(sql);

                if(delete==0)return false;
            } catch (SQLException e) {
                System.out.println("Connection Failed");
                e.printStackTrace();
                return false;
            }finally {
                try {
                    stmt.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

            images.remove(name);
            return true;
        }

        return false;

    }

    public static boolean addImage(Image image){
        if ((!images.containsKey(image.getName()))&&(!"".equals(image.getData()))){
            Connection connection = null;
            Statement stmt=null;
            try {
                connection = DriverManager
                        .getConnection(DB_URL, USER, PASS);

                stmt = connection.createStatement();
                String sql="insert into images (name,data) values (\'"+image.getName()+"\',\'"+image.getData()+"\');";
                int insert = stmt.executeUpdate(sql);

                if(insert==0)return false;
            } catch (SQLException e) {
                System.out.println("Connection Failed");
                e.printStackTrace();
                return false;
            }finally {
                try {
                    stmt.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

            images.put(image.getName(),image);
            return true;
        }

        return false;

    }

    public static Map loadImages() throws SQLException, ClassNotFoundException {
        Class.forName("org.postgresql.Driver");

        Connection connection = null;

        connection = DriverManager.getConnection(DB_URL, USER, PASS);

        Statement stmt = connection.createStatement();
        ResultSet rs = stmt.executeQuery("select name,data from images;");
        Map<String,Image> result=new HashMap<String,Image>();
        while(rs.next()){
            Image image=new Image();
            image.setName(rs.getString("name"));
            image.setData(rs.getString("data"));
            result.put(image.getName(),image);
        }
        rs.close();
        stmt.close();
        connection.close();
        return result;
    }

    private static Map<String,Image> images;

    public static Collection<Image> getImagesList() {
        return images.values();
    }

    static {
        try {
            images = loadImages();
        } catch (SQLException e) {
            System.out.println(e.getLocalizedMessage());
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            System.out.println(e.getLocalizedMessage());
            e.printStackTrace();
        }
    }   
}
