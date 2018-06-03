/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ImageUploadService;

/**
 *
 * @author iks
 */
public class Image {
    private int id;
    private String name;
    private String data;
    
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    
    public int getId(){
        return id;
    }
    
    public void setId(int id){
        this.id=id;
    }
    
    @Override
    public String toString() {
        return String.format("{\n  id:%s,\n  name:\"%s\",\n  data:\"%s\"\n}", id, name, data);
    }
    
}
