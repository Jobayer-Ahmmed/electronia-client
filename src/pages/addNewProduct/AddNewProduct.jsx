import axios from "axios";
import { useForm } from "react-hook-form";

const image_upload_key = import.meta.env.VITE_image_uploaded_key;
const image_upload_api = `https://api.imgbb.com/1/upload?key=${image_upload_key}`;

const AddNewProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const imageFile = { image: data.userImage[0] };
    axios
      .post(image_upload_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data.data.display_url);
      });
  };
  return (
    <div className="flex justify-center my-myMargin ">
      <div className="p-10 shadow-xl bg-black  rounded-lg bg-opacity-20">
        <h2 className="text-textColor text-2xl font-medium pb-3 border-b mb-5">
          Insert your product details
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("product_name", { required: true })}
            placeholder="Product Name"
            type="text"
            className="w-64 md:w-80 h-10 px-2 rounded"
          />
          <br />
          {errors.email && (
            <span className="text-red-700">Product name is required</span>
          )}{" "}
          <br />
          <label htmlFor="" className="text-black">
            Insert product photo
          </label>{" "}
          <br />
          <input
            type="file"
            {...register("userImage", { required: true })}
            className="file-input file-input-bordered w-64 md:w-80 h-10 px-2 mb-5 rounded text-white"
          />
          <br />
          <input
            {...register("brand", { required: true })}
            placeholder="Brand"
            type="text"
            className="w-64 md:w-80 h-10 px-2 rounded"
          />
          <br />
          {errors.email && (
            <span className="text-red-700">Brand is required</span>
          )}{" "}
          <br />
          <input
            {...register("model", { required: true })}
            placeholder="Model"
            type="text"
            className="w-64 md:w-80 h-10 px-2 rounded"
          />
          <br />
          {errors.email && (
            <span className="text-red-700">Model is required</span>
          )}{" "}
          <br />
          <input
            {...register("price", { required: true })}
            placeholder="Price"
            type="text"
            className="w-64 md:w-80 h-10 px-2 rounded"
          />
          <br />
          {errors.email && (
            <span className="text-red-700">Price is required</span>
          )}{" "}
          <br />
          <input
            {...register("description", { required: true })}
            placeholder="Description"
            type="text"
            className="w-64 md:w-80 h-10 px-2 rounded"
          />
          <br />
          {errors.email && (
            <span className="text-red-700">Description is required</span>
          )}{" "}
          <br />
          <input
            type="submit"
            value="Add Product"
            className="mt-5 btn text-black font-bold bg-gradient-to-r from-yellow-700 to-yellow-600"
          />
          {/* bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 */}
        </form>
      </div>
    </div>
  );
};

export default AddNewProduct;
