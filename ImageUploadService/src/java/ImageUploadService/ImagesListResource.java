/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ImageUploadService;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.util.stream.Collectors;
import javax.ejb.Stateless;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author iks
 */
@Stateless
@Path("/imagesList")
public class ImagesListResource {
    
    @GET
    @Produces({ MediaType.APPLICATION_JSON })
    public String getImagesList() {
        Gson gson = new GsonBuilder().disableHtmlEscaping().create();
        return gson.toJson(ImagesList.getImagesList()
                .stream()
                .map(x -> x.getName())
                .collect(Collectors.toList()));
    }
}
