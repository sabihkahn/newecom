//createproductcontroller
import produtmodel from "./produtmodel.js"
import fs from 'fs'
import personmodel from "./personmodel.js"
export const createproductcontroller = async (req, res) => {

    try {

        const { name,  description, price} = req.fields

        const { photo } = req.files

        // validation from switch statement

        switch (true) {
            case !name: return res.status(500).send({ error: 'Name is required' })
            case !description: return res.status(500).send({ error: 'Name is required' })
            case !price: return res.status(500).send({ error: 'Name is required' })
            case photo && photo.size > 5 * 1024 * 1024: return res.status(500).send({ error: 'photo should be less thqan 5 mb' })

        }

        const products = new produtmodel({ ...req.fields})
        if (photo) {
            products.photo.data = fs.readFileSync(photo.path)
            products.photo.contentType = photo.type
        }
        await products.save();
        
        res.status(201).send({
            sucess: true,
            message: 'Product created successfully',
            products
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            sucess: false,
            message: 'Error in creating product',
            error
        })
    }


}
export const deleteproductcontroller = async (req,res) =>{
try {
    const delete1 = await produtmodel.findByIdAndDelete(req.params.pid)
res.status(200).send({
    sucess:true,
    message:"product deleted sucesssfully", 
    delete1
})


} catch (error) {
    console.log(error)
}

}
export const persondatacontroller = async (req, res) => {
    try {
      
        const { name, email, phone, address } = req.body;

        if (!name || !email || !phone || !address) {
            return res.status(400).send({
                success: false,
                message: "All fields (name, email, phone, address) are required",
            });
        }

        const userData = new personmodel({ name, email, phone, address });
        await userData.save();

        res.status(201).send({
            success: true,
            message: "User data saved successfully",
            userData,
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({
            success: false,
            message: "Error saving user data",
            error: error.message,
        });
    }
};


// ✅ 4. Get Person Data (Fixed missing `await` in query)
export const getpersondatacontroller = async (req, res) => {
    try {
        const data = await personmodel.find({}); // Added `await`

        res.status(200).send({
            success: true,
            message: "User data retrieved successfully",
            data,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Error fetching user data",
            error: error.message,
        });
    }
};