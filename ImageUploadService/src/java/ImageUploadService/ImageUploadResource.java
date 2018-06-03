package ImageUploadService;


import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import javax.ejb.Stateless;

import javax.ws.rs.Path;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import static javax.ws.rs.HttpMethod.POST;
import javax.ws.rs.POST;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Stateless
@Path("/images")
public class ImageUploadResource {
    

    @GET
    @Produces({ MediaType.APPLICATION_JSON })
    public Response getImageByName(@QueryParam("name")String name) {
        Image result=ImagesList.findImage(name);
        Gson gson = new GsonBuilder().disableHtmlEscaping().create();
        return result != null
                ?Response.ok(gson.toJson(result)).build()
                :Response.status(204).build();
    }

    @PUT
    @Consumes({ MediaType.APPLICATION_JSON })
    public Response setImage(String imageJSON) {
        Gson gson = new GsonBuilder().disableHtmlEscaping().create();
        Image img=gson.fromJson(imageJSON, Image.class);
        return ImagesList.addImage(img)
                ?Response.status(201).build()
                :Response.status(400).build();
    }
    
    @POST
    @Consumes({ MediaType.APPLICATION_JSON })
    @Produces({ MediaType.APPLICATION_JSON })
    public Response deleteImage(@QueryParam("name")String name) {
        return ImagesList.deleteImage(name)
                ?Response.status(201).build()
                :Response.status(400).build();
    }
}
