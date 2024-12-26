"use client"

// import { useState } from 'react';

// const FormComponent = ({ addItem }) => {
//   const [formData, setFormData] = useState({ name: '', description: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addItem(formData);
//     setFormData({ name: '', description: '' });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-5">
//       <div className="mb-4">
//         <label className="block text-gray-700">Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="mt-1 p-2 border border-gray-300 rounded w-full"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Description</label>
//         <input
//           type="text"
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           className="mt-1 p-2 border border-gray-300 rounded w-full"
//         />
//       </div>
//       <button type="submit" className="p-2 bg-blue-500 text-white rounded">Save</button>
//     </form>
//   );
// };

// export default FormComponent;

// components/FormComponent.jsx
import { useState } from 'react';

const FormComponent = ({ addItem }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(formData);
    setFormData({ name: '', description: '', image: null });
    setImagePreview(null);
  };

  return (
    <form onSubmit={handleSubmit} className="p-5">
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Image</label>
        <input
          type="file"
          onChange={handleImageChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Image Preview"
            className="mt-2 w-[600px] h-[600px] object-cover"
          />
        )}
      </div>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Save
      </button>
    </form>
  );
};

export default FormComponent;
